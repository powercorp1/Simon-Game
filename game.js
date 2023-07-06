var buttonColors=["red","blue","green","yellow"];

var gamePattern=[];
var userClickedPattern=[];

var started =false;
var level=0;
$(document).keypress(function (){
    if(!started){
        $("#level-title").text("level "+level);
        newSequence();
        started=true;
    }
});

$(".btn").click(function(){
    var rbutton=$(this).attr("id");
    userClickedPattern.push(rbutton);
    $("#"+rbutton).addClass("pressed");
    setTimeout(function(){
    $("#"+rbutton).removeClass("pressed");
    },100);
    playSound(rbutton);
    checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
    {
        if(userClickedPattern.length==gamePattern.length)
        {
            setTimeout(function(){
                newSequence();
            },1000);
        }
    }
    else{

        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        startOver();

    }
}

function newSequence() {
    userClickedPattern=[];
    level++;
    $("#level-title").text("level "+level);

    var rand= Math.floor(Math.random()*4);
    var col=  buttonColors[rand];
    gamePattern.push(col);

    $("#" + col ).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);


}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  
  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  

