$(document).ready(function(){

// Initialize game object

var triviaGame {
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	userAnswer: "",
	gameStarted: false,
}

//Initial Game State
	if (triviaGame.gameStarted === false){
		startMenu();
	};


	
//Event Listeners

$(".start-button").on("click", function(){
	triviaGame.gameStarted = true;
	revealQuestions();
});

$(".answerA").on("click", function(){
	
});

$(".answerB").on("click", function(){

});

$(".answerC").on("click", function(){

});

$(".answerD").on("click", function(){

});


//Functions

	//Initial window presentation, only start button shown
function startMenu(){
	$(".time-remaining").hide();
	$(".results").hide();
	$(".question").hide();
	$(".answerA").hide();
	$(".answerB").hide();
	$(".answerC").hide();
	$(".answerD").hide();
	$(".start-button").show();
};
	//Hide start button, reveal questions

function revealQuestions(){
	$(".time-remaining").show();
	$(".results").show();
	$(".question").show();
	$(".answerA").show();
	$(".answerB").show();
	$(".answerC").show();
	$(".answerD").show();
	$(".start-button").hide();
};

});