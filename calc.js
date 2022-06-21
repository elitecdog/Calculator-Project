function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(operator, num1, num2) {
    if(operator == 'add') {
        return add(num1, num2);
    }
    else if(operator == 'subtract') {
        return subtract(num1, num2);
    }
    else if (operator == 'multiply') {
        return multiply(num1, num2);
    }
    else if(operator == 'divide') {
        return divide(num1, num2);
    }
    else {
        return 'Error, non valid operator input';
    }
}
const buttons = document.querySelector(".buttons");
/*Function was originally used for my etch a sketch site to generate the tiles.  I'm reusing it to
save time making my calculator instead of manually making each div and button.*/
function buttonGenerator(rows, cols) {
    buttons.style.setProperty('--grid-rows', rows);
    buttons.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      globalSize = rows*cols;
      let cell = document.createElement("div");
      cell.setAttribute('id',c);
      cell.innerText = (c);
      /*cell.addEventListener('mouseover',colorUpdater);*/
      buttons.appendChild(cell).className = "grid-item";
    };
  };
  buttonGenerator(5,4);
  
document.getElementById('4').innerHTML = '7';
document.getElementById('5').innerHTML = '8';
document.getElementById('6').innerHTML = '9';
document.getElementById('8').innerHTML = '4';
document.getElementById('9').innerHTML = '5';
document.getElementById('10').innerHTML = '6';
document.getElementById('12').innerHTML = '1';
document.getElementById('13').innerHTML = '2';
document.getElementById('14').innerHTML = '3';
document.getElementById('17').innerHTML = '0';
document.getElementById('16').innerHTML = '.';
document.getElementById('18').innerHTML = '=';
document.getElementById('19').innerHTML = '+';
document.getElementById('15').innerHTML = '-';
document.getElementById('11').innerHTML = '*';
document.getElementById('7').innerHTML = '/';
document.getElementById('3').innerHTML = 'Clear';
document.getElementById('0').innerHTML = '';
document.getElementById('1').innerHTML = '';
document.getElementById('2').innerHTML = '';


  
