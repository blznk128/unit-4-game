generateNumbers();
    var wins = 0;
    $("#wins").text(wins);
    var losses = 0;
    $("#losses").text(losses);

    function crystalClick(crystalValue) {
        score = crystalValue + score;
        $("#score").text("Your score: " + score);
        if (score === target) {
            alert("You win!");
            wins++;
            $("#wins").text(wins);
            generateNumbers();      
        }
        if (score > target) {
            alert("You lost =(");
            losses++;
            $("#losses").text(losses);
            generateNumbers();
        }
    };

    function generateNumbers() {
        target = Math.floor((Math.random() * 100) +19);
        $("#target").text(target);
        crystal1 = Math.floor((Math.random() * 11) +1);
        crystal2 = Math.floor((Math.random() * 11) +1);
        crystal3 = Math.floor((Math.random() * 11) +1);
        crystal4 = Math.floor((Math.random() * 11) +1);
        score = 0;
        $("#score").text("Your score: " + score);
    }

    $(".crystal").on("click", function() {
        crystalClick(crystal1);
        
    })
    $(".crystal2").on("click", function () {
        crystalClick(crystal2);
    })

    $(".crystal3").on("click", function (){
        crystalClick(crystal3)
    })

    $(".crystal4").on("click", function (){
        crystalClick(crystal4)
    })
    

