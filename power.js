function power(number , power)
{
    if(power == 0) return 1;
    return number * power(power-1);
}
module.exports = power;