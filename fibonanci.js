 function fibonanci(n)
{
    if(n<=2) return 1;
    return fibonanci(n-1)+fibonanci(n-2);
}

module.exports = fibonanci;