# Backend Architecture Plan (KIE School Platform)

## Stack Options

| Layer | Recommended Tech |
|------|-------------------|
| Language | Node.js (Express) or Python (FastAPI) |
| Database | PostgreSQL (or MongoDB for flexibility) |
| Auth | JWT with refresh tokens or server-session |
| Payments | Paystack/Flutterwave/Rave (Nigerian-friendly) |
| WhatsApp | Twilio WhatsApp Business API or send via a WhatsApp aggregator service |
| Hosting | Vercel (Node), Railway, Render, AWS, or DigitalOcean droplet |
| AI/Recommendations | Python scikit-learn or simple rule engine; expose predictions via API |

---

## Database Schema (SQL example)

```sql
-- Users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    role VARCHAR(20) DEFAULT 'student', -- student/parent/instructor/admin
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Parent/Guardian (linked to student via student_parents)
CREATE TABLE guardians (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id), -- associated parent account (if they login separately)
    whatsapp VARCHAR(20) NOT NULL,
    relationship VARCHAR(50),
    full_name VARCHAR(200)
);

-- Student profile + parent linkage
CREATE TABLE student_profiles (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    dob DATE,
    gender VARCHAR(10),
    current_school VARCHAR(250),
    class VARCHAR(50), -- SS1, JS2 etc.
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE student_parents (
    student_id INT REFERENCES student_profiles(id),
    guardian_id INT REFERENCES guardians(id),
    PRIMARY KEY (student_id, guardian_id)
);

-- Courses (e.g., Mathematics, Physics)
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    exam_type VARCHAR(50) -- WAEC, JAMB, etc.
);

-- Subject lessons (belongs to course)
CREATE TABLE lessons (
    id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(id),
    title VARCHAR(255),
    youtube_video_id VARCHAR(50), -- YouTube VIDEO ID only
    duration_seconds INT, -- required watch time (could be actual video duration or slightly longer)
    sort_order INT
);

-- Enrolments: student's learning path (after payment)
CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES student_profiles(id),
    course_id INT REFERENCES courses(id),
    enrollment_date TIMESTAMPTZ DEFAULT NOW(),
    unlocked_lesson_id INT REFERENCES lessons(id) -- current access level: can watch up to this lesson
);

-- Payments
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES student_profiles(id),
    amount DECIMAL(10,2),
    method VARCHAR(50), -- card, bank-transfer
    provider VARCHAR(50), -- paystack, flutterwave
    provider_ref VARCHAR(150) UNIQUE,
    status VARCHAR(20), -- pending, verified, failed
    verified_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Watch time logs
CREATE TABLE watch_sessions (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES student_profiles(id),
    lesson_id INT REFERENCES lessons(id),
    seconds_watched INT DEFAULT 0,
    completed BOOLEAN DEFAULT FALSE,
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ
);

-- Questions bank
CREATE TABLE quiz_questions (
    id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(id),
    question TEXT NOT NULL,
    option_a TEXT,
    option_b TEXT,
    option_c TEXT,
    option_d TEXT,
    correct_answer VARCHAR(1) -- 'a','b','c','d'
);

-- Quiz attempts (after a lesson)
CREATE TABLE quiz_attempts (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES student_profiles(id),
    lesson_id INT REFERENCES lessons(id),
    score_percent INT,
    passed BOOLEAN DEFAULT FALSE,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chat messages (student <-> instructors)
CREATE TABLE chat_messages (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES student_profiles(id),
    sender_role VARCHAR(20), -- student, instructor, system
    content TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI insights (generated periodically or on demand)
CREATE TABLE ai_insights (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES student_profiles(id),
    insight_text TEXT,
    generated_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## API Endpoints (Illustrative)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Create student + parent linked account |
| POST | `/api/auth/login` | Authenticate and return JWT |
| GET | `/api/courses` | List all courses |
| GET | `/api/courses/:id/lessons` | Lessons that student is entitled to (based on payment/unlock) |
| POST | `/api/watch/start` | Begin watch session (record) |
| POST | `/api/watch/tick` | Periodic heartbeat (update seconds watched) |
| POST | `/api/watch/complete` | Mark lesson complete (when threshold met) |
| GET | `/api/quiz/start` | Randomly pick 10 questions for current lesson |
| POST | `/api/quiz/submit` | Score answers, record attempt, return result |
| GET | `/api/chat/messages` | Paginated history |
| POST | `/api/chat/send` | Student sends a message |
| GET | `/api/ai/recommendations` | Return insight text from ai_insights table |
| POST | `/api/payment/init` | Create payment request (get payment link) |
| POST | `/api/payment/webhook` | Paystack/Flutterwave webhook to verify |

---

## WhatsApp Notification Flow

- Trigger events:
  - Quiz passed/failed (`quiz_attempts` insert)
  - Lesson completed (`watch_sessions` completed=true)
  - New chat message from student (optional)
- Implementation:
  - After storing the event, enqueue a background job (Redis + Bull or a cron) to call Twilio's WhatsApp API.
  - Message template: "Hello [Parent], your child [Student] just completed [Topic] with a score of [X]. Keep up the great work!"
- Use stored guardian's WhatsApp from `guardians.whatsapp`.

---

## AI Recommendation Engine (Simple Rule-Based)

```python
def get_recommendations(student_id):
    # fetch stats: avg_score, time_spent, recent_activities
    # if avg_score < 60:
    #   return "Please re-watch the previous videos on Topic Y"
    # elif avg_score > 85:
    #   return "Consider moving to a more advanced topic"
    # else:
    #   return "Great work! Keep a consistent study schedule."
    # could also incorporate quiz frequency, time gaps, etc.
```

You can later replace with a scikit-learn model to predict topics needing improvement.

---

## Deployment Strategy

1. **Backend** – Deploy to a VPS (DigitalOcean) or Platform-as-a-Service (Railway/Render). Use PostgreSQL and Redis.
2. **Frontend** – Build the React version later if needed; for now static HTML can stay and call APIs from the same origin or a separate subdomain.
3. **Webhook Expose** – Use ngrok for testing or set up a public endpoint for payment providers to call.
4. **Domain & SSL** – Certbot + Nginx (or let host handle it).

---

## Implementation Order

1. Set up project (Node/FastAPI), install dependencies.
2. Build auth routes (register, login), issue JWT.
3. Build courses/lessons CRUD (admin to populate) + student enrollment trigger on payment verification.
4. Build payment flow (initiate -> redirect -> webhook verification -> unlock courses).
5. Build watch-time recording.
6. Build quiz generation (random selection) and scoring.
7. Build chat (store/retrieve).
8. Build WhatsApp notification after key events.
9. Build AI module (daily cron: compute insights per student).
10. Connect the frontend pages to the APIs (replace demo data).
11. Deploy.

---

## Notes

- As of current state, the HTML pages are static and meant to be powered by these APIs.
- All sensitive operations should be server-side (quiz results finalization).
- Validate on the backend that the student has unlocked the quiz before showing (quiz should be hidden until time requirement met).
- Ensure WhatsApp opt-in compliance.
