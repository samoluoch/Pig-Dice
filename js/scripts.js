$(document).ready(function() {
    $("button#bt").click(function(event) {
      event.preventDefault();
      $function rollDice() {
        var dice1 = document.getElementById("dice1");
        var dice2 = document.getElementById("dice2");
        var diceOne = Math.floor(Math.random()*6) + 1;
        var diceTwo = Math.floor(Math.randon()*6) + 1;
        var totalDice = diceOne + diceTwo;
        var Outcome = document.getElementById("outcome");
        dice1.innerHTML = diceOne;
        dice2.innerHTML = diceTwo;
        $("#outcome").append("totalDice");
      };
});
function Player (Player1, Player2) {
  this.player1 = Player 1;
  this.player2 = Player 2;
  var Player1 = newPlayer("#Player1");
  var Player2 = newPlayer("#Player2");
}
});
