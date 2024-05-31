let screen = document.getElementById('calculator-screen');
let screenValue = screen.textContent;

function inputDigit(digit) {
  screenValue = screenValue === '0' ? digit: screenValue + digit;
  updateScreenDisplay ();
}

function inputDecimal() {
  if (! screenValue.include('.')) {
    screenValue = screenValue + '.';

  }
  updateScreenDisplay();
}

function toggleSign() {
screenValue = screenValue * -1;
updateScreenDisplay();
}

function clearEntry() {
  screen.textContent = screenValue.slice(0, -1);
  if (screenValue.length === 0) {
    screenValue= '0';
  }
  updateScreenDisplay();
}

function allClear() {
  screenValue = '0';
  updateScreenDisplay();
}

function handleOperator(currentoperator) {
  console.log("operator: ", currentoperator)
}
function updateScreenDisplay(){
  screen.textContent = screenValue;
}