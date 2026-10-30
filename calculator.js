function calc(a, b, operator) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? "Cannot divide by 0" : a / b;
    default:  return "Invalid operator";
  }
}
