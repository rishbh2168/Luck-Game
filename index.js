//alert("working!");
var randomNumber1 = Math.floor(Math.random()*6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = randomDiceImage; //images/dice1.png - images/dice1.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Rishabh win :)";
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Rishi win :)";

}

else{
    document.querySelector("h1").innerHTML = "Try Again ;)";

}
