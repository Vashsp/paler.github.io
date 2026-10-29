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

const assessmentStorageKey = "paler-assessment-scores";
const assessmentReviewStorageKey = "paler-assessment-reviews";
const feedbackStorageKey = "paler-visitor-feedback";

function shuffleQuestions(questions) {
  const shuffled = [...questions];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

let currentPart = null;
let currentQuestion = 0;
const currentQuestions = assessmentParts.map(() => 0);
let selectedAnswers = assessmentParts.map((part) => new Array(part.questions.length).fill(null));
let assessmentQuestionOrders = assessmentParts.map((part) =>
  part.questions.map((_, questionIndex) => questionIndex),
);
let savedAssessmentReviews = assessmentParts.map(() => null);
let assessmentStarted = assessmentParts.map(() => false);
let submittedScores = assessmentParts.map(() => null);
let reviewingPart = false;
let reviewQuestion = 0;
let reviewingBeforeSubmit = false;
let reviewingFromResult = false;

function loadSavedAssessmentScores() {
  try {
    const stored = JSON.parse(localStorage.getItem(assessmentStorageKey));
    if (!Array.isArray(stored) || stored.length !== submittedScores.length) return;

    submittedScores = stored.map((score) => {
      if (!score || typeof score !== "object") return null;
      return {
        correct: Number(score.correct) || 0,
        total: Number(score.total) || 0,
        percentage: Number(score.percentage) || 0,
      };
    });
  } catch (error) {
    console.warn("Could not load saved assessment scores:", error);
  }
}

function saveAssessmentScores() {
  try {
    localStorage.setItem(assessmentStorageKey, JSON.stringify(submittedScores));
  } catch (error) {
    console.warn("Could not save assessment scores:", error);
  }
}

function loadSavedAssessmentReviews() {
  try {
    const stored = JSON.parse(localStorage.getItem(assessmentReviewStorageKey));
    if (!Array.isArray(stored) || stored.length !== assessmentParts.length) return;

    savedAssessmentReviews = stored.map((review, partIndex) => {
      if (!review || typeof review !== "object") return null;

      const questionCount = assessmentParts[partIndex].questions.length;
      const { questionOrder, answers } = review;
      if (
        !Array.isArray(questionOrder) ||
        questionOrder.length !== questionCount ||
        questionOrder.some(
          (questionIndex) =>
            !Number.isInteger(questionIndex) ||
            questionIndex < 0 ||
            questionIndex >= questionCount,
        ) ||
        new Set(questionOrder).size !== questionCount ||
        !Array.isArray(answers) ||
        answers.length !== questionCount
      ) {
        return null;
      }

      const validAnswers = answers.every((answer, questionIndex) => {
        if (answer === null) return true;
        const question = assessmentParts[partIndex].questions[questionOrder[questionIndex]];
        return Number.isInteger(answer) && answer >= 0 && answer < question.options.length;
      });
      if (!validAnswers) return null;

      return {
        questionOrder: [...questionOrder],
        answers: [...answers],
      };
    });

    savedAssessmentReviews.forEach((review, partIndex) => {
      if (!review || !submittedScores[partIndex]) return;
      assessmentQuestionOrders[partIndex] = review.questionOrder;
      selectedAnswers[partIndex] = review.answers;
    });
  } catch (error) {
    console.warn("Could not load saved assessment reviews:", error);
  }
}

function saveAssessmentReviews() {
  try {
    localStorage.setItem(assessmentReviewStorageKey, JSON.stringify(savedAssessmentReviews));
  } catch (error) {
    console.warn("Could not save assessment reviews:", error);
  }
}

loadSavedAssessmentScores();
loadSavedAssessmentReviews();

function getAssessmentQuestions(partIndex) {
  return assessmentQuestionOrders[partIndex].map(
    (questionIndex) => assessmentParts[partIndex].questions[questionIndex],
  );
}

const practiceQuestions = [
  {
    question: '“The stars danced playfully across the night sky.”',
    prompt: "Which figure of speech is used?",
    options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
    answer: 2,
  },
  {
    question: "Which sentence contains a simile?",
    prompt: "Choose the best answer.",
    options: [
      "Her voice was music to my ears.",
      "The baby slept like a peaceful angel.",
      "The flowers nodded in the breeze.",
      "I waited forever for the bus.",
    ],
    answer: 1,
  },
  {
    question: '“My brother is a walking encyclopedia.”',
    prompt: "What does this metaphor suggest?",
    options: [
      "He carries books everywhere.",
      "He knows a great deal of information.",
      "He walks very slowly.",
      "He enjoys visiting libraries.",
    ],
    answer: 1,
  },
  {
    question: "Which sentence uses hyperbole?",
    prompt: "Choose the exaggerated statement.",
    options: [
      "The leaves whispered in the wind.",
      "Her eyes sparkled like diamonds.",
      "I have told you a million times to clean your room.",
      "The classroom was a beehive of activity.",
    ],
    answer: 2,
  },
  {
    question: 'What does the idiom “break the ice” mean?',
    prompt: "Choose the meaning of the idiom.",
    options: [
      "To crack a frozen object.",
      "To begin a friendly conversation.",
      "To end a friendship.",
      "To make someone feel cold.",
    ],
    answer: 1,
  },
  {
    question: '“The wind howled angrily throughout the night.”',
    prompt: "Which figure of speech is used?",
    options: ["Personification", "Hyperbole", "Idiom", "Simile"],
    answer: 0,
  },
  {
    question: 'During a difficult examination, Ana says, “This test is a piece of cake!”',
    prompt: "What does she mean?",
    options: [
      "The test contains questions about baking.",
      "The test is made of food.",
      "The test is very easy.",
      "The test is impossible to finish.",
    ],
    answer: 2,
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
    const completed = Boolean(score);
    scoreElements[index].textContent = score
      ? `Last score: ${score.correct} / ${score.total} (${score.percentage}%)`
      : unlocked ? "Not taken yet" : `Complete Assessment ${index} to unlock`;
    startButtons[index].disabled = !unlocked;
    startButtons[index].textContent = !unlocked
      ? "LOCKED"
      : completed
        ? "REVIEW ANSWERS →"
        : "START ASSESSMENT →";
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
  reviewingFromResult = false;
  updateAssessmentScores();
  updateNavigationLock();
}

function startAssessment(partIndex) {
  if (!Number.isInteger(partIndex) || !assessmentParts[partIndex]) return;
  if (partIndex > 0 && !submittedScores[partIndex - 1]) return;

  currentPart = partIndex;
  const completed = Boolean(submittedScores[partIndex]);
  if (completed) {
    reviewingPart = true;
    reviewingBeforeSubmit = false;
    reviewingFromResult = false;
    reviewQuestion = 0;
  } else if (!assessmentStarted[partIndex]) {
    assessmentQuestionOrders[partIndex] = shuffleQuestions(
      assessmentQuestionOrders[partIndex],
    );
    selectedAnswers[partIndex] = new Array(assessmentParts[partIndex].questions.length).fill(null);
    currentQuestions[partIndex] = 0;
    assessmentStarted[partIndex] = true;
    reviewingPart = false;
    reviewingBeforeSubmit = false;
    reviewingFromResult = false;
  }
  currentQuestion = currentQuestions[partIndex];

  assessmentQuiz.hidden = false;
  assessmentPicker.hidden = true;
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
  const questions = getAssessmentQuestions(currentPart);
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  document.getElementById("assessment-part").textContent = `Assessment ${currentPart + 1}`;
  document.getElementById("assessment-title").textContent = part.title;
  document.getElementById("question-counter").textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById("assessment-instructions").textContent =
    "Choose an answer. You can change it or revisit questions before submitting.";
  document.querySelector(".assessment-lock-notice").textContent =
    "🔒 Site navigation is locked while you complete this assessment.";
  const answeredCount = selectedAnswers[currentPart].filter((answer) => answer !== null).length;
  document.getElementById("answered-counter").textContent =
    `${answeredCount} of ${questions.length} answered`;
  document.getElementById("quiz-progress-bar").style.width = `${progress}%`;

  const isLastQuestion = currentQuestion === questions.length - 1;
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
    <p class="question-label">Question ${currentQuestion + 1} of ${questions.length}</p>
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

    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      currentQuestions[currentPart] = currentQuestion;
      renderQuiz();
      return;
    }

    showPartConfirmation();
  });
}

function getQuestionReviewExplanation(question, selectedAnswer) {
  const correctOption = question.options[question.answer];
  const promptText = question.prompt.toLowerCase();

  let concept = "the meaning and clue in the sentence";
  if (promptText.includes("part of speech")) {
    concept = "the job the word plays in the sentence";
  } else if (promptText.includes("type of noun")) {
    concept = "the kind of noun the word is";
  } else if (promptText.includes("figure of speech")) {
    concept = "the figurative language device being used";
  }

  if (selectedAnswer === question.answer) {
    return `Correct! The key is to look for the clue in the sentence. This question is about ${concept}, and “${correctOption}” fits best because it matches the meaning, role, or style the sentence is showing. Good thinking—your answer follows the same clue the author gave you.`;
  }

  if (selectedAnswer === null) {
    return `The correct answer is “${correctOption}.” The clue in the sentence points to ${concept}, which is why “${correctOption}” is the best choice.`;
  }

  const selectedOption = question.options[selectedAnswer];
  return `The correct answer is “${correctOption}.” In this sentence, the clue points to ${concept}, and that clue matches “${correctOption}” more closely than “${selectedOption}.” You chose a reasonable option, but it does not match the wording or meaning as closely. When you see similar questions, look for the strongest clue in the sentence before choosing an answer.`;
}

function renderAssessmentReview() {
  const part = assessmentParts[currentPart];
  const questions = getAssessmentQuestions(currentPart);
  const question = questions[reviewQuestion];
  const selectedAnswer = selectedAnswers[currentPart][reviewQuestion];
  const explanation = getQuestionReviewExplanation(question, selectedAnswer);
  const completedReview = Boolean(submittedScores[currentPart]) && !reviewingBeforeSubmit;

  document.getElementById("assessment-part").textContent = `Review: Assessment ${currentPart + 1}`;
  document.getElementById("assessment-title").textContent = part.title;
  document.getElementById("assessment-instructions").textContent = completedReview
    ? "Review only: your submitted answers are locked and this assessment cannot be retaken."
    : "Review your selected answers before submitting.";
  document.querySelector(".assessment-lock-notice").textContent = completedReview
    ? "🔎 Review mode: answers are read-only; you cannot retake this assessment."
    : "🔒 Site navigation is locked while you complete this assessment.";
  document.getElementById("question-counter").textContent =
    `Question ${reviewQuestion + 1} of ${questions.length}`;
  document.getElementById("answered-counter").textContent = reviewingBeforeSubmit
    ? "Review your selected answer"
    : `${selectedAnswer === question.answer ? "Correct answer selected" : "Correct answer shown"}`;
  document.getElementById("quiz-progress-bar").style.width =
    `${((reviewQuestion + 1) / questions.length) * 100}%`;

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
    <p class="practice-feedback" aria-live="polite">${explanation}</p>
    <div class="quiz-actions review-actions">
      <button class="secondary-btn" type="button" id="previous-review-btn" ${reviewQuestion === 0 ? "disabled" : ""}>
        ← PREVIOUS
      </button>
      <button class="secondary-btn" type="button" id="return-to-score-btn">
        ${reviewingBeforeSubmit
          ? "BACK TO SUBMIT"
          : reviewingFromResult
            ? "BACK TO SCORE"
            : "BACK TO ASSESSMENTS"}
      </button>
      <button class="primary-btn" type="button" id="next-review-btn">
        ${reviewQuestion === questions.length - 1 ? "FINISH REVIEW" : "NEXT →"}
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
    if (reviewQuestion < questions.length - 1) {
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
  if (!reviewingFromResult) {
    showAssessmentPicker();
    return;
  }
  partResultModal.classList.remove("hidden");
  partResultModal.setAttribute("aria-hidden", "false");
  reviewPartButton.focus();
}

reviewPartButton.addEventListener("click", () => {
  reviewingPart = true;
  reviewingBeforeSubmit = false;
  reviewingFromResult = true;
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
  reviewingFromResult = false;
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
  const questions = getAssessmentQuestions(currentPart);
  const correct = questions.reduce(
    (total, question, questionIndex) =>
      total + Number(selectedAnswers[currentPart][questionIndex] === question.answer),
    0,
  );
  const percentage = Math.round((correct / questions.length) * 100);

  submittedScores[currentPart] = {
    correct,
    total: questions.length,
    percentage,
  };
  savedAssessmentReviews[currentPart] = {
    questionOrder: [...assessmentQuestionOrders[currentPart]],
    answers: [...selectedAnswers[currentPart]],
  };
  saveAssessmentScores();
  saveAssessmentReviews();
  updateAssessmentScores();
  updateNavigationLock();
  document.getElementById("part-result-title").textContent = part.title;
  document.getElementById("part-result-score").textContent =
    `${correct} out of ${questions.length} correct (${percentage}%)`;
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
    <p class="question-label">Practice assessment</p>
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

function loadFeedbackEntries() {
  try {
    const entries = JSON.parse(localStorage.getItem(feedbackStorageKey));
    return Array.isArray(entries) ? entries.filter((entry) =>
      entry &&
      typeof entry.name === "string" &&
      typeof entry.comment === "string" &&
      Number.isInteger(entry.rating) &&
      entry.rating >= 1 &&
      entry.rating <= 5,
    ) : [];
  } catch (error) {
    console.warn("Could not load visitor feedback:", error);
    return [];
  }
}

function renderFeedbackEntries() {
  const feedbackList = document.getElementById("feedback-list");
  const entries = loadFeedbackEntries();
  feedbackList.replaceChildren();

  if (entries.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "feedback-empty";
    emptyMessage.textContent = "No feedback yet. Be the first to share your experience.";
    feedbackList.append(emptyMessage);
    return;
  }

  entries.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "feedback-entry";

    const heading = document.createElement("div");
    heading.className = "feedback-entry-heading";
    const name = document.createElement("h5");
    name.textContent = entry.name;
    const rating = document.createElement("span");
    rating.className = "feedback-rating";
    rating.setAttribute("aria-label", `${entry.rating} out of 5 stars`);
    rating.textContent = `${"★".repeat(entry.rating)}${"☆".repeat(5 - entry.rating)}`;
    heading.append(name, rating);

    const comment = document.createElement("p");
    comment.textContent = entry.comment;
    article.append(heading, comment);
    feedbackList.append(article);
  });
}

document.getElementById("feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const entry = {
    name: String(formData.get("name")).trim(),
    rating: Number(formData.get("rating")),
    comment: String(formData.get("comment")).trim(),
  };

  if (!entry.name || !entry.comment || entry.rating < 1 || entry.rating > 5) return;

  const entries = [entry, ...loadFeedbackEntries()].slice(0, 50);
  try {
    localStorage.setItem(feedbackStorageKey, JSON.stringify(entries));
  } catch (error) {
    document.getElementById("feedback-status").textContent =
      "Your feedback could not be saved on this device.";
    console.warn("Could not save visitor feedback:", error);
    return;
  }

  form.reset();
  document.getElementById("feedback-status").textContent = "Thanks for sharing your feedback!";
  renderFeedbackEntries();
});

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
renderFeedbackEntries();
showPage("home");
