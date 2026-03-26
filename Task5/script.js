const quizData = [
    {
        question: "What is the full form of JS?",
        options: ["JavaScript", "JavaSource", "JustScript", "None"],
        answer: "JavaScript"
    },
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "CSS is used for?",
        options: ["Structure", "Styling", "Database", "Logic"],
        answer: "Styling"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");


function loadQuestion() {
    let q = quizData[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.className="option";
        btn.onclick = function () {
            if(option === q.answer) {
                score++;
            }
            nextQuestion();
        };
        optionsEl.appendChild(btn);
    });

    updateButtons();
}


function nextQuestion() {
    if(currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
    else {
        showResult();
    }
}


function prevQuestion() {
    if(currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}


function showResult() {
    questionEl.innerText = "Quiz Completed";
    optionsEl.innerHTML = "";
    resultEl.innerText =
        "Your Score: " + score + " / " + quizData.length;
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
}


function updateButtons() {
    if(currentQuestion===0){
        prevBtn.style.display ="none";
    }
    else{
        prevBtn.style.display = "inline-block";
    }
    if(currentQuestion===quizData.length-1){
        nextBtn.style.display = "none";
    }else{
        nextBtn.style.display = "inline-block";
    }

}


nextBtn.addEventListener("click",nextQuestion);
prevBtn.addEventListener("click",prevQuestion);

loadQuestion();