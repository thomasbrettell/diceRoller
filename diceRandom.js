var dice1Number = Math.floor(Math.random() * 6) + 1;
var dice2Number = Math.floor(Math.random() * 6) + 1;

document.querySelector("img.img1").setAttribute("src", "images/dice" +dice1Number+".png");
document.querySelector("img.img2").setAttribute("src", "images/dice" +dice2Number+".png");

if(dice1Number > dice2Number){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if(dice2Number > dice1Number) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "🚩 It's a tie! 🚩";
}