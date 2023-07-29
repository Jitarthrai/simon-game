//play sound function:
function playSound(name){
    switch (name) {

        case yellow :
            var yellowAudio = new Audio("./sounds/yellow.mp3")    ;
            yellowAudio.play();

            break;
        
        case 'blue' :
            var blueAudio = new Audio("./sounds/blue.mp3")    ;
            blueAudio.play();

            break;

        case 'red':
                var redAudio = new Audio("./sounds/red.mp3")    ;
                redAudio.play(); 
                
                break;
        
    }
    if (name = "green"){
        var greenAudio = new Audio("./sounds/green.mp3");
            greenAudio.play();
    }
    
}



// random tile generate
var computerSequence = [];
var levelNumber = 0;
var userSequence;

function randomButtonGenerator(){
    levelNumber++;
    userSequence = [];
var randomNumber = Math.floor(Math.random()*4);  //random number 0-3
var randomButton = document.querySelectorAll(".btn")[randomNumber];

// system slected button animation
$(randomButton).css('visibility', 'hidden');
setTimeout(function(){
    $(randomButton).css('visibility', 'visible');
},400);

var newButtonAdd = randomButton.id;
playSound(newButtonAdd);
computerSequence.push(newButtonAdd);


}



// add pressed animation


var userInputButton



    


   

    //game starts//
    var started = false;
    $(document).keypress(function(){
        if (!started){
         randomButtonGenerator();
        $("#level-title").text("Level "+ levelNumber)
        started = true;
        }
       
})


$(".btn").click(function(){
    userInputButton = this;
    $(userInputButton).addClass("pressed");

    setTimeout(function(){
        $(userInputButton).removeClass("pressed")
    },400);
    var userInputButtonId = userInputButton.id;
    playSound(userInputButtonId);
    userSequence.push(userInputButtonId);
    checkAnswer(userSequence.length-1);

})



function checkAnswer(i){
    if (userSequence[i] === computerSequence[i]){
        if(userSequence.length === computerSequence.length){
            setTimeout(function(){
                 randomButtonGenerator();
            $("#level-title").text("Level "+ levelNumber),1000
            })
           

        }
    }
    else {
        var wrongSound = new Audio("./sounds/wrong.mp3")
        wrongSound.play();
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }

}
