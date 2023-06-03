function countOfAllBooleans(arr)
{
    var x=0;
    var i=0;
    
    while(arr.length>x)
    { 
        if(arr[x]==false||arr[x]==true)
        {
         if(!Number.isInteger(arr[x]))
          i++;
        }
        x++;
    }
    return i;
}

module.exports = countOfAllBooleans;
