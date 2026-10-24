const navButtons = document.querySelectorAll(".nav-link");
const pageSections = document.querySelectorAll(".page");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const brandButton = document.querySelector(".brand");
const actionButtons = document.querySelectorAll("[data-target]");
const videoCards = document.querySelectorAll(".video-card");
const videoModal = document.getElementById("video-modal");
const lessonVideo = document.getElementById("lesson-video");
const modalClose = document.querySelector(".modal-close");
const partResultModal = document.getElementById("part-result-modal");
const continueAssessmentButton = document.getElementById("continue-assessment-btn");
const reviewPartButton = document.getElementById("review-part-btn");
const partConfirmModal = document.getElementById("part-confirm-modal");
const confirmPartSubmitButton = document.getElementById("confirm-part-submit-btn");
const reviewBeforeSubmitButton = document.getElementById("review-before-submit-btn");
const assessmentPicker = document.getElementById("assessment-picker");
const assessmentQuiz = document.getElementById("assessment-quiz");

const assessmentParts = [
  {
    title: "Figurative Language",
    questions: [
      {
        question: 'Which figure of speech compares two different things using “like” or “as”?',
        prompt: "Choose the best answer.",
        options: ["Metaphor", "Simile", "Hyperbole", "Personification"],
        answer: 1,
      },
      {
        question: '“The classroom was a zoo during recess.”',
        prompt: "Which figure of speech is used?",
        options: ["Simile", "Idiom", "Metaphor", "Hyperbole"],
        answer: 2,
      },
      {
        question: "Which sentence uses personification?",
        prompt: "Choose the sentence that gives something nonhuman a human action or quality.",
        options: [
          "The thunder grumbled angrily across the sky.",
          "The thunder was as loud as a drum.",
          "The thunder was a giant drum.",
          "The thunder shook the entire universe.",
        ],
        answer: 0,
      },
      {
        question: 'What does “I’m so hungry I could eat a horse” demonstrate?',
        prompt: "Choose the figure of speech.",
        options: ["Simile", "Personification", "Idiom", "Hyperbole"],
        answer: 3,
      },
      {
        question: 'What does the idiom “spill the beans” mean?',
        prompt: "Choose the meaning of the idiom.",
        options: ["Prepare a meal", "Reveal a secret", "Make a mess", "Change a decision"],
        answer: 1,
      },
      {
        question: "Which sentence is an example of a simile?",
        prompt: "Choose the best answer.",
        options: [
          "The stars were diamonds in the sky.",
          "The stars winked at us.",
          "The stars glittered like tiny lamps.",
          "I have counted a billion stars.",
        ],
        answer: 2,
      },
      {
        question: 'In the sentence “Time is a thief,” what is being suggested?',
        prompt: "Choose the meaning of the metaphor.",
        options: [
          "Time passes very slowly.",
          "Time literally steals objects.",
          "Time makes everyone wealthy.",
          "Time takes away precious moments.",
        ],
        answer: 3,
      },
      {
        question: "Which sentence contains an idiom?",
        prompt: "Choose the sentence with a phrase whose meaning is not literal.",
        options: [
          "Mia hit the books before her exam.",
          "Mia reads as quickly as a machine.",
          "Mia’s books are mountains.",
          "Mia has a million books to read tonight.",
        ],
        answer: 0,
      },
      {
        question: 'Why is “The flowers danced in the breeze” an example of personification?',
        prompt: "Choose the best explanation.",
        options: [
          "It compares flowers to dancers using “like.”",
          "It gives flowers a human-like action.",
          "It exaggerates the number of flowers.",
          "It uses a phrase with a hidden meaning.",
        ],
        answer: 1,
      },
      {
        question: "Which sentence uses hyperbole to show that someone is tired?",
        prompt: "Choose the exaggerated statement.",
        options: [
          "He is as tired as a sleepy cat.",
          "His bed is a soft cloud.",
          "I’m so tired I could sleep for a hundred years.",
          "The pillow hugged his head.",
        ],
        answer: 2,
      },
      {
        question: "Which statement best explains the difference between a simile and a metaphor?",
        prompt: "Choose the accurate definition.",
        options: [
          "A simile compares using “like” or “as”; a metaphor makes a direct comparison.",
          "A simile exaggerates; a metaphor gives objects human actions.",
          "A simile hides a phrase’s meaning; a metaphor tells a joke.",
          "A simile gives human traits; a metaphor uses extreme numbers.",
        ],
        answer: 0,
      },
      {
        question: 'What does “It’s raining cats and dogs” mean?',
        prompt: "Choose the meaning of the idiom.",
        options: [
          "Animals are falling from the clouds.",
          "It is raining very lightly.",
          "Pets are running outside.",
          "It is raining very heavily.",
        ],
        answer: 3,
      },
      {
        question: '“My little sister is a ray of sunshine.”',
        prompt: "Which figure of speech is used?",
        options: ["Hyperbole", "Metaphor", "Simile", "Personification"],
        answer: 1,
      },
      {
        question: "Which sentence gives a nonhuman object a human action?",
        prompt: "Choose the best answer.",
        options: [
          "The river is as clear as glass.",
          "The river is a silver ribbon.",
          "The river sang a gentle song as it flowed.",
          "The river stretched for a million miles.",
        ],
        answer: 2,
      },
      {
        question: 'A student says, “I have butterflies in my stomach” before speaking in front of the class. What does this idiom mean in this context?',
        prompt: "Choose the meaning in this context.",
        options: [
          "The student feels nervous or anxious.",
          "The student has eaten too much.",
          "The student is excited to see insects.",
          "The student has a serious stomach illness.",
        ],
        answer: 0,
      },
    ],
  },
  {
    title: "Types of Nouns",
    questions: [
      {
        question: 'The teacher explained the lesson to the <u>class</u>.',
        prompt: 'What type of noun is "class"?',
        options: ["Common noun", "Proper noun", "Collective noun", "Abstract noun"],
        answer: 2,
      },
      {
        question: '<u>Maria</u> visited her grandmother yesterday.',
        prompt: 'What type of noun is "Maria"?',
        options: ["Common noun", "Proper noun", "Concrete noun", "Collective noun"],
        answer: 1,
      },
      {
        question: 'The <u>apple</u> fell from the tree.',
        prompt: 'What type of noun is "apple"?',
        options: ["Abstract noun", "Collective noun", "Concrete noun", "Proper noun"],
        answer: 2,
      },
      {
        question: '<u>Honesty</u> is an important quality.',
        prompt: 'What type of noun is "Honesty"?',
        options: ["Concrete noun", "Abstract noun", "Common noun", "Compound noun"],
        answer: 1,
      },
      {
        question: 'A <u>team</u> of players won the championship.',
        prompt: 'What type of noun is "team"?',
        options: ["Proper noun", "Collective noun", "Compound noun", "Abstract noun"],
        answer: 1,
      },
      {
        question: 'My <u>toothbrush</u> is inside the bathroom.',
        prompt: 'What type of noun is "toothbrush"?',
        options: ["Common noun", "Collective noun", "Compound noun", "Concrete noun"],
        answer: 2,
      },
      {
        question: 'The <u>city</u> was crowded during the festival.',
        prompt: 'What type of noun is "city"?',
        options: ["Proper noun", "Common noun", "Abstract noun", "Collective noun"],
        answer: 1,
      },
      {
        question: '<u>Cebu</u> is a beautiful place to visit.',
        prompt: 'What type of noun is "Cebu"?',
        options: ["Concrete noun", "Common noun", "Proper noun", "Compound noun"],
        answer: 2,
      },
      {
        question: 'Her <u>kindness</u> made everyone happy.',
        prompt: 'What type of noun is "kindness"?',
        options: ["Abstract noun", "Concrete noun", "Proper noun", "Collective noun"],
        answer: 0,
      },
      {
        question: 'A <u>flock</u> of birds flew across the sky.',
        prompt: 'What type of noun is "flock"?',
        options: ["Compound noun", "Common noun", "Collective noun", "Abstract noun"],
        answer: 2,
      },
    ],
  },
  {
    title: "Parts of Speech",
    questions: [
      {
        question: 'The <u>students</u> are studying for their examination.',
        prompt: 'What part of speech is "students"?',
        options: ["Verb", "Noun", "Adjective", "Adverb"],
        answer: 1,
      },
      {
        question: '<u>They</u> went to the library yesterday.',
        prompt: 'What part of speech is "They"?',
        options: ["Noun", "Pronoun", "Conjunction", "Interjection"],
        answer: 1,
      },
      {
        question: 'My mother <u>cooks</u> delicious meals.',
        prompt: 'What part of speech is "cooks"?',
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        answer: 1,
      },
      {
        question: 'She wore a <u>beautiful</u> dress at the party.',
        prompt: 'What part of speech is "beautiful"?',
        options: ["Adverb", "Adjective", "Verb", "Pronoun"],
        answer: 1,
      },
      {
        question: 'The boy answered the question <u>correctly</u>.',
        prompt: 'What part of speech is "correctly"?',
        options: ["Adjective", "Noun", "Adverb", "Verb"],
        answer: 2,
      },
      {
        question: 'The bag is <u>under</u> the chair.',
        prompt: 'What part of speech is "under"?',
        options: ["Conjunction", "Preposition", "Adverb", "Pronoun"],
        answer: 1,
      },
      {
        question: 'I wanted to play, <u>but</u> it started raining.',
        prompt: 'What part of speech is "but"?',
        options: ["Preposition", "Conjunction", "Interjection", "Adverb"],
        answer: 1,
      },
      {
        question: '<u>Wow</u>! That is a wonderful surprise.',
        prompt: 'What part of speech is "Wow!"?',
        options: ["Adjective", "Interjection", "Conjunction", "Noun"],
        answer: 1,
      },
      {
        question: 'The <u>dog</u> barked loudly at the stranger.',
        prompt: 'What part of speech is "dog"?',
        options: ["Noun", "Pronoun", "Verb", "Adjective"],
        answer: 0,
      },
      {
        question: '<u>We</u> visited our grandparents last weekend.',
        prompt: 'What part of speech is "We"?',
        options: ["Conjunction", "Noun", "Pronoun", "Adverb"],
        answer: 2,
      },
    ],
  },
];

let currentPart = null;
let currentQuestion = 0;
const currentQuestions = assessmentParts.map(() => 0);
let selectedAnswers = assessmentParts.map((part) => new Array(part.questions.length).fill(null));
let assessmentStarted = assessmentParts.map(() => false);
let submittedScores = assessmentParts.map(() => null);
let reviewingPart = false;
let reviewQuestion = 0;
let reviewingBeforeSubmit = false;

const practiceQuestions = [
  {
    question: '"The class cheered for the team."',
    prompt: 'What type of noun is "team"?',
    options: ["Proper", "Collective", "Abstract"],
    answer: 1,
  },
  {
    question: '"A playful puppy ran quickly."',
    prompt: 'What part of speech is "playful"?',
    options: ["Adjective", "Verb", "Noun"],
    answer: 0,
  },
  {
    question: '"The puppy ran quickly."',
    prompt: 'What part of speech is "quickly"?',
    options: ["Pronoun", "Adverb", "Preposition"],
    answer: 1,
  },
];

let practiceQuestion = 0;
let practiceAnswer = null;
let practiceCorrect = 0;
let practiceChecked = false;

function showPage(pageName) {
  if (![...pageSections].some((section) => section.id === pageName)) return;
  if (isAssessmentInProgress() && pageName !== "assessment") return;

  pageSections.forEach((section) => {
    const isActive = section.id === pageName;
    section.classList.toggle("active", isActive);
  });

  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageName);
  });

  siteNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

function setupNavigation() {
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (isAssessmentInProgress()) return;
      if (button.dataset.page === "assessment") {
        showAssessmentPicker();
      }
      showPage(button.dataset.page);
    });
  });

  brandButton.addEventListener("click", () => {
    if (!isAssessmentInProgress()) showPage("home");
  });

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (isAssessmentInProgress()) return;
      const target = button.dataset.target;
      if (target === "assessment") {
        showAssessmentPicker();
      }
      showPage(target);
    });
  });

  menuToggle.addEventListener("click", () => {
    if (isAssessmentInProgress()) return;
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  document.querySelectorAll("[data-start-assessment]").forEach((button) => {
    button.addEventListener("click", () => startAssessment(Number(button.dataset.startAssessment)));
  });

  document.getElementById("back-to-assessments-btn").addEventListener("click", showAssessmentPicker);
}

function isAssessmentInProgress() {
  return currentPart !== null && !assessmentQuiz.hidden && !submittedScores[currentPart];
}

function updateNavigationLock() {
  const locked = isAssessmentInProgress();
  document.body.classList.toggle("assessment-navigation-locked", locked);
  [...navButtons, brandButton, menuToggle, ...actionButtons].forEach((control) => {
    control.disabled = locked;
    control.setAttribute("aria-disabled", String(locked));
  });
}

function updateAssessmentScores() {
  const scoreElements = [
    document.getElementById("figurative-assessment-score"),
    document.getElementById("noun-assessment-score"),
    document.getElementById("speech-assessment-score"),
  ];
  const startButtons = [...document.querySelectorAll("[data-start-assessment]")];

  submittedScores.forEach((score, index) => {
    const unlocked = index === 0 || Boolean(submittedScores[index - 1]);
    scoreElements[index].textContent = score
      ? `Last score: ${score.correct} / ${score.total} (${score.percentage}%)`
      : unlocked ? "Not taken yet" : `Complete Assessment ${index} to unlock`;
    startButtons[index].disabled = !unlocked;
    startButtons[index].textContent = !unlocked
      ? "LOCKED"
      : score ? "RETAKE ASSESSMENT ↻" : "START ASSESSMENT →";
  });
}

function showAssessmentPicker() {
  assessmentQuiz.hidden = true;
  assessmentPicker.hidden = false;
  partConfirmModal.classList.add("hidden");
  partConfirmModal.setAttribute("aria-hidden", "true");
  partResultModal.classList.add("hidden");
  partResultModal.setAttribute("aria-hidden", "true");
  reviewingPart = false;
  reviewingBeforeSubmit = false;
  updateAssessmentScores();
  updateNavigationLock();
}

function startAssessment(partIndex) {
  if (!Number.isInteger(partIndex) || !assessmentParts[partIndex]) return;
  if (partIndex > 0 && !submittedScores[partIndex - 1]) return;

  currentPart = partIndex;
  if (!assessmentStarted[partIndex] || submittedScores[partIndex]) {
    selectedAnswers[partIndex] = new Array(assessmentParts[partIndex].questions.length).fill(null);
    currentQuestions[partIndex] = 0;
    assessmentStarted[partIndex] = true;
  }
  currentQuestion = currentQuestions[partIndex];

  assessmentQuiz.hidden = false;
  assessmentPicker.hidden = true;
  reviewingPart = false;
  reviewingBeforeSubmit = false;
  updateNavigationLock();
  renderQuiz();
  showPage("assessment");
}

function renderQuiz() {
  if (reviewingPart) {
    renderAssessmentReview();
    return;
  }

  if (currentPart === null) return;

  const part = assessmentParts[currentPart];
  const question = part.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / part.questions.length) * 100;

  document.getElementById("assessment-part").textContent = `Assessment ${currentPart + 1}`;
  document.getElementById("assessment-title").textContent = part.title;
  document.getElementById("question-counter").textContent = `Question ${currentQuestion + 1} of ${part.questions.length}`;
  const answeredCount = selectedAnswers[currentPart].filter((answer) => answer !== null).length;
  document.getElementById("answered-counter").textContent =
    `${answeredCount} of ${part.questions.length} answered`;
  document.getElementById("quiz-progress-bar").style.width = `${progress}%`;

  const isLastQuestion = currentQuestion === part.questions.length - 1;
  const selectedAnswer = selectedAnswers[currentPart][currentQuestion];

  const answersMarkup = question.options
    .map((option, index) => {
      const selected = selectedAnswer === index ? "selected" : "";
      return `
        <button
          class="answer-choice ${selected}"
          type="button"
          data-index="${index}"
          aria-pressed="${selectedAnswer === index}"
        >
          ${option}
        </button>
      `;
    })
    .join("");

  const quizCard = document.getElementById("quiz-card");
  quizCard.innerHTML = `
    <p class="question-label">Question ${currentQuestion + 1} of ${part.questions.length}</p>
    <h4 class="quiz-question">${question.question}</h4>
    <p class="quiz-prompt">${question.prompt}</p>
    <div class="answer-list">${answersMarkup}</div>
    <div class="quiz-actions assessment-question-actions">
      <button class="secondary-btn" type="button" id="previous-question-btn" ${currentQuestion === 0 ? "disabled" : ""}>
        ← PREVIOUS
      </button>
      <button class="primary-btn" type="button" id="next-question-btn" ${selectedAnswer === null ? "disabled" : ""}>
        ${isLastQuestion ? "REVIEW & SUBMIT →" : "NEXT QUESTION →"}
      </button>
    </div>
  `;

  const answerButtons = quizCard.querySelectorAll(".answer-choice");
  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      selectedAnswers[currentPart][currentQuestion] = index;
      renderQuiz();
      document.querySelector(`#quiz-card .answer-choice[data-index="${index}"]`).focus();
    });
  });

  document.getElementById("previous-question-btn").addEventListener("click", () => {
    if (currentQuestion > 0) {
      currentQuestion -= 1;
      currentQuestions[currentPart] = currentQuestion;
      renderQuiz();
    }
  });

  const nextButton = document.getElementById("next-question-btn");
  nextButton.addEventListener("click", () => {
    if (selectedAnswers[currentPart][currentQuestion] === null) return;

    if (currentQuestion < part.questions.length - 1) {
      currentQuestion += 1;
      currentQuestions[currentPart] = currentQuestion;
      renderQuiz();
      return;
    }

    showPartConfirmation();
  });
}

function renderAssessmentReview() {
  const part = assessmentParts[currentPart];
  const question = part.questions[reviewQuestion];
  const selectedAnswer = selectedAnswers[currentPart][reviewQuestion];

  document.getElementById("assessment-part").textContent = `Review: Assessment ${currentPart + 1}`;
  document.getElementById("assessment-title").textContent = part.title;
  document.getElementById("question-counter").textContent =
    `Question ${reviewQuestion + 1} of ${part.questions.length}`;
  document.getElementById("answered-counter").textContent = reviewingBeforeSubmit
    ? "Review your selected answer"
    : `${selectedAnswer === question.answer ? "Correct answer selected" : "Correct answer shown"}`;
  document.getElementById("quiz-progress-bar").style.width =
    `${((reviewQuestion + 1) / part.questions.length) * 100}%`;

  const answerMarkup = question.options
    .map((option, index) => {
      const isCorrect = index === question.answer;
      const wasSelected = index === selectedAnswer;
      const stateClass = reviewingBeforeSubmit
        ? wasSelected ? "review-selected" : ""
        : isCorrect ? "review-correct" : wasSelected ? "review-incorrect" : "";
      const marker = reviewingBeforeSubmit
        ? wasSelected ? " — Your selected answer" : ""
        : isCorrect ? " ✓ Correct answer" : wasSelected ? " — Your answer" : "";
      return `
        <button
          class="answer-choice ${stateClass}"
          type="button"
          data-index="${index}"
          aria-pressed="${wasSelected}"
          ${reviewingBeforeSubmit ? "" : "disabled"}
        >
          ${option}${marker}
        </button>
      `;
    })
    .join("");

  document.getElementById("quiz-card").innerHTML = `
    <p class="question-label">Review · Question ${reviewQuestion + 1}</p>
    <h4 class="quiz-question">${question.question}</h4>
    <p class="quiz-prompt">${question.prompt}</p>
    <div class="answer-list">${answerMarkup}</div>
    <div class="quiz-actions review-actions">
      <button class="secondary-btn" type="button" id="previous-review-btn" ${reviewQuestion === 0 ? "disabled" : ""}>
        ← PREVIOUS
      </button>
      <button class="secondary-btn" type="button" id="return-to-score-btn">
        ${reviewingBeforeSubmit ? "BACK TO SUBMIT" : "BACK TO SCORE"}
      </button>
      <button class="primary-btn" type="button" id="next-review-btn">
        ${reviewQuestion === part.questions.length - 1 ? "FINISH REVIEW" : "NEXT →"}
      </button>
    </div>
  `;

  document.getElementById("previous-review-btn").addEventListener("click", () => {
    if (reviewQuestion > 0) {
      reviewQuestion -= 1;
      renderAssessmentReview();
    }
  });
  document.getElementById("next-review-btn").addEventListener("click", () => {
    if (reviewQuestion < part.questions.length - 1) {
      reviewQuestion += 1;
      renderAssessmentReview();
    } else {
      returnToPartResult();
    }
  });
  document.getElementById("return-to-score-btn").addEventListener("click", returnToPartResult);

  if (reviewingBeforeSubmit) {
    document.querySelectorAll("#quiz-card .answer-choice").forEach((button) => {
      button.addEventListener("click", () => {
        selectedAnswers[currentPart][reviewQuestion] = Number(button.dataset.index);
        renderAssessmentReview();
        document.querySelector(
          `#quiz-card .answer-choice[data-index="${button.dataset.index}"]`,
        ).focus();
      });
    });
  }
}

function returnToPartResult() {
  reviewingPart = false;
  if (reviewingBeforeSubmit) {
    partConfirmModal.classList.remove("hidden");
    partConfirmModal.setAttribute("aria-hidden", "false");
    reviewBeforeSubmitButton.focus();
    return;
  }
  partResultModal.classList.remove("hidden");
  partResultModal.setAttribute("aria-hidden", "false");
  reviewPartButton.focus();
}

reviewPartButton.addEventListener("click", () => {
  reviewingPart = true;
  reviewingBeforeSubmit = false;
  reviewQuestion = 0;
  partResultModal.classList.add("hidden");
  partResultModal.setAttribute("aria-hidden", "true");
  renderAssessmentReview();
  document.getElementById("return-to-score-btn").focus();
});

function showPartConfirmation() {
  const part = assessmentParts[currentPart];
  document.getElementById("part-confirm-title").textContent = `Submit ${part.title}?`;
  document.getElementById("part-confirm-message").textContent =
    `You can review your selected answers before submitting Assessment ${currentPart + 1}. Your score appears only after you confirm.`;
  confirmPartSubmitButton.textContent = `YES, SUBMIT ${part.title.toUpperCase()}`;
  partConfirmModal.classList.remove("hidden");
  partConfirmModal.setAttribute("aria-hidden", "false");
  confirmPartSubmitButton.focus();
}

reviewBeforeSubmitButton.addEventListener("click", () => {
  reviewingPart = true;
  reviewingBeforeSubmit = true;
  reviewQuestion = 0;
  partConfirmModal.classList.add("hidden");
  partConfirmModal.setAttribute("aria-hidden", "true");
  renderAssessmentReview();
  document.getElementById("return-to-score-btn").focus();
});

confirmPartSubmitButton.addEventListener("click", () => {
  partConfirmModal.classList.add("hidden");
  partConfirmModal.setAttribute("aria-hidden", "true");
  reviewingBeforeSubmit = false;
  showPartResult();
});

function showPartResult() {
  const part = assessmentParts[currentPart];
  const correct = part.questions.reduce(
    (total, question, questionIndex) =>
      total + Number(selectedAnswers[currentPart][questionIndex] === question.answer),
    0,
  );
  const percentage = Math.round((correct / part.questions.length) * 100);

  submittedScores[currentPart] = {
    correct,
    total: part.questions.length,
    percentage,
  };
  updateAssessmentScores();
  updateNavigationLock();
  document.getElementById("part-result-title").textContent = part.title;
  document.getElementById("part-result-score").textContent =
    `${correct} out of ${part.questions.length} correct (${percentage}%)`;
  document.getElementById("part-result-message").textContent =
    percentage >= 80
      ? `Great work! Your Assessment ${currentPart + 1} score is saved separately.`
      : `Your Assessment ${currentPart + 1} score is saved separately. Keep practicing!`;
  partResultModal.classList.remove("hidden");
  partResultModal.setAttribute("aria-hidden", "false");
  continueAssessmentButton.focus();
}

continueAssessmentButton.addEventListener("click", () => {
  partResultModal.classList.add("hidden");
  partResultModal.setAttribute("aria-hidden", "true");
  showAssessmentPicker();
  showPage("assessment");
  document.querySelector("[data-start-assessment]").focus();
});

function renderPracticeExercise() {
  const exercise = document.getElementById("practice-exercise");

  if (practiceQuestion === practiceQuestions.length) {
    exercise.innerHTML = `
      <p class="question-label">Exercise complete</p>
      <h5 class="quiz-question">You got ${practiceCorrect} out of ${practiceQuestions.length} correct!</h5>
      <div class="quiz-actions">
        <button class="primary-btn" type="button" id="practice-retry-btn">TRY AGAIN 🔁</button>
      </div>
    `;
    document.getElementById("practice-retry-btn").addEventListener("click", resetPracticeExercise);
    return;
  }

  const question = practiceQuestions[practiceQuestion];
  const answersMarkup = question.options
    .map((option, index) => {
      const selected = practiceAnswer === index ? "selected" : "";
      const disabled = practiceChecked ? "disabled" : "";
      return `
        <button class="answer-choice ${selected}" type="button" data-index="${index}" ${disabled}>
          ${option}
        </button>
      `;
    })
    .join("");
  const feedback = practiceChecked
    ? practiceAnswer === question.answer
      ? "That's right! Great work."
      : `Not quite. The correct answer is ${question.options[question.answer]}.`
    : "";

  exercise.innerHTML = `
    <p class="question-label">Practice ${practiceQuestion + 1} of ${practiceQuestions.length}</p>
    <h5 class="quiz-question">${question.question}</h5>
    <p class="quiz-prompt">${question.prompt}</p>
    <div class="answer-list">${answersMarkup}</div>
    <p class="practice-feedback" aria-live="polite">${feedback}</p>
    <div class="quiz-actions">
      <button
        class="primary-btn"
        type="button"
        id="practice-action-btn"
        ${practiceAnswer === null ? "disabled" : ""}
      >
        ${practiceChecked
          ? practiceQuestion === practiceQuestions.length - 1
            ? "SEE MY SCORE 🎉"
            : "NEXT QUESTION →"
          : "CHECK ANSWER"}
      </button>
    </div>
  `;

  exercise.querySelectorAll(".answer-choice").forEach((button) => {
    button.addEventListener("click", () => {
      practiceAnswer = Number(button.dataset.index);
      renderPracticeExercise();
    });
  });

  document.getElementById("practice-action-btn").addEventListener("click", () => {
    if (practiceAnswer === null) return;
    if (!practiceChecked) {
      if (practiceAnswer === question.answer) practiceCorrect += 1;
      practiceChecked = true;
    } else {
      practiceQuestion += 1;
      practiceAnswer = null;
      practiceChecked = false;
    }
    renderPracticeExercise();
  });
}

function resetPracticeExercise() {
  practiceQuestion = 0;
  practiceAnswer = null;
  practiceCorrect = 0;
  practiceChecked = false;
  renderPracticeExercise();
}

let activeVideoCard = null;

function openVideoModal(card) {
  activeVideoCard = card;
  lessonVideo.src = card.dataset.videoSrc;
  lessonVideo.load();
  videoModal.classList.remove("hidden");
  videoModal.setAttribute("aria-hidden", "false");
  modalClose.focus();
  lessonVideo.play().catch(() => {
    // Playback may require an explicit user gesture in some browsers.
  });
}

function closeVideoModal() {
  videoModal.classList.add("hidden");
  videoModal.setAttribute("aria-hidden", "true");
  lessonVideo.pause();
  lessonVideo.removeAttribute("src");
  lessonVideo.load();
  if (activeVideoCard) activeVideoCard.focus();
  activeVideoCard = null;
}

videoCards.forEach((card) => {
  const playCardVideo = () => openVideoModal(card);

  card.addEventListener("click", playCardVideo);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      playCardVideo();
    }
  });
});

modalClose.addEventListener("click", closeVideoModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !videoModal.classList.contains("hidden")) {
    closeVideoModal();
  }
});
videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    closeVideoModal();
  }
});

setupNavigation();
updateAssessmentScores();
renderPracticeExercise();
showPage("home");
