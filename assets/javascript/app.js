$(document).ready(function(){

// Initialize game object

var triviaGame = {
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	userAnswer: "",
	gameStatus: "startScreen", //options: startScreen, gameStarted, questionAnswered
	questionCounter: 1,
	questionCorrectAnswer: ""
};

//Initial Game State
	if (triviaGame.gameStatus === "startScreen"){
		startMenu();
	};


	
//Event Listeners

$(".start-button").on("click", function(){
	revealDisplay();
	revealQuestion();
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

//Question Display
function revealQuestion(){
	if (triviaGame.questionCounter === 1){
		$(".question").html("Which of the following is NOT a Latrice Royal quote?");
		$(".answerA").html("And make them eat it!");
		$(".answerB").html("Jesus is a biscuit.");
		$(".answerC").html("Blah!");
		$(".answerD").html("Nomnom.");
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