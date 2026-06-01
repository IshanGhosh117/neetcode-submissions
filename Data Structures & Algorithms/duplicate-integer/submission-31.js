class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let storedValues = [];
        for (const i of nums) {
            if (!storedValues.includes(i)) {
                storedValues.push(i);
            } else {
                return true;
            }
        }
        return false;
    }
}
