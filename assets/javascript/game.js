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
            choices: ["Benfica", "Bayern Munich", "Juventus", "Real Madrid"],
            answer: "Juventus",
        },
    }];

    // Set up variables for game
    var userRight = 0;
    var userWrong = 0;
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
        $("#question-1").html("<h5>" + questions[0].q1.question + "</h5>" + "<input type='radio' name = 'answer-1' id ='q1a' value='0'>" + "<label>"
            + questions[0].q1.choices[0] + "</label> " + "<input type='radio' name = 'answer-1' id = 'q1b' value ='1'>" + "<label>"
            + questions[0].q1.choices[1] + "</label> " + "<input type='radio' name = 'answer-1' id = 'q1c' value ='2'>" + "<label>"
            + questions[0].q1.choices[2] + "</label> " + "<input type='radio' name = 'answer-1' id = 'q1d' value ='3'>" + "<label>"
            + questions[0].q1.choices[3] + "</label><br>");

        // Question 2
        $("#question-2").html("<h5>" + questions[0].q2.question + "</h5>" + "<input type='radio' name = 'answer-2' id ='q2a' value='0'>" + "<label>"
            + questions[0].q2.choices[0] + "</label>" + "<input type = 'radio' name = 'answer-2' id ='q2b' value='1'>" + "<label>"
            + questions[0].q2.choices[1] + "</label>" + "<input type='radio' name = 'answer-2' id ='q2c' value='2'>" + "<label>"
            + questions[0].q2.choices[2] + "</label>" + "<input type='radio' name = 'answer-2' id ='q2d' value='3'>" + "<label>"
            + questions[0].q2.choices[3] + "<label><br>");

        // Question 3
        $("#question-3").html("<h5>" + questions[0].q3.question + "</h5>" + "<input type='radio' name = 'answer-3' id ='q3a' value='0'>" + "<label>"
            + questions[0].q3.choices[0] + "</label>" + "<input type='radio' name = 'answer-3' id ='q3b' value='1'>" + "<label>"
            + questions[0].q3.choices[1] + "</label>" + "<input type='radio' name = 'answer-3' id ='q3c' value='2'>" + "<label>"
            + questions[0].q3.choices[2] + "</label>" + "<input type='radio' name = 'answer-3' id ='q3d' value='3'>" + "<label>"
            + questions[0].q3.choices[3] + "</label><br>");

        // Question 4
        $("#question-4").html("<h5>" + questions[0].q4.question + "</h5>" + "<input type='radio' name = 'answer-4' id ='q4a' value='0'>" + "<label>"
            + questions[0].q4.choices[0] + "</label>" + "<input type='radio' name = 'answer-4' id ='q4b' value='1'>" + "<label>"
            + questions[0].q4.choices[1] + "</label>"
            + "<input type='radio' name = 'answer-4' id ='q4c' value='2'>" + "<label>" + questions[0].q4.choices[2] + "</label>"
            + "<input type='radio' name = 'answer-4' id ='q4d' value='3'>" + "<label>" + questions[0].q4.choices[3] + "</label><br>");

        // Question 5
        $("#question-5").html("<h5>" + questions[0].q5.question + "</h5>" + "<input type='radio' name = 'answer-5' id ='q5a'      value='0'>" + "<label>"
            + questions[0].q5.choices[0] + "</label>" + "<input type='radio' name = 'answer-5' id ='q5b' value='1'>" + "<label>"
            + questions[0].q5.choices[1] + "</label>" + "<input type='radio' name = 'answer-5' id ='q5c' value='2'>" + "<label>"
            + questions[0].q5.choices[2] + "</label>" + "<input type='radio' name = 'answer-5' id ='q5d' value='3'>" + "<label>"
            + questions[0].q5.choices[3] + "</label><br><hr>");

        // Submit button
        $("#submit").html("<button id = 'finished' class = 'btn'>Done</button>");

        // Submit button will tally answers right, wrong and unanswered and display the results when user clicks Done button
        $("#finished").on("click", function () {
            $("#game-timer , #submit").remove();
            $(".card-header").html("<h3>Scoresheet<h3>");
            $("#question-1 , #question-2, #question-3, #question-4 , #question-5").remove();
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
            stop();
            $("#game-timer , #submit").remove();
            $(".card-header").html("<h3>Scoresheet<h3>");
            $("#question-1 , #question-2, #question-3, #question-4 , #question-5").remove();
            scoreSheet();
            pointTally();

            function stop() {
                clearInterval(intervalId);
            }
        }
    }

    //Display results on the next page
    function pointTally() {
        $("#user-right").html("<h4>Right Answers: " + userRight + "<h4>");
        $("#user-wrong").html("<h4>Wrong Answers: " + userWrong + "<h4>");
    }
    
    //Keep track of right and wrong answers given
    function scoreSheet() {
        var myAnswer1 = $("input[id ='q1d']:checked").val();
        var myAnswer2 = $("input[id ='q2a']:checked").val();
        var myAnswer3 = $("input[id ='q3b']:checked").val();
        var myAnswer4 = $("input[id ='q4d']:checked").val();
        var myAnswer5 = $("input[id ='q5c']:checked").val();
    
    // Question 1 Response
    if (myAnswer1 == questions[0].q1.answer) {
        userRight++;
    }
    else if (myAnswer1 !== questions[0].q1.answer && undefined) {
        userWrong++;
    }
    
    // Question 2 Response
    if (myAnswer2 == questions[0].q2.answer) {
        userRight++;
    }
    else if (myAnswer2 !== questions[0].q2.answer && undefined) {
        userWrong++;
    }
    
    // Question 3 Response
    if (myAnswer3 == questions[0].q3.answer) {
        userRight++;
    }
    else if (myAnswer3 !== questions[0].q3.answer && undefined) {
        userWrong++;
    }

    // Question 4 Response
    if (myAnswer4 == questions[0].q4.answer) {
        userRight++;
    }
    else if (myAnswer4 !== questions[0].q4.answer && undefined) {
        userWrong++;
    }
    
    // Question 5 Response
    if (myAnswer5 == questions[0].q5.answer) {
        userRight++;
    }
    else if (myAnswer5 !== questions[0].q5.answer && undefined) {
        userWrong++;
    }
};

    /* Keep track of right and wrong answers given
    function scoreSheet() {
        //Question 1 Response
        $.each($("input[id ='q1d']:checked"), function() {
        if ($(this).val() === q1d) {
            userRight++;
        }
        else {
            userWrong++;
            }
        });

        //Question 2 Response
        $.each($("input[id ='q2a']:checked"), function() {
        if ($(this).val() === q2a) {
            userRight++;
        }
        else {
            userWrong++;
            }
        });

        //Question 3 Response
        $.each($("input[id ='q3b']:checked"), function() {
            if ($(this).val() === q3b) {
                userRight++;
            }
            else {
                userWrong++;
            }
        });

        //Question 4 Response
        $.each($("input[id ='q4d']:checked"), function() {
            if ($(this).val() === q4d) {
                userRight++;
            }
            else {
                userWrong++;
            }
        });

        //Question 5 Response
        $.each($("input[id ='q5c']:checked"), function() {
            if ($(this).val() === q5c) {
                userRight++;
            }
            else {
                userWrong++;
            }
        });

        this.pointTally();
        }

        // Display results on the next page
        function pointTally() {
            $("#user-right").html("<h4>Right Answers: " + userRight + "<h4>");
            $("#user-wrong").html("<h4>Wrong Answers: " + userWrong + "<h4>");
        }*/