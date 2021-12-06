const fibonanci = require("./fibonanci");
const factorial = require("./factorial");
const binarySearch = require("./binarySearch");
const naiveSearch = require("./naiveSearch");
const power = require("./power");

function sayHi() {
  return "Hi Geek!";

}

function sayGoodBye() {
  return "Good Bye!";
}

console.log(`binary search value is ${binarySearch([1,2,3,4,5,6,7,8,9,10,11,12] , 12)}`)
console.log(`naiveSearch value is ${naiveSearch("ahmed sayed mohammed" , "ed")}`)
console.log("test rebase");
console.log("feature");
console.log("app start....");
console.log(sayHi());

console.log('the results is : ');


console.log(`the value of index 4 in fibonanci series is ${fibonanci(4)}`);
console.log(`the factorial of  4  is ${factorial(4)}`);
console.log(`the power 2 of  4  is ${power(4 ,2)}`);
console.log(`the power 5 of  5  is ${power(5 ,5)}`);

console.log(sayGoodBye());

