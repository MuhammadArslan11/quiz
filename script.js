
const quizDB =[
    {
        question: "Q1: What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Makeup Language",
        d:"Hypertext Markup Language",
        ans: "ans4"

    },
    {
        question:" Q2: What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        C:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        abs:"ans1"


    },
    {
        question: "Q3: What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        C:"HyperText Makeup Language",
        d:"Hypertext Markup Language",
        ans: "ans4"

    },
    {
        question:" Q2: What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        C:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        abs:"ans1"


    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

let questionCount =0;

const loadQuestion =() => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();