function countOfAllIndexMatchingNumbers(nums) {
  let x1=0;
  for(var i=0;i<nums.length;i++)
  {
      if(i==nums[i])
      x1++;
  }
  console.log(x1);
}


// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
