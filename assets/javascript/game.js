// Make function available after the document is loaded.
$(document).ready(function() {

// Set up questions and answers used for Trivia Game
var questions = {
    q1:{
        question: "What was the first club to win the Champions League competition?",
        choices: ["Benfica", "Barcelona", "Inter Milan", "Real Madrid"],
        answer: "Real Madrid",
    },
    
    q2:{
        questions: "What is the only French club to ever win a Champions League Competition?",
        choices: ["Lyon" , "Marseille", "PSG" , "AS Monaco"],
        answer: "Marseille",
    },

    q3:{
        questions: "Who has scored the most goals in Champions League history?",
        choices: ["Crisitano Ronaldo" , "Lionel Messi" , "Raul" , "Andriy Shevchenko"],
        answer: "Cristiano Ronaldo",

    },

    q4:{
        questions: "Who was the first Dutch club to win the Champions League?",
        choices: ["Feyenoord" , "Ajax" , "PSV Eindhoven" , "FC Twente"],
        answer: "Feyenoord",

    },

    q5:{
        questions: "Who were the first British club to win a Champions League competition?",
        choices: ["Manchester United" , "Celtic" , "Liverpool" , "Aston Villa"],
        answer: "Celtic",

    },

    q6:{
        questions: "Who was the second professional club to ever win a Champions League title?",
        choices: ["Barcelona" , "AC Milan", "Inter Milan" , "Benfica"],
        answer: "Benfica",

    },

    q7:{
        questions: "Which team won the first penalty shoot out to win the Champions League?",
        choices: ["Liverpool" , "Bayern Munich" , "Juventus" , "Barcelona"],
        answer: "Liverpool",

    },

    q8:{
        questions: "Which of these teams have never won a Champions League Competition?",
        choices: ["Hamburg" , "Bayern Leverkusen" , "Aston Villa" , "Nottingham Forrest"],
        answer: "Bayern Leverkusen",

    },

    q9:{
        questions: "Which of these clubs have never won a Champions League title in back-to-back seasons?",
        choices: ["Benfica" , "Juventus" , "Bayern Munich" , "Real Madrid"],
        answer: "Juventus",

    },

    q10:{
        questions: "Which player currently holds the record for most matches played in Champions League competitions?",
        choices: ["Xavi Hernandez" , "Zinedine Zidane" , "Iker Casillas" , "Ryan Giggs"],
        answer: "Iker Casillas",

    },
};

// Set up variables for game
var userRight = 0;
var userWrong = 0;
var triviaTimer = 90;


// Remove Start button when clicked
$("#start-game").click(function(){
    $("#start-game").remove();
});



});