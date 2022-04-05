const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
} 

const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
  return parseInt(userInput.value);
}

function createAandWriteOutput(operator, resultBeforeCalc, calcNumber){
  const calcDiscription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDiscription);

}

function add(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAandWriteOutput('+', initialResult, enteredNumber)
      
}

function subtract(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAandWriteOutput('-', initialResult, enteredNumber)
      
}

function multiply(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAandWriteOutput('*', initialResult, enteredNumber)
      
}

function divide(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAandWriteOutput('/', initialResult, enteredNumber)
      
}



// function subtract(){
//   const calcDiscription = `${userInput.value} - ${currentResult}`;
//   currentResult = parseInt(userInput.value) - currentResult;
//   outputResult(currentResult, calcDiscription);

// }



// function multiply(){
//   const calcDiscription = `${currentForm} * ${userInput.value}`;
//   currentForm = currentForm * parseInt(userInput.value);
//   outputResult(currentForm, calcDiscription);

// }
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


