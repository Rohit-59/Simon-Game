var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keydown(function(){
     if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});


$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

     playSound(userChosenColour);

     animatePress(userChosenColour);
     checkAnswer(userClickedPattern.length-1);
  });

  function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");
         //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
         playSound("wrong");

         //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
         $("body").addClass("game-over");
         setTimeout(function () {
           $("body").removeClass("game-over");
         }, 200);
   
         //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
         $("#level-title").text("Game Over, Press Any Key to Restart");
 
         //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}

function nextSequence(){

    userClickedPattern = [];

    level++;
  $("#level-title").text("Level " + level);

    var rand1 = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[rand1]; 
    
    gamePattern.push(randomChosenColour);
    
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);

   
   
};

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
};



function playSound(name){
    var aud = new Audio("sounds/"+name+
    ".mp3");
    aud.play();

}
function startOver() {

    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
  }






