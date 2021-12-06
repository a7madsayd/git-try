function binarySearch(arr , value)
{
let first = 0;
let last = arr.length-1;
let theMiddle = Math.floor((last+first)/2);
while(first <= last)
{
    
    if(arr[theMiddle] == value){return theMiddle;}
    else if(arr[theMiddle] > value)
    {
        last = theMiddle - 1;
    }
    else if(arr[theMiddle] < value)
    {
        first = theMiddle +1;
    }
     theMiddle = Math.floor((last+first)/2);
}
return -1;
}

module.exports = binarySearch;