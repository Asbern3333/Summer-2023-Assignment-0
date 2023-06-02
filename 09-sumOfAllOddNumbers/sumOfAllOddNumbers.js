function sumOfAllOddNumbers(nums) {
  let x1=0;
  for(var i=0;i<nums.length;i++)
  {
      if(nums[i]%2==1)
      x1++;
  }
  console.log(x1);
}


// Do not edit this line;
module.exports = sumOfAllOddNumbers;
