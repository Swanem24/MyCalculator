var firstNumber = document.getElementById("fnum");
var SecondNumber = document.getElementById("Snum");

var parsed1 = parseInt(firstNumber);
var parsed2 = parseInt(SecondNumber);



function addition() {
    var calculatedAnswer = parsed1 + parsed2;
    console.log(calculatedAnswer);
}

function subtraction() {
    var calculatedAnswer = parsed1 - parsed2;
    console.log(calculatedAnswer);
}