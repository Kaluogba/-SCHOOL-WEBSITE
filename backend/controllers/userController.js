const User = require('../models/User');
const Course = require('../models/Course');

exports.getDashboardStats = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Determine exam type level from classLevel (e.g., "SSS1" -> "SSS", "JSS2" -> "JSS")
    let examTypeMatch = 'SSS'; // Default fallback
    if (user.classLevel && user.classLevel.toUpperCase().includes('JSS')) {
      examTypeMatch = 'JSS';
    } else if (user.classLevel && user.classLevel.toUpperCase().includes('SSS')) {
      examTypeMatch = 'SSS';
    }

    // Fetch live courses matching User Level
    const allCourses = await Course.find({ examType: examTypeMatch });
    
    // Filter array to match their registered subjects (If none empty, show all)
    const activeSubjects = user.subjects || [];
    let matchedCourses = allCourses;
    
    if (activeSubjects.length > 0) {
      matchedCourses = allCourses.filter(c => activeSubjects.includes(c.title));
    }
    
    // Flatten course lessons into a dashboard display array
    const displayCourses = [];
    matchedCourses.forEach(course => {
      course.lessons.forEach(lesson => {
        displayCourses.push({
          title: `${course.title} - ${lesson.title}`,
          type: 'Video',
          duration: `${Math.floor(lesson.duration / 60)} min`,
          progressClass: 'course-progress-bar-fill-warning',
          actionText: 'Watch Video',
          actionLink: `video.html?url=${encodeURIComponent(lesson.videoUrl)}&title=${encodeURIComponent(lesson.title)}&lessonId=${lesson._id}`,
          locked: false
        });
      });
    });

    res.status(200).json({
      success: true,
      stats: {
        completed: user.enrolledCourses.length > 0 ? 12 : 0, 
        passed: 8,
        pending: 2,
        score: '85%'
      },
      aiInsights: [
        `You spent <strong>20% more time</strong> on physics videos – great engagement!`,
        `The AI recommends you review your saved lessons next.`
      ],
      courses: displayCourses.slice(0, 6) // Return up to 6 lessons for dashboard
    });

  } catch (error) {
    console.error('Dashboard Stats Error:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
