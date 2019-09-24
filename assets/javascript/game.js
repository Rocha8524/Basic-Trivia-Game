// Make function available after the document is loaded.
$(document).ready(function () {

    // Set up questions and answers array used for Trivia Game
    var questions = [{
        q1: {
            question: "1. What was the first club to win the Champions League competition?",
            choices: ["Benfica", "Barcelona", "Inter-Milan", "Real Madrid"],
            answer: "Real Madrid",
        },

        q2: {
            question: "2. Who was the first Dutch club to win the Champions League?",
            choices: ["Feyenoord", "Ajax", "PSV Eindhoven", "FC Twente"],
            answer: "Feyenoord",
        },

        q3: {
            question: "3. The first British club to win a Champions League competition was?",
            choices: ["Manchester United", "Celtic", "Liverpool", "Aston Villa"],
            answer: "Celtic",
        },

        q4: {
            question: "4. Who was the second professional club to ever win a Champions League title?",
            choices: ["Barcelona", "AC Milan", "Inter Milan", "Benfica"],
            answer: "Benfica",
        },

        q5: {
            question: "5. Which of these clubs have never won a Champions League title in back-to-back seasons?",
            choices: ["Benfica", "Juventus", "Bayern Munich", "Real Madrid"],
            answer: "Juventus",
        },
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
        $("#question-1").html("<h5>" + questions[0].q1.question + "</h5>" + "<input type='radio' name='answer1' value='0'>" + "<label>"
            + questions[0].q1.choices[0] + "</label> " + "<input type='radio' name='answer1' value='1'>" + "<label>"
            + questions[0].q1.choices[1] + "</label> " + "<input type='radio' name='answer1' value='2'>" + "<label>"
            + questions[0].q1.choices[2] + "</label> " + "<input type='radio' name='answer1' value='3'>" + "<label>"
            + questions[0].q1.choices[3] + "</label><br>");

        // Question 2
        $("#question-2").html("<h5>" + questions[0].q2.question + "</h5>" + "<input type='radio' name='answer2' value='0'>" + "<label>"
            + questions[0].q2.choices[0] + "</label>" + "<input type='radio' name='answer2' value='1'>" + "<label>"
            + questions[0].q2.choices[1] + "</label>" + "<input type='radio' name='answer2' value='2'>" + "<label>"
            + questions[0].q2.choices[2] + "</label>" + "<input type='radio' name='answer2' value='3'>" + "<label>"
            + questions[0].q2.choices[3] + "<label><br>");

        // Question 3
        $("#question-3").html("<h5>" + questions[0].q3.question + "</h5>" + "<input type='radio' name='answer3' value='0'>" + "<label>"
            + questions[0].q3.choices[0] + "</label>" + "<input type='radio' name='answer3' value='1'>" + "<label>"
            + questions[0].q3.choices[1] + "</label>" + "<input type='radio' name='answer3' value='2'>" + "<label>"
            + questions[0].q3.choices[2] + "</label>" + "<input type='radio' name='answer3' value='3'>" + "<label>"
            + questions[0].q3.choices[3] + "</label><br>");

        // Question 4
        $("#question-4").html("<h5>" + questions[0].q4.question + "</h5>" + "<input type='radio' name='answer4' value='0'>" + "<label>"
            + questions[0].q4.choices[0] + "</label>" + "<input type='radio' name='answer4' value='1'>" + "<label>"
            + questions[0].q4.choices[1] + "</label>"
            + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[0].q4.choices[2] + "</label>"
            + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[0].q4.choices[3] + "</label><br>");

        // Question 5
        $("#question-5").html("<h5>" + questions[0].q5.question + "</h5>" + "<input type='radio' name='answer5' value='0'>" + "<label>"
            + questions[0].q5.choices[0] + "</label>" + "<input type='radio' name='answer5' value='1'>" + "<label>"
            + questions[0].q5.choices[1] + "</label>" + "<input type='radio' name='answer5' value='2'>" + "<label>"
            + questions[0].q5.choices[2] + "</label>" + "<input type='radio' name='answer5' value='3'>" + "<label>"
            + questions[0].q5.choices[3] + "</label><br><hr>");

        // Submit button
        $("#submit").html("<button id = 'finished' class = 'btn'>Done</button>");

        // Submit button will tally answers right, wrong and unanswered and display the results when user clicks Done button
        $("#finished").on("click", function () {
            $("#game-timer , #submit").remove();
            $(".card-header").html("<h3>Scoresheet<h3>");
            $("#question-1 , #question-2, #question-3, #question-4 , #question-5").remove();
            pointTally();
            scoreSheet();
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

        if (triviaTimer === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function pointTally() {
        $("#user-right").html("<h4>Right Answers: <h4>" + userRight);
        $("#user-wrong").html("<h4>Wrong Answers: <h4>" + userWrong);
        $("#user-missing").html("<h4>Missing Answers: <h4>" + userMissed);
    }

    function scoreSheet() {
        var myAnswer1 = $("input[name='answer1']:checked").val();
        var myAnswer2 = $("input[name='answer2']:checked").val();
        var myAnswer3 = $("input[name='answer3']:checked").val();
        var myAnswer4 = $("input[name='answer4']:checked").val();
        var myAnswer5 = $("input[name='answer5']:checked").val();

        // Question 1
        if (myAnswer1 == questions[0].q1.answer) {
            userRight++;
        }
        else {
            userWrong++;
        }

        // Question 2
        if (myAnswer2 == questions[0].q2.answer) {
            userRight++;
        }
        else {
            userWrong++;
        }

        // Question 3
        if (myAnswer3 == questions[0].q3.answer) {
            userRight++;
        }
        else {
            userWrong++;
        }
        // Question 4
        if (myAnswer4 == questions[0].q4.answer) {
            userRight++;
        }
        else {
            userWrong++;
        }

        // Question 5
        if (myAnswer5 == questions[0].q5.answer) {
            userRight++;
        }
        else {
            userWrong++;
        }

        // Questions Missed
        if (myAnswer1, myAnswer2, myAnswer3, myAnswer4, myAnswer5 === undefined) {
            userMissed++;
        }
    };
});