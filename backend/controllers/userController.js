const User = require('../models/User');
const Course = require('../models/Course');
const QuizAttempt = require('../models/QuizAttempt');

exports.getDashboardStats = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Determine exam type from classLevel
    let examTypeMatch = 'SSS';
    if (user.classLevel && user.classLevel.toUpperCase().includes('JSS')) {
      examTypeMatch = 'JSS';
    }

    // Fetch courses matching the student's level and subjects
    const allCourses = await Course.find({ examType: examTypeMatch });
    const activeSubjects = user.subjects || [];
    let matchedCourses = allCourses;
    if (activeSubjects.length > 0) {
      matchedCourses = allCourses.filter(c => activeSubjects.includes(c.title));
    }

    // Build course cards for dashboard display (up to 6)
    const displayCourses = [];
    matchedCourses.forEach(course => {
      course.lessons.forEach(lesson => {
        displayCourses.push({
          title: `${course.title} — ${lesson.title}`,
          type: 'Video',
          duration: `${Math.floor(lesson.duration / 60)} min`,
          progressClass: 'course-progress-bar-fill-warning',
          actionText: 'Watch Video',
          actionLink: `video.html?url=${encodeURIComponent(lesson.videoUrl)}&title=${encodeURIComponent(lesson.title)}&lessonId=${lesson._id}`,
          locked: false
        });
      });
    });

    // Real stats from QuizAttempt collection
    const attempts = await QuizAttempt.find({ userId: req.user.id });
    const totalAttempts = attempts.length;
    const passedAttempts = attempts.filter(a => a.passed).length;
    const avgScore = totalAttempts > 0
      ? Math.round(attempts.reduce((sum, a) => sum + a.percentage, 0) / totalAttempts)
      : 0;

    // Rule-based AI insights
    const insights = [];
    if (totalAttempts === 0) {
      insights.push('🚀 You haven\'t taken any quizzes yet. Watch a video and get started!');
      insights.push(`📚 You have ${displayCourses.length} lessons available in your learning path.`);
    } else {
      if (avgScore >= 80) {
        insights.push(`🌟 Excellent performance! Your average quiz score is <strong>${avgScore}%</strong>. Keep it up!`);
      } else if (avgScore >= 50) {
        insights.push(`📈 Good progress! Your average score is <strong>${avgScore}%</strong>. Reviewing past videos will push you higher.`);
      } else {
        insights.push(`⚠️ Your average score is <strong>${avgScore}%</strong>. Try re-watching the lessons before retaking quizzes.`);
      }

      const failedAttempts = totalAttempts - passedAttempts;
      if (failedAttempts > 0) {
        insights.push(`🔄 You have <strong>${failedAttempts} quiz(zes)</strong> you didn't pass. Revisit those topics to improve.`);
      } else {
        insights.push(`✅ You've passed all <strong>${passedAttempts}</strong> quiz(zes) you've taken. Fantastic!`);
      }
    }

    res.status(200).json({
      success: true,
      stats: {
        completed: totalAttempts,
        passed: passedAttempts,
        pending: Math.max(0, displayCourses.length - totalAttempts),
        score: totalAttempts > 0 ? `${avgScore}%` : 'N/A'
      },
      aiInsights: insights,
      courses: displayCourses.slice(0, 6)
    });

  } catch (error) {
    console.error('Dashboard Stats Error:', error);
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
