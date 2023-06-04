class MySolution
{
    constructor()
    {
        this.flag = false; // this is optional to use;
    }

    binarySearch(nums, target)
    {
        let mid = Math.floor(nums.length / 2);

        return nums[mid] === target ? true :
                nums[mid] > target ? this.binarySearch(nums.slice(0, mid), target) :
                nums[mid] < target ? this.binarySearch(nums.slice(mid + 1, nums.length), target) : false;
    }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;