$(document).ready(function() {
    $("button").click(function(event) {
      event.preventDefault();
      $function rollDice() {
        var dice1 = document.getElementById("dice1");
        var dice2 = document.getElementById("dice2");
        var diceOne = Math.floor(Math.random()*6) + 1;
        var diceTwo = Math.floor(Math.randon()*6) + 1;
        var Outcome = document.getElementById("outcome");
        var totalDice = diceOne + diceTwo;
        dice1.innerHTML = diceOne;
        dice2.innerHTML = diceTwo;


      });
});
});
