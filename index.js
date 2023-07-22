var fNum = document.getElementById("firstnum");
var sNum = document.getElementById("secondnum");
var answer = document.getElementById("answer");

var calculatedAnswer = 0;

function addition() {
    calculatedAnswer = parseInt(fNum.value) + parseInt(sNum.value);
    console.log(calculatedAnswer);
    answer.innerText = calculatedAnswer;
}

function subtraction() {
    calculatedAnswer = parseInt(fNum.value) - parseInt(sNum.value);
    console.log(calculatedAnswer);
    answer.innerText = calculatedAnswer;
}

function multiply() {
    calculatedAnswer = parseInt(fNum.value) * parseInt(sNum.value);
    console.log(calculatedAnswer);
    answer.innerText = calculatedAnswer;
}

function divide() {
    calculatedAnswer = parseInt(fNum.value) / parseInt(sNum.value);
    console.log(calculatedAnswer);
    answer.innerText = calculatedAnswer;
}