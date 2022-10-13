/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let newArr = [nums[0]]
    
    for (let i = 1; i < nums.length; i++) {
        newArr[i] =  nums[i] + newArr[i-1]
    }

    return newArr
};