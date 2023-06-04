function countOfAllBooleansAndStrings(arr) {
  var x=0;
  var i=0;
    
    while(arr.length>x)
    { 
        if(typeof arr[x] === 'string'||typeof arr[x] === 'boolean')//||arr[x] instanceof String
        {
         
          i++;
        }
        

        x++;
    }
    return i;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;