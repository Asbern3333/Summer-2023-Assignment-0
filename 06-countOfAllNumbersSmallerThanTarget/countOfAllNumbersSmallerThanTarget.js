function countOfAllNumbersSmallerThanTarget(nums, target) {
  var y=0;
  for(var i=0;i<nums.length;i++)
  {
      if(nums[i]<target)
      y++;
      
  }
  console.log(y);
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
