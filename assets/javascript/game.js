var random = "";
random = Math.ceil((Math.random() * 100)) + 19;
    console.log(random);

$("#hit").text(random);

var userScore = 0;
var crystal1 = Math.floor(Math.random()*11+1);
var crystal2 = Math.floor(Math.random()*11+1);
var crystal3 = Math.floor(Math.random()*11+1);
var crystal4 = Math.floor(Math.random()*11+1);
var wins = 0;
var losses = 0;
function restart() {
    random = Math.floor(Math.random()*101+19);
      console.log(random)
    $("#hit").text(random);
    crystal1= Math.floor(Math.random()*11+1);
    crystal2= Math.floor(Math.random()*11+1);
    crystal3= Math.floor(Math.random()*11+1);
    crystal4= Math.floor(Math.random()*11+1);
    userScore= 0;
    $("#score").text(userScore);
    } 

$(".crystal").on("click", function() {
    userScore = userScore + crystal1;
        console.log(userScore);
    $("#score").text("Your Score: " + userScore)


    if (userScore === random) {
        alert("you win");
        $("#wins").text(wins+=1);
        random = Math.ceil((Math.random() * 100)) + 19;
        $("#hit").text(random);
        userScore = 0
        $("#score").text("Your Score: " + userScore);
        restart();
        
        
    }
    if (userScore > random) {
        alert("lose");
        $("#losses").text(losses+=1);
        random = Math.ceil((Math.random() * 100)) + 19;
        $("#hit").text(random);
        userScore = 0;
        $("#score").text("Your Score: " + userScore);
        restart();
    }
});

$(".crystal2").on("click", function() {
    userScore = userScore + crystal2;
        console.log(userScore);
    $("#score").text("Your Score: " + userScore)


    if (userScore === random) {
        alert("you win");
        $("#wins").text(wins+=1);
        random = Math.ceil((Math.random() * 100)) + 19;
        $("#hit").text(random);
        userScore = 0
        $("#score").text("Your Score: " + userScore);
        restart();
        
        
    }
    if (userScore > random) {
        alert("lose");
        $("#losses").text(losses+=1);
        random = Math.ceil((Math.random() * 100)) + 19;
        $("#hit").text(random);
        userScore = 0;
        $("#score").text("Your Score: " + userScore);
        restart();
    }
});

$(".crystal3").on("click", function() {
    userScore = userScore + crystal3;
        console.log(userScore);
    $("#score").text("Your Score: " + userScore)


    if (userScore === random) {
        alert("you win");
        $("#wins").text(wins+=1);
        random = Math.ceil((Math.random() * 100)) + 19;
        $("#hit").text(random);
        userScore = 0
        $("#score").text("Your Score: " + userScore);
        restart();
        
        
    }
    if (userScore > random) {
        alert("lose");
        $("#losses").text(losses+=1);
        random = Math.ceil((Math.random() * 100)) + 19;
        $("#hit").text(random);
        userScore = 0;
        $("#score").text("Your Score: " + userScore);
        restart();
    }
});

$(".crystal4").on("click", function() {
    userScore = userScore + crystal4;
        console.log(userScore);
    $("#score").text("Your Score: " + userScore)


    if (userScore === random) {
        alert("you win");
        $("#wins").text(wins+=1);
        random = Math.ceil((Math.random() * 100)) + 19;
        $("#hit").text(random);
        userScore = 0
        $("#score").text("Your Score: " + userScore);
        restart();
        
        
    }
    if (userScore > random) {
        alert("lose");
        $("#losses").text(losses+=1);
        random = Math.ceil((Math.random() * 100)) + 19;
        $("#hit").text(random);
        userScore = 0;
        $("#score").text("Your Score: " + userScore);
        restart();
    }
});
    

