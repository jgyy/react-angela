let numberArray = [];
document.querySelectorAll("img").forEach((img) => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const randomImageSource = "images/dice" + randomNumber + ".png";
    img.setAttribute("src", randomImageSource);
    numberArray.push(randomNumber);
});

if (numberArray[0] > numberArray[1]) document.querySelector("h1").innerHTML = "Player 1 Wins!";
else if (numberArray[0] < numberArray[1]) document.querySelector("h1").innerHTML = "Player 2 Wins!";
else document.querySelector("h1").innerHTML = "Draw!";
