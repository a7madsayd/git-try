function sayHi()
{
    return 'Hi';
}
function fibonanci(n)
{
    if(n<=2) return 1;
    return fibonanci(n-1)+fibonanci(n-2);
}

function factorial(n)
{
    if(n === 0) return 1;
    if(n === 1) return 1;

    return n * factorial(n-1);
}


console.log(`the value of index 4 in fibonanci series is ${fibonanci(4)}`);
console.log(`the factorial of  4  is ${factorial(4)}`);
console.log(sayHi());