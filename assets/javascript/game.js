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
    var triviaTimer = 90;

    // Remove Start button and add timer from Javascript into HTML when clicked
    $("#start-game").click(function () {
        $("#start-game , #history-bio").remove();
        $("#game-timer").html('<h2>Time Remaining: <span id = "counter">90</span> Seconds</h2><br>');
        triviaCountdown();

        // Display question header
        $(".card-header").html("<h3>Questions<h3>")

        // Question 1
        $("#question-1").html("<h5>" + questions[0].q1.question + "</h5>" + "<input type='radio' name='answer1' value='0'>" + "<label>"
            + questions[0].q1.choices[0] + "</label> "+ "<input type='radio' name='answer1' value='1'>" + "<label>" 
            + questions[0].q1.choices[1] + "</label> "+ "<input type='radio' name='answer1' value='2'>" + "<label>" 
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
            + questions[0].q3.choices[0] + "</label>"+ "<input type='radio' name='answer3' value='1'>" + "<label>" 
            + questions[0].q3.choices[1] + "</label>"+ "<input type='radio' name='answer3' value='2'>" + "<label>" 
            + questions[0].q3.choices[2] + "</label>"+ "<input type='radio' name='answer3' value='3'>" + "<label>" 
            + questions[0].q3.choices[3] + "</label><br>");

        // Question 4
        $("#question-4").html("<h5>" + questions[0].q4.question + "</h5>" + "<input type='radio' name='answer4' value='0'>" + "<label>" 
            + questions[0].q4.choices[0] + "</label>"+ "<input type='radio' name='answer4' value='1'>" + "<label>" 
            + questions[0].q4.choices[1] + "</label>"
            + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[0].q4.choices[2] + "</label>"
            + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[0].q4.choices[3] + "</label><br>");

        // Question 5
        $("#question-5").html("<h5>" + questions[0].q5.question + "</h5>" + "<input type='radio' name='answer5' value='0'>" + "<label>" 
            + questions[0].q5.choices[0] + "</label>"+ "<input type='radio' name='answer5' value='1'>" + "<label>" 
            + questions[0].q5.choices[1] + "</label>"+ "<input type='radio' name='answer5' value='2'>" + "<label>" 
            + questions[0].q5.choices[2] + "</label>"+ "<input type='radio' name='answer5' value='3'>" + "<label>" 
            + questions[0].q5.choices[3] + "</label><br>");

        // Submit button
        $("#submit").html("<button id='done' class='btn'>Done</button>");

        // Click event runs keepingScore() and displayResults() when user clicks Done button
        $("#done").on("click", function () {

        });

    });

    // Set up timer function for trivia game
    function triviaCountdown() {
        triviaTimer--;
        // timer = setInterval (triviaCountdown, 1000);
        $("#game-timer").html('<h4>Time Remaining: <span id = "counter">90</span> Seconds</h4>');

        if (triviaTimer == 0) {
            triviaFinished();
        }
    };

});