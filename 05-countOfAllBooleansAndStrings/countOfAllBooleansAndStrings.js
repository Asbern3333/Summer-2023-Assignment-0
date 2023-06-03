function countOfAllBooleansAndStrings(arr) {
  var x=0;
  var i=0;
    
    while(arr.length>x)
    { 
        if(arr[x]==false||arr[x]==true)
        {
         if(!Number.isInteger(arr[x]))
          i++;
        }
        else if (arr[x]=="true"||arr[x]=="false")
        i++;
        x++;
    }
    return i;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;