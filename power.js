function power(number , p)
{
    if(p == 0) return 1;
    return number * power(number,p-1);
}
module.exports = power;