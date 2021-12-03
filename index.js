const fibonanci = require("./fibonanci");
const factorial = require("./factorial");
const power = require("./power");

function sayHi() {
  return "Hi Gang!";
}

function sayGoodBye() {
  return "Good Bye!";
}

console.log("app start....");
console.log(sayHi());
console.log(`the value of index 4 in fibonanci series is ${fibonanci(4)}`);
console.log(`the factorial of  4  is ${factorial(4)}`);
console.log(`the power 2 of  4  is ${power(4)}`);
console.log(sayGoodBye());
