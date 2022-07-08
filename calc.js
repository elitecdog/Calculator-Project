function add(num1, num2) {
    display.innerHTML = num1 + num2;
}

function subtract(num1, num2) {
    let string = num1-num2;
    display.innerHTML = string;
}

function multiply(num1, num2) {
    display.innerHTML = num1*num2;
}

function divide(num1, num2) {
    display.innerHTML = num1/num2;
}

let displayValue = "";
let num1 = 0;
let num2 = 0;
let buttonPress = '';
let operatorType = '';
let num2Storage = '';
function operate() {
    let number1 = parseFloat(num1); // At this time num1 and num2 will be strings so we parse them to numbers for use.
    let number2 = parseFloat(num2);
    if(operatorType == 'add') {
        add(number1, number2);
    }
    else if(operatorType == 'subtract') {
        subtract(number1, number2);
    }
    else if (operatorType == 'multiply') {
       multiply(number1, number2);
    }
    else if(operatorType == 'divide') {
        divide(number1, number2);
    }
    else {
        return 'Error, non valid operator input';
    }
}
function operate2() {
    let number1 = parseFloat(num1); // At this time num1 and num2 will be strings so we parse them to numbers for use.
    let number2 = parseFloat(num2);
    if(operatorType == 'add') {
        num1 = add(number1, number2);
    }
    else if(operatorType == 'subtract') {
        num1 = subtract(number1, number2);
    }
    else if (operatorType == 'multiply') {
        num1= multiply(number1, number2);
    }
    else if(operatorType == 'divide') {
        num1 = divide(number1, number2);
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
    if(buttonPress == '+' || buttonPress == '-' || buttonPress == '*' || buttonPress == '/') {
        for(let i=0; i<displayValue.length; i++) {
            if(displayValue.charAt(i) == '+' || displayValue.charAt(i) == '-' || displayValue.charAt(i) == '*' || displayValue.charAt(i) == '/') {
                operatorType = displayValue.charAt(displayValue.length-1);
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
    displayValue+= buttonPress;
    num2+= buttonPress;
    display.innerHTML = displayValue;
}
function clearDisplay() {
    displayValue = '';
    display.innerHTML = displayValue;
}
const buttons = document.querySelector(".buttons");
/*Function was originally used for my etch a sketch site to generate the tiles.  I'm reusing it to
save time making my calculator instead of manually making each div and button.*/
/*function buttonGenerator(rows, cols) {
    buttons.style.setProperty('--grid-rows', rows);
    buttons.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      globalSize = rows*cols;
      let cell = document.createElement("div");
      cell.setAttribute('id',c);
      cell.innerText = (c);
      /*cell.addEventListener('mouseover',colorUpdater);
      buttons.appendChild(cell).className = "grid-item";
    };
  };
  buttonGenerator(5,4);
  */
/*document.getElementById('(').addEventListener('click', addDisplay);
document.getElementById(')').addEventListener('click', addDisplay);
document.getElementById('del').addEventListener('click', addDisplay);
document.getElementById('clear').addEventListener('click', addDisplay);
document.getElementById('7').addEventListener('click', addDisplay);
document.getElementById('8').addEventListener('click', addDisplay);
document.getElementById('9').addEventListener('click', addDisplay);
document.getElementById('/').addEventListener('click', addDisplay);
document.getElementById('4').addEventListener('click', addDisplay);
document.getElementById('5').addEventListener('click', addDisplay);
document.getElementById('6').addEventListener('click', addDisplay);
document.getElementById('*').addEventListener('click', addDisplay);
document.getElementById('1').addEventListener('click', addDisplay);
document.getElementById('2').addEventListener('click', addDisplay);
document.getElementById('3').addEventListener('click', addDisplay);
document.getElementById('-').addEventListener('click', addDisplay);
document.getElementById('.').addEventListener('click', addDisplay);
document.getElementById('0').addEventListener('click', addDisplay);
document.getElementById('=').addEventListener('click', addDisplay);
document.getElementById('+').addEventListener('click', addDisplay);
*/

document.getElementById('clear').addEventListener('click', function() {buttonPress = "clear"; clearDisplay()});
document.getElementById('7').addEventListener('click', function() {buttonPress = "7";addDisplay()});
document.getElementById('8').addEventListener('click', function() {buttonPress = "8";addDisplay()});
document.getElementById('9').addEventListener('click', function() {buttonPress = "9";addDisplay()});
document.getElementById('/').addEventListener('click', function() {buttonPress = "/";operatorType='divide'; addDisplay();});
document.getElementById('4').addEventListener('click', function() {buttonPress = "4";addDisplay()});
document.getElementById('5').addEventListener('click', function() {buttonPress = "5";addDisplay()});
document.getElementById('6').addEventListener('click', function() {buttonPress = "6";addDisplay()});
document.getElementById('*').addEventListener('click', function() {buttonPress = "*";operatorType='multiply';addDisplay()});
document.getElementById('1').addEventListener('click', function() {buttonPress = "1";addDisplay()});
document.getElementById('2').addEventListener('click', function() {buttonPress = "2";addDisplay()});
document.getElementById('3').addEventListener('click', function() {buttonPress = "3";addDisplay()});
document.getElementById('-').addEventListener('click', function() {buttonPress = "-";operatorType='subtract';  addDisplay()});
document.getElementById('.').addEventListener('click', function() {buttonPress = ".";addDisplay()});
document.getElementById('0').addEventListener('click', function() {buttonPress = "0";addDisplay()});
document.getElementById('=').addEventListener('click', function() {buttonPress = "="; operate();});
document.getElementById('+').addEventListener('click', function() {buttonPress = "+"; operatorType='add'; addDisplay()});


  
