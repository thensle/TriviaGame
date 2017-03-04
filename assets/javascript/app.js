$(document).ready(function(){

// Initialize game object
var secondCounter;

var triviaGame = {
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	userAnswer: "",
	gameStatus: "startScreen", //options: startScreen, gameStarted, questionAnswered
	questionCounter: 1,
	questionCorrectAnswer: "",
	currentTime: 15,
	startTimer: function() {
	   	secondCounter = setInterval(function(){
	    triviaGame.timerCountDown();
	    }, 1000*1)},
	time: function(x) {

	    var minutes = Math.floor(x / 60);
	    var seconds = x - (minutes * 60);

	    if (seconds < 10) {
	      seconds = "0" + seconds;
	    }

	    if (minutes === 0) {
	      minutes = "00";
	    }

	    else if (minutes < 10) {
	      minutes = "0" + minutes;
	    }

	    return minutes + ":" + seconds;
	  },
	timerCountDown: function () {

        triviaGame.currentTime--;
	    var timeDisplay = triviaGame.time(triviaGame.currentTime);
	    $(".timer").html(timeDisplay);

  },
};

//Initial Game State
	if (triviaGame.gameStatus === "startScreen"){
		startMenu();

	}; //else if ();

	if(triviaGame.currentTime === "00:00"){
		questionUnanswered();
	}
	
//Event Listeners

$(".start-button").on("click", function(){
	revealDisplay();
	revealQuestion();
	$(".timer").html("00:15");
	triviaGame.startTimer();
});

//Maybe not this, make a general event listener
$(document).on("click", ".answer", function(){
	triviaGame.userAnswer = $(this).attr("value");
	checkAnswer();

});

//Functions

	//Initial window presentation, only start button shown
function startMenu(){
	$(".time-remaining").css("display", "none");
	$(".results").css("display", "none");
	$(".question").css("display", "none");
	$(".answers").css("display", "none");
	$(".start-button").show();
};
	//Hide start button, reveal questions

function revealDisplay(){
	$(".time-remaining").css("display", "block");
	$(".results").css("display", "block");
	$(".question").css("display", "block");
	$(".answers").css("display", "block");
	$(".start-button").hide();
};

function revealScoreAndReset(){

};

// //Start the Timer for each question

// function startTimer(){
// 	$(".timer").html("00:15");
// 	setTimeOut(function(){
// 		questionUnanswered();
// 		}, 1000*15);

	

// };


//Functions for checking user answers and then actions for each option - user unanswered, wrong, right -

function checkAnswer(){



	function questionUnanswered(){

	};

	function questionRight(){

	};

	function questionWrong(){

	};
};


//Question Display
function revealQuestion(){
	if (triviaGame.questionCounter === 1){
		$(".question").html("Which of the following is NOT a Latrice Royal quote?");
		$(".answerA").html("And make them eat it!");
		$(".answerB").html("Jesus is a biscuit.");
		$(".answerC").html("No one cares - work harder!");
		$(".answerD").html("Good God Girl, Get a Grip!");
		triviaGame.questionCorrectAnswer = "";
		};

	if (triviaGame.questionCounter === 2){
		$(".question").html("");
		$(".answerA").html("");
		$(".answerB").html("");
		$(".answerC").html("");
		$(".answerD").html("");
		triviaGame.questionCorrectAnswer = "";
		};

	if (triviaGame.questionCounter === 3){
		$(".question").html("");
		$(".answerA").html("");
		$(".answerB").html("");
		$(".answerC").html("");
		$(".answerD").html("");
		triviaGame.questionCorrectAnswer = "";
		};

	if (triviaGame.questionCounter === 4){
		$(".question").html("");
		$(".answerA").html("");
		$(".answerB").html("");
		$(".answerC").html("");
		$(".answerD").html("");
		triviaGame.questionCorrectAnswer = "";
		};

	if (triviaGame.questionCounter === 5){
		$(".question").html("");
		$(".answerA").html("");
		$(".answerB").html("");
		$(".answerC").html("");
		$(".answerD").html("");
		triviaGame.questionCorrectAnswer = "";
		};

	if (triviaGame.questionCounter === 6){
		$(".question").html("");
		$(".answerA").html("");
		$(".answerB").html("");
		$(".answerC").html("");
		$(".answerD").html("");
		triviaGame.questionCorrectAnswer = "";
		};

	if (triviaGame.questionCounter === 7){
		$(".question").html("");
		$(".answerA").html("");
		$(".answerB").html("");
		$(".answerC").html("");
		$(".answerD").html("");
		triviaGame.questionCorrectAnswer = "";
		};

	if (triviaGame.questionCounter === 8){
		$(".question").html("");
		$(".answerA").html("");
		$(".answerB").html("");
		$(".answerC").html("");
		$(".answerD").html("");
		triviaGame.questionCorrectAnswer = "";
		};

	if (triviaGame.questionCounter === 9){
		$(".question").html("");
		$(".answerA").html("");
		$(".answerB").html("");
		$(".answerC").html("");
		$(".answerD").html("");
		triviaGame.questionCorrectAnswer = "";
		};

	if (triviaGame.questionCounter === 10){
		$(".question").html("");
		$(".answerA").html("");
		$(".answerB").html("");
		$(".answerC").html("");
		$(".answerD").html("");
		triviaGame.questionCorrectAnswer = "";
		};

};

});