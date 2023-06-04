function countOfAllNumbersSmallerThanTarget(nums, target) {
  let y=0;
  for(var i=0;i<nums.length;i++)
  {
      if(nums[i]<target)
      y++;
      
  }
  return y;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
