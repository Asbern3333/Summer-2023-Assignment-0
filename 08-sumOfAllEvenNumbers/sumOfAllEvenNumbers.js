function sumOfAllEvenNumbers(nums) {
  let x1=0;
  for(var i=0;i<nums.length;i++)
  {
      if(nums[i]%2==0)
      x1++;
  }
  console.log(x1);
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
