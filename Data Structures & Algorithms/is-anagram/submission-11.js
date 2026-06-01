class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const splitStringA = s.split('').sort();
        const splitStringB = t.split('').sort();
        const areEqual = splitStringA.length === splitStringB.length && splitStringA.every((val, index) => val === splitStringB[index]);
        if (areEqual) return true;
        return false;
    }
}
