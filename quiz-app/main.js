const quizData = [
  {
    question: "How old is Kuvonch?",
    a: 14,
    b: 16,
    c: 19,
    d: 110,
    correct: "c",
  },
  {
    question: "what is the most popular programming language in 2021?",
    a: "Java",
    b: "C",
    c: "JavaScript",
    d: "Python",
    correct: "c",
  },
  {
    question: "who is the president of US?",
    a: "Shavkat Mirziyoyev",
    b: "Jack Ma",
    c: "Joe Biden",
    d: "Kamala Harris",
    correct: "c",
  },
  {
    question: "what is HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "StyleSheet",
    c: "Application programming interfece",
    d: "Cascading Style Sheet",
    correct: "a",
  },
  {
    question: "what year JS launched?",
    a: "1995",
    b: "2000",
    c: "2005",
    d: "2010",
    correct: "a",
  },
];

const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const question = document.getElementById("question");
const submitBtn = document.querySelector(".btn");
const container = document.querySelector(".container");
const backBtn = document.querySelector(".back-btn");

let currentQuizz = 0;
let score = 0;

function loadQuizz() {
  let curr = quizData[currentQuizz];
  question.innerHTML = curr.question;
  aText.innerHTML = curr.a;
  bText.innerHTML = curr.b;
  cText.innerHTML = curr.c;
  dText.innerHTML = curr.d;
}
loadQuizz();

function getSelected(checker) {
  const answerEls = document.querySelectorAll(".answer");
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answerEl.checked = checker;
      return (answer = answerEl.id);
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected(false);
  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuizz].correct) {
      score++;
    }

    currentQuizz++;
    if (currentQuizz < quizData.length) {
      loadQuizz();
    } else {
      //final score
      container.innerHTML = `<h1>you have scored ${score} out of ${quizData.length}</h1>   
      <button class='btn' id='refresh'> Refresh</btn>`; // tell me when it is finished!
      document.querySelector("#refresh").addEventListener("click", () => {
        window.location.reload();
      });
    }
  }
});

backBtn.addEventListener("click", () => {
  currentQuizz--;
  if (currentQuizz < quizData.length) {
    loadQuizz();
  } else {
    //final score
    container.innerHTML = `<h1>you have scored ${score} out of ${quizData.length}</h1>   
      <button class='btn' id='refresh'> Refresh</btn>`; // tell me when it is finished!
    document.querySelector("#refresh").addEventListener("click", () => {
      window.location.reload();
    });
  }
});
