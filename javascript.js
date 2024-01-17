function rollDice() {
    var nmbr = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[0].setAttribute("src", "./dicee_image/images/dice" + nmbr + ".png");

    var nmbr1 = Math.floor(Math.random() * 6) + 1;
    document.querySelectorAll("img")[1].setAttribute("src", "./dicee_image/images/dice" + nmbr1 + ".png");

    if ( nmbr>nmbr1){
        document.querySelector("h1").innerHTML="🚩 player 1 wins !! ";
    }else if (nmbr===nmbr1){
        document.querySelector("h1").innerHTML="draw ";
    }else {
        document.querySelector("h1").innerHTML="playerr 2 wins 🚩  !!";
    }
}