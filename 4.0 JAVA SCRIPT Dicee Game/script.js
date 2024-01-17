var randomNum1 = Math.floor(Math.random() * 6)+1;
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + randomNum1 + ".png" );
var randomNum2 = Math.floor(Math.random() * 6)+1;
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + randomNum2 + ".png" );
if(randomNum1>randomNum2)
{
    document.querySelector("h1").innerHTML ="player1 win";
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML ="player2 win";
}
else{
    document.querySelector("h1").innerHTML ="match draw";
}


