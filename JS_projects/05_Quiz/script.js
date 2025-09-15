document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questiionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultcontainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "Nhi hora kya",
      choices: ["hello", "not hello", "kuch bhi", "dream"],
      answer: "dream",
    },
    {
      question: "hello",
      choices: ["hello", "not hello", "kuch bhi", "dream"],
      answer: "hello",
    },
    {
      question: "what is this",
      choices: ["hello", "not hello", "kuch bhi", "dream"],
      answer: "not hello",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultcontainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultcontainer.classList.add("hidden");
    questiionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questiionContainer.classList.add("hidden");
    resultcontainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
