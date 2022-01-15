let eye1 = document.getElementById("eye1");
let eye2 = document.getElementById("eye2");
let eyeCore1 = document.getElementById("eyeCore1");
let eyeCore2 = document.getElementById("eyeCore2");
let smileCircle1 = document.getElementById("smileCircle1");
let smileCircle2 = document.getElementById("smileCircle2");
let mouse = document.getElementById("mouse");
let teeth = document.getElementById("teeth");


let answer = document.getElementById("answer");
let radioList = answer.elements["answer"];
let question = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let submit = document.getElementById("submit");
let next = document.getElementById("next");
let randomNumber = getRandomNumber();

let questionList = [
    {
        q: "ما هي عاصمة مصر",
        ans1: "الاسكندرية",
        ans2: "القاهرة",
        ans3: "المنوفية",
        ans4: "الاقصر",
        writrAnswer: "2"
    },
    {
        q: "ما هي عاصمة سوريا",
        ans1: "حلب",
        ans2: "ادلب",
        ans3: "دمشق",
        ans4: "دير الزور",
        writrAnswer: "3"
    },
    {
        q: "ما هي عاصمة السعودية",
        ans1: "الرياض",
        ans2: "مكة",
        ans3: "جدة",
        ans4: "المدينة المنورة",
        writrAnswer: "1"
    },
    {
        q: "ما هي عاصمة ليبيا",
        ans1: "سبتة",
        ans2: "سوسة",
        ans3: "البريجة",
        ans4: "طرابلس",
        writrAnswer: "4"
    },
    {
        q: "ما هي عاصمة لبنان",
        ans1: "بيروت",
        ans2: "الجولان",
        ans3: "الخرطوم",
        ans4: "عدن",
        writrAnswer: "1"
    },
    {
        q: "ما هي عاصمة اليمن",
        ans1: "مسقط",
        ans2: "صنعاء",
        ans3: "عدن",
        ans4: "الضالع",
        writrAnswer: "2"
    },
    {
        q: "ما هي عاصمة السودان",
        ans1: "نواكشوط",
        ans2: "طرابلس",
        ans3: "الخرطوم",
        ans4: "ابين",
        writrAnswer: "3"
    },
    {
        q: "ما هي عاصمة الاردن",
        ans1: "المنامة",
        ans2: "عمان",
        ans3: "مسقط",
        ans4: "الدوحة",
        writrAnswer: "2"
    },
    {
        q: "ما هي عاصمة الامارات",
        ans1: "دبي",
        ans2: "الدوحة",
        ans3: "رأس الخيمة",
        ans4: "ابو طبي",
        writrAnswer: "4"
    },
    {
        q: "ما هي عاصمة الصومال",
        ans1: "مقديشو",
        ans2: "موروني",
        ans3: "نواكشوط",
        ans4: "طرابلس",
        writrAnswer: "1"
    }
]

question.innerHTML = questionList[randomNumber].q;
answer1.innerHTML = questionList[randomNumber].ans1;
answer2.innerHTML = questionList[randomNumber].ans2;
answer3.innerHTML = questionList[randomNumber].ans3;
answer4.innerHTML = questionList[randomNumber].ans4;

submit.addEventListener("click", function(){
    checkAnswer(questionList[randomNumber].writrAnswer);
})

next.addEventListener("click", function(){
    location.reload()
})

// function getRandomQuestion(){
//     return questionList[randomNumber];
// }

// function getRandomAnswer(){
//     return questionList[randomNumber].writrAnswer
// }

function getRandomNumber(){
    return Math.floor(Math.random() * 10);
}

function checkAnswer(ans){
    for(let x of radioList){
        if(x.checked){
            if(x.value == ans){
                rightAnswer();
            }else{
                wrongAnswer();
            }
        }
    }
}

function rightAnswer(){
    eye1.classList.add("smileEye");
    eye2.classList.add("smileEye");

    eyeCore1.classList.add("smileEyeCore");
    eyeCore2.classList.add("smileEyeCore");

    smileCircle1.classList.add("smileCircle");
    smileCircle2.classList.add("smileCircle");

    mouse.classList.add("smileMouse");
    teeth.classList.add("smileTeeth")
}

function wrongAnswer(){
    eye1.classList.add("sadEye");
    eye2.classList.add("sadEye");

    eyeCore1.classList.add("sadEyeCore");
    eyeCore2.classList.add("sadEyeCore");

    smileCircle1.classList.add("sadCircle");
    smileCircle2.classList.add("sadCircle");

    mouse.classList.add("sadMouse");
    teeth.classList.add("sadTeeth")
}