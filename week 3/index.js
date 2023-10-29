const readline = require('readline');
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Hyper Transfer Markup Language"],
        correctAnswer: 0
    },
    {
        question: "Which programming language is known as the 'mother of all languages'?",
        options: ["Python", "C++", "Java", "Assembly"],
        correctAnswer: 3
    },
    {
        question: "What is the result of the expression 5 + '5' in JavaScript?",
        options: ["10", "55", "Error", "undefined"],
        correctAnswer: 1
    },
    {
        question: "Which company developed the JavaScript programming language?",
        options: ["Microsoft", "Google", "Netscape", "Apple"],
        correctAnswer: 2
    },
    {
        question: "In Python, which keyword is used to define a function?",
        options: ["method", "func", "define", "def"],
        correctAnswer: 3
    }
];
let score = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayQuestion(questionIndex) {
    const currentQuestion = questions[questionIndex];
    console.log(`Question ${questionIndex + 1}. ${currentQuestion.question}`)
    
    for (let i = 0; i < currentQuestion.options.length; i++) {
        console.log(`${i + 1}. ${currentQuestion.options[i]}`);
    }
    
    rl.question("Enter the number of your answer: ", (userAnswer) => {
        const selectedOption = parseInt(userAnswer) - 1;
        
        if (selectedOption === currentQuestion.correctAnswer) {
            console.log("Correct!");
            score++;
        } else {
            console.log(`Incorrect. The correct answer was: ${currentQuestion.options[currentQuestion.correctAnswer]}`);
        }
        console.log();
        if (questionIndex < questions.length - 1) {
            displayQuestion(questionIndex + 1);
        } else {
            rl.close();
            console.log(`Quiz complete! Your score: ${score} out of ${questions.length}`);
        }
    });
}

displayQuestion(0);