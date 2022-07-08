function add(num1, num2) {
    display.innerHTML = num1 + num2;
    displayValue = display.innerHTML;
}

function subtract(num1, num2) {
    display.innerHTML = num1 - num2;
    displayValue = display.innerHTML;
}

function multiply(num1, num2) {
    display.innerHTML = num1*num2;
    displayValue = display.innerHTML;
}

function divide(num1, num2) {
    display.innerHTML = num1/num2;
    displayValue = display.innerHTML;
}

let displayValue = "";
let num1 = 0;
let num2 = 0;
let buttonPress = '';
let operatorType = '';
let num2Storage = '';
let operatorType2 = '';
function operate() {
    let number1 = parseFloat(num1); // At this time num1 and num2 will be strings so we parse them to numbers for use.
    let number2 = parseFloat(num2);
    if(operatorType == '+') {
        add(number1, number2);
    }
    else if(operatorType == '-') {
        subtract(number1, number2);
    }
    else if (operatorType == '*') {
       multiply(number1, number2);
    }
    else if(operatorType == '/') {
        divide(number1, number2);
    }
    else {
        return 'Error, non valid operator input';
    }
}
function operate2() {
    let number1 = parseFloat(num1); // At this time num1 and num2 will be strings so we parse them to numbers for use.
    let number2 = parseFloat(num2);
    if(operatorType == '+') {
        add(number1, number2);
        num1 = display.innerHTML;
        operatorType = operatorType2;
        displayValue += operatorType;
        display.innerHTML = displayValue;
        num2 = '';
    }
    else if(operatorType == '-') {
        subtract(number1, number2);
        num1 = display.innerHTML;
        operatorType = operatorType2;
        displayValue += operatorType;
        display.innerHTML = displayValue;
        num2 = '';
    }
    else if (operatorType == '*') {
        multiply(number1, number2);
        num1 = display.innerHTML;
        operatorType = operatorType2;
        displayValue += operatorType;
        display.innerHTML = displayValue;
        num2 = '';
    }
    else if(operatorType == '/') {
        divide(number1, number2);
        num1 = display.innerHTML;
        operatorType = operatorType2;
        displayValue += operatorType;
        display.innerHTML = displayValue;
        num2 = '';
    }
    else {
        return 'Error, non valid operator input';
    }
}
const display = document.querySelector(".displayItems");
function setDisplay(text) {
    displayValue = text;
    display.innerHTML = displayValue;
}
function addDisplay(){
        if(buttonPress == '+' || buttonPress == '-' || buttonPress == '*' || buttonPress == '/'){
            if(buttonPress == '-' && num2.length == 0) {
                displayValue+=buttonPress;
                display.innerHTML = displayValue;
                num2+=buttonPress;
                operatorType = displayValue.charAt(displayValue.length-2);
                return;
            }
            else {
        for(let i=1; i<displayValue.length; i++) {
            if(displayValue.charAt(i) == '+' || displayValue.charAt(i) == '-' || displayValue.charAt(i) == '*' || displayValue.charAt(i) == '/') {
                operatorType2 = operatorType;
                operatorType = displayValue.charAt(i);
                operate2();
                return;
            } 
        }
        num1 = displayValue;                     //Stores first #
        num2 = '';                               //Clears second # location                   //Clears 
        displayValue += buttonPress;
        display.innerHTML = displayValue;
        return;
    }
}
    displayValue+= buttonPress;
    num2+= buttonPress;
    display.innerHTML = displayValue;
}
function clearDisplay() {
    displayValue = '';
    display.innerHTML = displayValue;
}
const buttons = document.querySelector(".buttons");

document.getElementById('clear').addEventListener('click', function() {buttonPress = "clear"; clearDisplay()});
document.getElementById('7').addEventListener('click', function() {buttonPress = "7";addDisplay()});
document.getElementById('8').addEventListener('click', function() {buttonPress = "8";addDisplay()});
document.getElementById('9').addEventListener('click', function() {buttonPress = "9";addDisplay()});
document.getElementById('/').addEventListener('click', function() {buttonPress = "/";operatorType='/'; addDisplay();});
document.getElementById('4').addEventListener('click', function() {buttonPress = "4";addDisplay()});
document.getElementById('5').addEventListener('click', function() {buttonPress = "5";addDisplay()});
document.getElementById('6').addEventListener('click', function() {buttonPress = "6";addDisplay()});
document.getElementById('*').addEventListener('click', function() {buttonPress = "*";operatorType='*';addDisplay()});
document.getElementById('1').addEventListener('click', function() {buttonPress = "1";addDisplay()});
document.getElementById('2').addEventListener('click', function() {buttonPress = "2";addDisplay()});
document.getElementById('3').addEventListener('click', function() {buttonPress = "3";addDisplay()});
document.getElementById('-').addEventListener('click', function() {buttonPress = "-";operatorType = '-';  addDisplay()});
document.getElementById('.').addEventListener('click', function() {buttonPress = ".";addDisplay()});
document.getElementById('0').addEventListener('click', function() {buttonPress = "0";addDisplay()});
document.getElementById('=').addEventListener('click', function() {buttonPress = "="; operate();});
document.getElementById('+').addEventListener('click', function() {buttonPress = "+"; operatorType='+'; addDisplay()});


  
