//global variables
var firstNumber = true;
var secondNumber = false;
var operator = false;


//set up the array listeners for button on the page
function setupListeners() {

  //get the elements so we can set the eventlisteners on them

  //seclect all the number buttons on the page

  //select all the numbers 1-9
  var numberButtons = document.getElementsByClassName('buttonNum');
  //select all the operators
  var operatorButtons = document.getElementsByClassName('operator');
  //selct the clear button
  var clearButton = document.getElementsByClassName('buttonClear');
  //select the clear button
  var equalsButton = document.getElementsByClassName('equals')

  setNumberButtonListeners(numberButtons);
  setOperatorButtonListeners(operatorButtons);
  clearButton[0].addEventListener('click',clearCalculator);
  equalsButton[0].addEventListener("click", getAnswer);
}

//equals Button
function getAnswer() {
  var calculatorScreen = document.getElementById('screen');
  var answer = doCalculation();
  calculatorScreen.innerHTML = answer;
}

// calculate answer
function doCalculation() {

  switch (operator) {
    case "+":
      return (firstNumber + secondNumber).toFixed(2);
      break;
    case "-":
      return (firstNumber - secondNumber).toFixed(2);
        break;
    case "*":
      return (firstNumber * secondNumber).toFixed(2);
    case "/":
      return (firstNumber / secondNumber).toFixed(2);
    default:
    return "err"

  }
}

//clear button
function clearCalculator() {
  var calculatorScreen = document.getElementById('screen');
  calculatorScreen.innerHTML = "Sparta Calculator"
  firstNumber = true;
  secondNumber = false;
  operator = false;
}

//getting the listeners for the number button
function setNumberButtonListeners(buttons) {
var calculatorScreen = document.getElementById('screen');
//create the loop to get the listener on each button
for (var i=0; i<buttons.length; i++) {
      buttons[i].addEventListener('click',function(event){
        if (firstNumber === true) {
          calculatorScreen.innerHTML = this.innerHTML
          firstNumber = parseInt(this.innerHTML);
          operator = true;

        } else if (secondNumber === true) {
          secondNumber = parseInt(this.innerHTML);
          calculatorScreen.innerHTML = this.innerHTML;

        }
    })
  }
}
//getting the listeners for the operator
function setOperatorButtonListeners(operators) {
  var calculatorScreen = document.getElementById('screen')
  for (j=0; j<operators.length;j++){
      operators[j].addEventListener('click', function(event){
      if (operator === true){
        calculatorScreen.innerHTML = this.innerHTML;
        operator = this.innerHTML;
        secondNumber = true;
        
      }
    })
  }
}


setupListeners();
