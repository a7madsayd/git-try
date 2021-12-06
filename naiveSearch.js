function naiveSearch(str , pattern)
{
    let matches = 0;

    for(let i = 0;i<str.length;i++)
    {
        for(let j = 0;j < pattern.length;j++)
        {
            if(pattern[j] !== str[i+j])
            {
                break;
            }
            else if(j == pattern.length-1){matches++;}
        }
    }
return matches;
}
module.exports = naiveSearch;
