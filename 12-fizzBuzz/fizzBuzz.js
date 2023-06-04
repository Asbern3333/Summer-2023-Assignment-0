function fizzBuzz(start, end) {
  let x=new Array();
  for(var i=start;i<=end;i++)
  { if(i%3==0&&i%5==0)
      x[i-start]="FizzBuzz";
    else if(i%3==0)
    x[i-start]="Fizz";
    else if(i%5==0)
    x[i-start]="Buzz";
    else 
    x[i-start]=i;
   
  }
  return x;
}


// Do not edit this line;
module.exports = fizzBuzz;
