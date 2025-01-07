
function calculate(num1, num2, operation) {
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "Error: Division by zero is not allowed.";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operation.";
    }
  }
  
  
  let number1 = parseFloat(prompt("Enter the first number:")); 
  let number2 = parseFloat(prompt("Enter the second number:")); 
  let operation = prompt("Enter the operation (+, -, *, /):"); 
  
  
  let result = calculate(number1, number2, operation);
  
  
  console.log(`Result: ${result}`);
  alert(`Result: ${result}`);
  