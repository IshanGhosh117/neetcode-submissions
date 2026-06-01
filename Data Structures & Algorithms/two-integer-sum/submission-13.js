class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i=0; i < nums.length; i++) {
            for (let j=0; j < i; j++) {
                const finalSum = nums[i] + nums[j] === target;
                if (finalSum) {
                    let finalIndices = new Array();
                    finalIndices[0] = i;
                    finalIndices[1] = j;
                    return finalIndices;
                }
            }
        }
    }
}
