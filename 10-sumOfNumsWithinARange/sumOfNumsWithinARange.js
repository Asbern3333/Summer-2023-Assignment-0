function sumOfNumsWithinARange(nums, start, end) {
  let x1=0;
  for(var i=0;i<nums.length;i++)
  {
      if(nums[i]>=start&&nums[i]<=end)
      {x1++;
      
      }
  }
  console.log(x1);
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
