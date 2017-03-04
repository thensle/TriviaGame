$(document).ready(function(){

// Initialize game object
var secondCounter;
var timeDisplay;

var triviaGame = {
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	userAnswer: "",
	gameStatus: "startScreen", //options: startScreen, questionDisplayed, questionAnswered, gameDone
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
	    timeDisplay = triviaGame.time(triviaGame.currentTime);
	    $(".timer").html(timeDisplay);
	    if (triviaGame.currentTime === 0){
	    	questionUnanswered();
	    };
		}


};

	//Game Phases
	if (triviaGame.gameStatus === "startScreen"){
		$(".results").hide();
		startMenu();
		triviaGame.gameStatus === "questionDisplayed";
	};
	
//Event Listeners

$(".start-button").on("click", function(){
	triviaGame.correct = 0,
	triviaGame.incorrect = 0,
	triviaGame.unanswered = 0,
	triviaGame.userAnswer = "",
	triviaGame.gameStatus = "startScreen",
	triviaGame.questionCounter = 1,
	triviaGame.questionCorrectAnswer = "",
	triviaGame.currentTime = 15,
	$(".results").empty();
	revealQuestionDisplay();
	revealQuestion();
	$(".timer").html("00:15");
	triviaGame.startTimer();
});

$(document).on("click", ".answer", function(){
	triviaGame.userAnswer = $(this).attr("value");
	triviaGame.gameStatus = "questionAnswered";
	checkAnswer();

});

//Functions

//Initial window presentation, only start button shown

function startMenu(){
	hideQuestionFeatures();
	$(".time-remaining").css("display", "none");
	$(".start-button").show();
};

function hideQuestionFeatures(){
	$(".results").css("display", "none");
	$(".question").css("display", "none");
	$(".answers").css("display", "none");
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
	$(".start-button").html("Replay the Extravaganza!")
	$(".start-button").show();
	$(".results").html("Lookin' fierce! Here's the realness you served: <br> <br> Number of Questions You Slayed: " 
		+ triviaGame.correct + "<br> <br> Number of Questions That Clocked You: " + triviaGame.incorrect + 
		"<br> <br> Number of Questions You're Too Fish to Answer: " + triviaGame.unanswered);
};


//Functions for checking user answers and then actions for each option - user unanswered, wrong, right -
//A bit of repeating code - work on this later

function questionUnanswered(){
	triviaGame.unanswered++;

	$(".timer").html(timeDisplay);
	clearInterval(secondCounter);
	hideQuestionFeatures();

	$(".results").html("Oh no - out of time! <br><br> The correct answer was: " + triviaGame.questionCorrectAnswer);
	$(".results").show();
	var countDownToNext = setTimeout(function(){
		newQuestion();
	}, 1000 * 3);
};

function checkAnswer(){
	$(".timer").html(timeDisplay);
	clearInterval(secondCounter);
	hideQuestionFeatures();

	if(triviaGame.questionCorrectAnswer === triviaGame.userAnswer){
		questionRight();
	} else {
		questionWrong();
	};
	

	function questionRight(){
		triviaGame.correct++;
		$(".results").html("YAAASSS, Mama! <br><br> The correct answer was: " + triviaGame.questionCorrectAnswer);
		$(".results").show();
		var countDownToNext = setTimeout(function(){
		newQuestion();
	}, 1000 * 3);
	};

	function questionWrong(){
		triviaGame.incorrect++;
		$(".results").html("Really, queen? <br><br> The correct answer was: " + triviaGame.questionCorrectAnswer);
		$(".results").show();
		var countDownToNext = setTimeout(function(){
		newQuestion();
	}, 1000 * 3);
	};
};

function newQuestion(){
	triviaGame.questionCounter++;
	if (triviaGame.questionCounter > 5){
		revealScoreAndReset();
	} else {
	$(".results").empty();
	triviaGame.userAnswer = "";
	triviaGame.currentTime = 15;
	secondCounter = 15;
	triviaGame.gameStatus = "questionDisplayed";
	
	revealQuestion();
	revealQuestionDisplay();
	$(".timer").html("00:15");
	triviaGame.startTimer();
};
};

//Question Display - make an object later
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
		$(".question").html("Who is Derrick Barry most famous for portraying at his Las Vegas show?");
		$(".answerA").html("Britney Spears");
		$(".answerB").html("Cher");
		$(".answerC").html("Madonna");
		$(".answerD").html("Lady Gaga");
		triviaGame.questionCorrectAnswer = "A";
		};

	if (triviaGame.questionCounter === 3){
		$(".question").html("During her run of AllStars, Tatianna was sent home by which queen?");
		$(".answerA").html("Alyssa Edwards");
		$(".answerB").html("Detox");
		$(".answerC").html("Katya");
		$(".answerD").html("Alaska");
		triviaGame.questionCorrectAnswer = "D";
		};

	if (triviaGame.questionCounter === 4){
		$(".question").html("Which of the following was NOT a Season 7 queen?");
		$(".answerA").html("Kandy Ho");
		$(".answerB").html("Jasmine Masters");
		$(".answerC").html("Jaidynn Diore Fierce");
		$(".answerD").html("Naysha Lopez");
		triviaGame.questionCorrectAnswer = "D";
		};

	if (triviaGame.questionCounter === 5){
		$(".question").html("Phi Phi O'Hara got in an infamous fight with which Season 4 queen?");
		$(".answerA").html("Sharon Needles");
		$(".answerB").html("Chad Michaels");
		$(".answerC").html("Jiggly Caliente");
		$(".answerD").html("The Princess");
		triviaGame.questionCorrectAnswer = "A";
		};
};

});