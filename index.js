//math.random returns number between 0 and 0.999... This is multiplied by 6 +1 we get 6.999..Math.floor rounds down to nearest int
function randomNumber() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber1);
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber2);

  document
    .querySelector(".img1")
    .setAttribute("src", `static/images/dice${randomNumber1}.png`);

  document
    .querySelector(".img2")
    .setAttribute("src", `static/images/dice${randomNumber2}.png`);
    
    if (randomNumber1 === randomNumber2) {
      document.querySelector("h1").innerHTML = "It's a tie!";
    }
    else if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    else {
      document.querySelector("h1").innerHTML = "Player 2 wins!";
    }

}


