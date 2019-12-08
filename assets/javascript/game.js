// Set up questions and answers array used for Trivia Game
var questions = [

    {
        question: "1. What was the first club to win the Champions League competition?",
        choices: ["Benfica", "Barcelona", "Inter-Milan", "Real Madrid"],
        answer: 3
    },

    {
        question: "2. Who was the first Dutch club to win the Champions League?",
        choices: ["Feyenoord", "Ajax", "PSV Eindhoven", "FC Twente"],
        answer: 0
    },

    {
        question: "3. The first British club to win a Champions League competition was?",
        choices: ["Manchester United", "Celtic", "Liverpool", "Aston Villa"],
        answer: 1
    },

    {
        question: "4. Who was the second professional club to ever win a Champions League title?",
        choices: ["Barcelona", "AC Milan", "Inter Milan", "Benfica"],
        answer: 3
    },

    {
        question: "5. Which of these clubs have never won a Champions League title in back-to-back seasons?",
        choices: ["Benfica", "Bayern Munich", "Juventus", "Real Madrid"],
        answer: 2
    },

    {
        question: "6. Who has scored the most goals in Champions League history?",
        choices: ["Crisitano Ronaldo", "Lionel Messi", "Raul", "Andriy Shevchenko"],
        answer: 0,
    },

    {
        question: "7. What is the only French club to ever win a Champions League Competition?",
        choices: ["Lyon", "Marseille", "PSG", "AS Monaco"],
        answer: 1
    },

    {
        question: "8. Which team won the first penalty shoot out to win the Champions League?",
        choices: ["Liverpool", "Bayern Munich", "Juventus", "Barcelona"],
        answer: 0,
    },

    {
        question: "9. Which of these teams have never won a Champions League Competition?",
        choices: ["Hamburg", "Bayern Leverkusen", "Aston Villa", "Nottingham Forrest"],
        answer: 1,
    },

    {
        question: "10. Which player currently holds the record for most matches played in Champions League competitions?",
        choices: ["Xavi Hernandez", "Zinedine Zidane", "Iker Casillas", "Ryan Giggs"],
        answer: 2,
    }];

// Set up variables for game
var userRight = 0;
var userWrong = 0;
var userMissed = 0;
var intervalId;
var triviaTimer = 90;

// Remove Start button and add timer from Javascript into HTML when clicked
$("#start-game").click(function () {
    $("#start-game , #history-bio").remove();
    $("#game-timer").html('<h3>Time Remaining: 90 Seconds</h3>');
    triviaCountdown();

    // Display question header
    $(".card-header").html("<h3>Questions<h3>")

    // Question 1
    $("#question-1").html("<h5>" + questions[0].question + "</h5>");
    $("#answer-1").html("<input type='radio' name = 'answer-1' id ='q1a' value='0'>" + "<label>"
        + questions[0].choices[0] + "</label> " + "<input type='radio' name = 'answer-1' id = 'q1b' value ='1'>" + "<label>"
        + questions[0].choices[1] + "</label> " + "<input type='radio' name = 'answer-1' id = 'q1c' value ='2'>" + "<label>"
        + questions[0].choices[2] + "</label> " + "<input type='radio' name = 'answer-1' id = 'q1d' value ='3'>" + "<label>"
        + questions[0].choices[3] + "</label><hr>");

    // Question 2
    $("#question-2").html("<h5>" + questions[1].question + "</h5>");
    $("#answer-2").html("<input type='radio' name = 'answer-2' id ='q2a' value='0'>" + "<label>"
        + questions[1].choices[0] + "</label>" + "<input type = 'radio' name = 'answer-2' id ='q2b' value='1'>" + "<label>"
        + questions[1].choices[1] + "</label>" + "<input type='radio' name = 'answer-2' id ='q2c' value='2'>" + "<label>"
        + questions[1].choices[2] + "</label>" + "<input type='radio' name = 'answer-2' id ='q2d' value='3'>" + "<label>"
        + questions[1].choices[3] + "<label><hr>");

    // Question 3
    $("#question-3").html("<h5>" + questions[2].question + "</h5>");
    $("#answer-3").html("<input type='radio' name = 'answer-3answer3' id ='q3a' value='0'>" + "<label>"
        + questions[2].choices[0] + "</label>" + "<input type='radio' name = 'answer-3' id ='q3b' value='1'>" + "<label>"
        + questions[2].choices[1] + "</label>" + "<input type='radio' name = 'answer-3' id ='q3c' value='2'>" + "<label>"
        + questions[2].choices[2] + "</label>" + "<input type='radio' name = 'answer-3' id ='q3d' value='3'>" + "<label>"
        + questions[2].choices[3] + "</label><hr>");

    // Question 4
    $("#question-4").html("<h5>" + questions[3].question + "</h5>");
    $("#answer-4").html("<input type='radio' name = 'answer-4' id ='q4a' value='0'>" + "<label>"
        + questions[3].choices[0] + "</label>" + "<input type='radio' name = 'answer-4' id ='q4b' value='1'>" + "<label>"
        + questions[3].choices[1] + "</label>"
        + "<input type='radio' name = 'answer-4' id ='q4c' value='2'>" + "<label>" + questions[3].choices[2] + "</label>"
        + "<input type='radio' name = 'answer-4' id ='q4d' value='3'>" + "<label>" + questions[3].choices[3] + "</label><hr>");

    // Question 5
    $("#question-5").html("<h5>" + questions[4].question + "</h5>");
    $("#answer-5").html("<input type='radio' name = 'answer-5' id ='q5a'      value='0'>" + "<label>"
        + questions[4].choices[0] + "</label>" + "<input type='radio' name = 'answer-5' id ='q5b' value='1'>" + "<label>"
        + questions[4].choices[1] + "</label>" + "<input type='radio' name = 'answer-5' id ='q5c' value='2'>" + "<label>"
        + questions[4].choices[2] + "</label>" + "<input type='radio' name = 'answer-5' id ='q5d' value='3'>" + "<label>"
        + questions[4].choices[3] + "</label><hr>");

    // Question 6
    $("#question-6").html("<h5>" + questions[5].question + "</h5>");
    $("#answer-6").html("<input type='radio' name = 'answer-6' id ='q6a'      value='0'>" + "<label>"
        + questions[5].choices[0] + "</label>" + "<input type='radio' name = 'answer-6' id ='q6b' value='1'>" + "<label>"
        + questions[5].choices[1] + "</label>" + "<input type='radio' name = 'answer-6' id ='q6c' value='2'>" + "<label>"
        + questions[5].choices[2] + "</label>" + "<input type='radio' name = 'answer-6' id ='q6d' value='3'>" + "<label>"
        + questions[5].choices[3] + "</label><hr>");

    // Question 7
    $("#question-7").html("<h5>" + questions[6].question + "</h5>");
    $("#answer-7").html("<input type='radio' name = 'answer-7' id ='q7a'      value='0'>" + "<label>"
        + questions[6].choices[0] + "</label>" + "<input type='radio' name = 'answer-7' id ='q7b' value='1'>" + "<label>"
        + questions[6].choices[1] + "</label>" + "<input type='radio' name = 'answer-7' id ='q7c' value='2'>" + "<label>"
        + questions[6].choices[2] + "</label>" + "<input type='radio' name = 'answer-7' id ='q7d' value='3'>" + "<label>"
        + questions[6].choices[3] + "</label><hr>");

    // Question 8
    $("#question-8").html("<h5>" + questions[7].question + "</h5>");
    $("#answer-8").html("<input type='radio' name = 'answer-8' id ='q8a'      value='0'>" + "<label>"
        + questions[7].choices[0] + "</label>" + "<input type='radio' name = 'answer-8' id ='q8b' value='1'>" + "<label>"
        + questions[7].choices[1] + "</label>" + "<input type='radio' name = 'answer-8' id ='q8c' value='2'>" + "<label>"
        + questions[7].choices[2] + "</label>" + "<input type='radio' name = 'answer-8' id ='q8d' value='3'>" + "<label>"
        + questions[7].choices[3] + "</label><hr>");

    // Question 9
    $("#question-9").html("<h5>" + questions[8].question + "</h5>");
    $("#answer-9").html("<input type='radio' name = 'answer-9' id ='q9a'      value='0'>" + "<label>"
        + questions[8].choices[0] + "</label>" + "<input type='radio' name = 'answer-9' id ='q9b' value='1'>" + "<label>"
        + questions[8].choices[1] + "</label>" + "<input type='radio' name = 'answer-9' id ='q9c' value='2'>" + "<label>"
        + questions[8].choices[2] + "</label>" + "<input type='radio' name = 'answer-9' id ='q9d' value='3'>" + "<label>"
        + questions[8].choices[3] + "</label><hr>");

    // Question 10
    $("#question-10").html("<h5>" + questions[9].question + "</h5>");
    $("#answer-10").html("<input type='radio' name = 'answer-10' id ='q10a' value='0'>" + "<label>"
        + questions[9].choices[0] + "</label>" + "<input type='radio' name = 'answer-10' id ='q10b' value='1'>" + "<label>"
        + questions[9].choices[1] + "</label>" + "<input type='radio' name = 'answer-10' id ='q10c' value='2'>" + "<label>"
        + questions[9].choices[2] + "</label>" + "<input type='radio' name = 'answer-10' id ='q10d' value='3'>" + "<label>"
        + questions[9].choices[3] + "</label><hr>");

    // Submit button
    $("#submit").html("<button id = 'finished' class = 'btn btn-secondary'>Done</button>");

    // Submit button will tally answers right, wrong and unanswered and display the results when user clicks Done button
    $("#finished").on("click", function () {
        scoreSheet();
        pointTally();
    });
});

// Set up timer function for trivia game
function triviaCountdown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// Set up timer countdown
function decrement() {
    triviaTimer--;
    $("#game-timer").html("<h3>Time Remaining: " + triviaTimer + " Seconds</h3>");

    // Set to automatic direct to result page when timer reaches zero
    if (triviaTimer === 0) {
        gameOver();
        scoreSheet();
        pointTally();

        function gameOver() {
            clearInterval(intervalId);
        }
    }
}

//Display results on the next page
function pointTally() {
    $("#game-timer , #submit").remove();
    $(".card-header").html("<h3>Scoresheet<h3>");
    $("#question-1 , #question-2, #question-3, #question-4 , #question-5 , #question-6 , #question-7 , #question-8 , #question-9 , #question-10").remove();
    $("#answer-1 , #answer-2, #answer-3, #answer-4 , #answer-5 , #answer-6 , #answer-7 , #answer-8 , #answer-9 , #answer-10").remove();
    $("#user-right").html("<h4>Right Answers: " + userRight + "<h4>");
    $("#user-wrong").html("<h4>Wrong Answers: " + userWrong + "<h4>");
    $("#user-missed").html("<h4>Missed Answers: " + userMissed + "<h4>");
}

//Keep track of right and wrong answers given
function scoreSheet() {
    var myanswer1 = $("input[name ='answer-1']:checked").val();
    var myanswer2 = $("input[name ='answer-2']:checked").val();
    var myAnswer3 = $("input[name ='answer-3']:checked").val();
    var myAnswer4 = $("input[name ='answer-4']:checked").val();
    var myAnswer5 = $("input[name ='answer-5']:checked").val();
    var myAnswer6 = $("input[name ='answer-6']:checked").val();
    var myAnswer7 = $("input[name ='answer-7']:checked").val();
    var myAnswer8 = $("input[name ='answer-8']:checked").val();
    var myAnswer9 = $("input[name ='answer-9']:checked").val();
    var myAnswer10 = $("input[name ='answer-10']:checked").val();

    // Question 1 Response
    if (myanswer1 == questions[0].answer) {
        userRight++;
    }
    else if (myanswer1 === undefined) {
        userMissed++;
    }
    else {
        userWrong++;
    }

    // Question 2 Response
    if (myanswer2 == questions[1].answer) {
        userRight++;
    }
    else if (myanswer2 === undefined) {
        userMissed++;
    }
    else {
        userWrong++;
    }

    // Question 3 Response
    if (myAnswer3 == questions[2].answer) {
        userRight++;
    }
    else if (myAnswer3 === undefined) {
        userMissed++;
    }
    else {
        userWrong++;
    }

    // Question 4 Response
    if (myAnswer4 == questions[3].answer) {
        userRight++;
    }
    else if (myAnswer4 === undefined) {
        userMissed++;
    }
    else {
        userWrong++;
    }

    // Question 5 Response
    if (myAnswer5 == questions[4].answer) {
        userRight++;
    }
    else if (myAnswer5 === undefined) {
        userMissed++;
    }
    else {
        userWrong++;
    }

    // Question 6 Response
    if (myAnswer6 == questions[5].answer) {
        userRight++;
    }
    else if (myAnswer6 === undefined) {
        userMissed++;
    }
    else {
        userWrong++;
    }

    // Question 7 Response
    if (myAnswer7 == questions[6].answer) {
        userRight++;
    }
    else if (myAnswer7 === undefined) {
        userMissed++;
    }
    else {
        userWrong++;
    }

    // Question 8 Response
    if (myAnswer8 == questions[7].answer) {
        userRight++;
    }
    else if (myAnswer8 === undefined) {
        userMissed++;
    }
    else {
        userWrong++;
    }

    // Question 9 Response
    if (myAnswer9 == questions[8].answer) {
        userRight++;
    }
    else if (myAnswer9 === undefined) {
        userMissed++;
    }
    else {
        userWrong++;
    }

    // Question 10 Response
    if (myAnswer10 == questions[9].answer) {
        userRight++;
    }
    else if (myAnswer10 === undefined) {
        userMissed++;
    }
    else {
        userWrong++;
    }
};