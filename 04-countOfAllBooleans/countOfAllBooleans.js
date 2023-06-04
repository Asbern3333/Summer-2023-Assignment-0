function countOfAllBooleans(arr)
{
    var x=0;
    var i=0;
    
    while(arr.length>x)
    { 
        if(typeof arr[x] === 'boolean')
        {
         
          i++;
        }
        x++;
    }
    return i;
}

module.exports = countOfAllBooleans;
