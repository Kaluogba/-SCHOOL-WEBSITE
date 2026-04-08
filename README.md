# KIE School Web Platform

A comprehensive learning management system with video lessons, CBT quizzes, AI-driven recommendations, chat, payment tracking, and WhatsApp notifications to parents.

## Project Structure

```
SCHOOL-WEBSITE/
├── index.html              # Homepage (features overview + navigation)
├── about.html              # About page + testimonials
├── contact.html            # Contact form + info
├── courses.html            # Course listing page
├── registration.html       # Student registration (with parent/guardian details)
├── signin.html             # Login form
├── dashboard.html          # Student dashboard (overview, AI insights, courses)
├── video.html              # Video lesson page with watch-time tracking
├── quiz.html               # Randomized CBT quiz page
├── chat.html               # Q&A chat interface
├── CSS/
│   └── style.css           # Global styles (mobile-first responsive)
├── JAVASCRIPT/
│   └── main.js             # Navbar scroll, mobile menu, demo form handling
└── images/                 # (empty for now - add your images here)

```

## Current Status (Frontend-Only, Ready for Backend Integration)

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Mobile-friendly hamburger menu
- ✅ Consistent design system across all pages
- ✅ Registration form (captures student + parent details + subjects + payment method)
- ✅ Sign in form
- ✅ Course catalog with payment status indicators (dummy data)
- ✅ Student dashboard with stats, AI tips (static), courses overview
- ✅ Video lesson page with watch-time tracking timer (15+ minute requirement)
- ✅ Quiz page with timer, question buttons, and mock scoring
- ✅ Chat page with basic user/instructor UI

## Features Implemented in Frontend

1. **Student Registration** – captures student info, parent/guardian info (incl. WhatsApp number), subject selection, payment method, and amount.
2. **Sign In** – login form (demo)
3. **Courses** – grid of available subjects per category, each showing payment status (locked/unlocked)
4. **Dashboard** – shows stats (completed lessons, quizzes, average score), payment banner, AI card (static tips), and course progress
5. **Video Lesson** – embeds YouTube, counts watch time, unlocks quiz only after meeting required time
6. **CBT Quiz** – timer (15 min), sample questions, score result alert
7. **Chat** – message list + send form, auto-scroll, simulated instructor reply
8. **AI Student Manager** – represented by AI card on dashboard with personalized insights

## Pending: Backend Requirements

To make the platform functional, you need to implement:

1. **Authentication** – Register/Login with sessions (JWT or server-side sessions). Store password hashes.
2. **Database Schema** (SQL or NoSQL):
   - Users (students, parents linkage)
   - Courses/Subjects
   - Lessons (each YouTube video per topic)
   - Enrolments (learning path per student)
   - Payments (tracking status, amount, dates)
   - Watch time records (per video per student)
   - Quiz bank (questions per subject)
   - Quiz attempts (questions shown, answers, score, timestamp)
   - Chat messages
   - AI insights (student performance data, stored analysis)
3. **APIs needed:**
   - POST `/api/register` – create account
   - POST `/api/login` – authenticate
   - GET `/api/courses` – list available courses
   - GET `/api/lessons?subject=X` – list videos for a subject
   - POST `/api/watch-time` – start/stop tracking, enforce minimum time
   - GET `/api/quiz` – returns randomized set based on lesson
   - POST `/api/quiz/submit` – score quiz, record results
   - POST `/api/chat/send` – send message
   - GET `/api/chat/history`
   - GET `/api/ai/recommendations` – personalized suggestions per student
   - POST `/api/payment/verify` – callback from payment provider
4. **Payment Integration** (Paystack, Flutterwave, or Stripe):
   - Generate payment link upon registration
   - Webhook to update course unlocking
5. **WhatsApp Notifications** (Twilio WhatsApp API or a local aggregator):
   - Send messages to parent's WhatsApp after quiz completion, watch milestones, or AI recommendations.
6. **AI Component** – Python script or Node module that analyzes student data and generates recommendations. Could start rule-based:
   - If quiz score < 60: suggest re-watching previous lessons
   - If time on video < required: warn
   - If engagement high: encourage to continue

## Deploying

This is a static frontend: you can deploy immediately to:
- Netlify (drag & drop / Git)
- Vercel
- GitHub Pages

**Deploy now** (to test the UI):
1. Go to [Netlify.com](https://netlify.com)
2. Drag the `/home/kaykay/SCHOOL-WEBSITE` folder onto the page
3. Get a live URL

**Note:** The site currently uses `demo-form` handlers that just show an alert. Replace those with real API calls once backend is ready.

## Configuration

- All CSS in `CSS/style.css` uses CSS variables for easy theming.
- Mobile breakpoints at 768px and 480px included.
- Icons via [Unicons](https://iconscout.com/unicons/).
- Font: Google Fonts `Montserrat`.

## Customization

- Update phone numbers, email, and address in footer of any page (currently placeholder values).
- To add real YouTube videos: replace the `src` in `video.html` with your own video embed ID.
- To edit question bank: build backend storage; the quiz page currently has sample questions.

---

Once the backend is built, replace the mock data in `dashboard.html`, `quiz.html`, `video.html`, and `chat.html` with dynamic content from your API.

Good luck building the full platform!
