function diceGame(){
    var player1,player2;
    player1=Math.floor(Math.random()*6)+1;
    player2=Math.floor(Math.random()*6)+1;
    var image1="images/dice"+player1+".png";
    var image2="images/dice"+player2+".png";
    if (player1>player2){
        document.getElementById("winnerMessage").innerHTML="Player 1 wins";
    }
    if (player1<player2){
        document.getElementById("winnerMessage").innerHTML="Player 2 wins ";
        }
    if(player1==player2){
        document.getElementById("winnerMessage").innerHTML="We got a draw";
    }
    document.getElementById("image1").src=(image1);
    document.getElementById("image2").src=(image2);
    document.getElementById("playAgain").innerHTML="Play again";
}
