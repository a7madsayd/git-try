const fibonanci = require("./fibonanci");
const factorial = require("./factorial");
const power = require("./power");

function sayHi() {
  return "Hi Geek!";

}

function sayGoodBye() {
  return "Good Bye!";
}
console.log("test rebase");

console.log("app start....");
console.log(sayHi());

console.log('the results is : ');


console.log(`the value of index 4 in fibonanci series is ${fibonanci(4)}`);
console.log(`the factorial of  4  is ${factorial(4)}`);
console.log(`the power 2 of  4  is ${power(4 ,2)}`);
console.log(`the power 5 of  5  is ${power(5 ,5)}`);

console.log(sayGoodBye());

