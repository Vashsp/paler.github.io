# paler.github.io

This project is a static language-learning website with practice exercises and sequential assessments.

## Run locally

1. Open a terminal in the project folder.
2. Start a local web server:
   python3 -m http.server 8000
3. Visit http://localhost:8000 in your browser.

## Shared visitor feedback

Feedback is stored in Supabase so visitors can see the same reviews and average rating. The summary counts all reviews; the page lists the 50 newest.

1. Create a Supabase project.
2. In the Supabase SQL Editor, run `supabase-feedback.sql`.
3. In `supabase-config.js`, set `url` to the project's Project URL and `anonKey` to its publishable key (or legacy anon key). These browser values are public; never put a `service_role` key in this file.
4. Deploy the site and verify that the Feedback page can load and post a review.

Visitor names, ratings, and comments are publicly readable. The table allows public reads and inserts only; visitors cannot edit or delete reviews through the site.

## Assessment rules

- Assessments unlock in order.
- Each assessment can be submitted only once.
- Once an assessment is submitted, its score and answers are saved. You can review the questions, correct answers, and explanations later, but you cannot retake it.
- To continue, complete the preceding assessment before the next one becomes available.

## Project files

- index.html: page structure and content
- styles.css: site styling
- script.js: quiz logic, assessment flow, and interactive behavior