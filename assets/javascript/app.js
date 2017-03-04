$(document).ready(function(){

// Initialize game object
var secondCounter;
var timeDisplay;

var triviaGame = {
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	userAnswer: "",
	gameStatus: "startScreen", //options: startScreen, questionDisplayed, questionAnswered
	questionCounter: 1,
	questionCorrectAnswer: "",
	currentTime: 15,
	runTimer: function(){
		setTimeout(function(){
		clearInterval(triviaGame.startTimer());
		}, 1000*10)
	},
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
        console.log(triviaGame.currentTime);
	    timeDisplay = triviaGame.time(triviaGame.currentTime);
	    $(".timer").html(timeDisplay);
	    if (triviaGame.currentTime === 0){
	    	questionUnanswered();
	    };
		},


};
console.log(triviaGame.currentTime);

//Game Phases
	if (triviaGame.gameStatus === "startScreen"){
		startMenu();
		triviaGame.gameStatus === "questionDisplayed";


	};
	
	
//Event Listeners

$(".start-button").on("click", function(){
	revealQuestionDisplay();
	revealQuestion();
	console.log(triviaGame.questionCorrectAnswer);
	$(".timer").html("00:15");
	triviaGame.startTimer();
});

$(document).on("click", ".answer", function(){
	triviaGame.userAnswer = $(this).attr("value");
	console.log(triviaGame.userAnswer);
	checkAnswer();

});

//Functions

	//Initial window presentation, only start button shown
function hideQuestionFeatures(){
	// $(".results").css("display", "none");
	$(".question").css("display", "none");
	$(".answers").css("display", "none");
};

function startMenu(){
	hideQuestionFeatures();
	$(".time-remaining").css("display", "none");
	$(".start-button").show();
};
	//Hide start button, reveal questions

function revealQuestionDisplay(){
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
function questionUnanswered(){
	$(".timer").html(timeDisplay);
	clearInterval(secondCounter);
	hideQuestionFeatures();
	$(".results").html("Oh no - out of time! <br><br> The correct answer was: " + triviaGame.questionCorrectAnswer);
	var countDownToNext = setTimeout(function(){
		triviaGame.questionCounter++;
		revealQuestion();
		$(".results").empty();
		revealQuestionDisplay();

	}, 1000 * 3);
};

function checkAnswer(){
	$(".timer").html(timeDisplay);
	clearInterval(secondCounter);
	hideQuestionFeatures();
	if(triviaGame.questionCorrectAnswer === triviaGame.userAnswer){
		questionRight();
	}else{
		questionWrong();
	}


	

	function questionRight(){
		alert("Yay!");
	};

	function questionWrong(){
		alert("Oh No!");
	};
};

function newQuestion(){

};

//Question Display
function revealQuestion(){
	if (triviaGame.questionCounter === 1){
		$(".question").html("Which of the following is NOT a Latrice Royal quote?");
		$(".answerA").html("And make them eat it!");
		$(".answerB").html("Jesus is a biscuit.");
		$(".answerC").html("No one cares - work harder!");
		$(".answerD").html("Good God Girl, Get a Grip!");
		triviaGame.questionCorrectAnswer = "C";
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