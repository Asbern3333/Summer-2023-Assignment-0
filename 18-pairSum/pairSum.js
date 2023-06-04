function pairSum(nums, target)
{
    if(nums.length <= 1) throw "must have at least 2 numbers";

    let pair = false;
    nums.reduce((pairSums, item, index) =>
    {
        for(let i = 0; i < nums.length; i++)
        {
            if(i !== index && item + nums[i] === target) pair = true;
        }
    });
    return pair;
}


// Do not edit this line;
module.exports = pairSum;