let displayValue = "";
let resultDisplayed = false;

function appendToDisplay(value) {
  if (resultDisplayed) {
    displayValue = "";
    resultDisplayed = false;
  }
  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function operate() {
  try {
    const result = evaluateExpression(displayValue);
    displayValue = result.toString();
    resultDisplayed = true;
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function evaluateExpression(expression) {
  const numbers = expression.split(/[-+*/]/).map(Number);
  const operators = expression
    .split("")
    .filter((c) => c === "+" || c === "-" || c === "*" || c === "/");
  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const number = numbers[i + 1];

    switch (operator) {
      case "+":
        result += number;
        break;

      case "-":
        result -= number;
        break;

      case "*":
        result *= number;
        break;

      case "/":
        if (number === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        result /= number;
        break;

      default:
        throw new Error("Invalid operator: " + operator);
    }
  }

  return result;
}

// function display(num){
//     outputScreen.value += num;
// }

// //

// //

// function calculate(){
//     try{
//         outputScreen.value = eval(outputScreen.value);
//     }
//     catch(err){
//         alert("Invalid!");
//     }
// }

// function clearr(){
//     outputScreen.value = "";
// }

// function deletee(){
//     outputScreen.value = outputScreen.value.slice(0, -1);
// }

// function percentage(){
//     outputScreen.value = outputScreen.value/100;
// }
