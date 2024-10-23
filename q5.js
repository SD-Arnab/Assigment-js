
function calculateQuotientAndRemainder(num1, num2) {

  let quotient = Math.floor(num1 / num2);
  let remainder = num1 % num2;
  
  console.log(`For ${num1} divided by ${num2}:`);
  console.log(`Quotient: ${quotient}`);
  console.log(`Remainder: ${remainder}`);
}
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));

calculateQuotientAndRemainder(num1, num2);
