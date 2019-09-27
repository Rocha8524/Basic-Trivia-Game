// Set up questions and answers array used for Trivia Game
var questions = [{
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
    $("#answer-1").html("<input type='radio' name = 'answer1' id ='q1a' value='0'>" + "<label>"
        + questions[0].choices[0] + "</label> " + "<input type='radio' name = 'answer-1' id = 'q1b' value ='1'>" + "<label>"
        + questions[0].choices[1] + "</label> " + "<input type='radio' name = 'answer-1' id = 'q1c' value ='2'>" + "<label>"
        + questions[0].choices[2] + "</label> " + "<input type='radio' name = 'answer-1' id = 'q1d' value ='3'>" + "<label>"
        + questions[0].choices[3] + "</label><br>");

    // Question 2
    $("#question-2").html("<h5>" + questions[1].question + "</h5>");
    $("#answer-2").html("<input type='radio' name = 'answer2' id ='q2a' value='0'>" + "<label>"
        + questions[1].choices[0] + "</label>" + "<input type = 'radio' name = 'answer-2' id ='q2b' value='1'>" + "<label>"
        + questions[1].choices[1] + "</label>" + "<input type='radio' name = 'answer-2' id ='q2c' value='2'>" + "<label>"
        + questions[1].choices[2] + "</label>" + "<input type='radio' name = 'answer-2' id ='q2d' value='3'>" + "<label>"
        + questions[1].choices[3] + "<label><br>");

    // Question 3
    $("#question-3").html("<h5>" + questions[2].question + "</h5>");
    $("#answer-3").html("<input type='radio' name = 'answer3' id ='q3a' value='0'>" + "<label>"
        + questions[2].choices[0] + "</label>" + "<input type='radio' name = 'answer-3' id ='q3b' value='1'>" + "<label>"
        + questions[2].choices[1] + "</label>" + "<input type='radio' name = 'answer-3' id ='q3c' value='2'>" + "<label>"
        + questions[2].choices[2] + "</label>" + "<input type='radio' name = 'answer-3' id ='q3d' value='3'>" + "<label>"
        + questions[2].choices[3] + "</label><br>");

    // Question 4
    $("#question-4").html("<h5>" + questions[4].question + "</h5>");
    $("#answer-4").html("<input type='radio' name = 'answer4' id ='q4a' value='0'>" + "<label>"
        + questions[3].choices[0] + "</label>" + "<input type='radio' name = 'answer-4' id ='q4b' value='1'>" + "<label>"
        + questions[3].choices[1] + "</label>"
        + "<input type='radio' name = 'answer-4' id ='q4c' value='2'>" + "<label>" + questions[3].choices[2] + "</label>"
        + "<input type='radio' name = 'answer-4' id ='q4d' value='3'>" + "<label>" + questions[3].choices[3] + "</label><br>");

    // Question 5
    $("#question-5").html("<h5>" + questions[4].question + "</h5>");
    $("#answer-5").html("<input type='radio' name = 'answer5' id ='q5a'      value='0'>" + "<label>"
        + questions[4].choices[0] + "</label>" + "<input type='radio' name = 'answer-5' id ='q5b' value='1'>" + "<label>"
        + questions[4].choices[1] + "</label>" + "<input type='radio' name = 'answer-5' id ='q5c' value='2'>" + "<label>"
        + questions[4].choices[2] + "</label>" + "<input type='radio' name = 'answer-5' id ='q5d' value='3'>" + "<label>"
        + questions[4].choices[3] + "</label><br><hr>");

    // Submit button
    $("#submit").html("<button id = 'finished' class = 'btn'>Done</button>");

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
    $("#game-timer").html('<h3>Time Remaining: ' + triviaTimer + " Seconds</h3>");

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
    $("#question-1 , #question-2, #question-3, #question-4 , #question-5").remove();
    $("#answer-1 , #answer-2, #answer-3, #answer-4 , #answer-5").remove();
    $("#user-right").html("<h4>Right Answers: " + userRight + "<h4>");
    $("#user-wrong").html("<h4>Wrong Answers: " + userWrong + "<h4>");
    $("#user-missed").html("<h4>Missed Answers: " + userMissed + "<h4>");
}

//Keep track of right and wrong answers given
function scoreSheet() {
    var myAnswer1 = $("input[name ='answer1']:checked").val();
    var myAnswer2 = $("input[name ='answer2']:checked").val();
    var myAnswer3 = $("input[name ='answer3']:checked").val();
    var myAnswer4 = $("input[name ='answer4']:checked").val();
    var myAnswer5 = $("input[name ='answer5']:checked").val();

    // Question 1 Response
    if (myAnswer1 == questions[0].answer) {
        userRight++;
    }
    else if (myAnswer1 === undefined) {
        userMissed++;
    }
    else {
        userWrong;
    }

    // Question 2 Response
    if (myAnswer2 == questions[1].answer) {
        userRight++;
    }
    else if (myAnswer2 === undefined) {
        userMissed++;
    }
    else {
        userWrong;
    }

    // Question 3 Response
    if (myAnswer3 == questions[2].answer) {
        userRight++;
    }
    else if (myAnswer3 === undefined) {
        userMissed++;
    }
    else {
        userWrong;
    }

    // Question 4 Response
    if (myAnswer4 == questions[3].answer) {
        userRight++;
    }
    else if (myAnswer4 === undefined) {
        userMissed++;
    }
    else {
        userWrong;
    }

    // Question 5 Response
    if (myAnswer5 == questions[4].answer) {
        userRight++;
    }
    else if (myAnswer5 === undefined) {
        userMissed++;
    }
    else {
        userWrong;
    }
};