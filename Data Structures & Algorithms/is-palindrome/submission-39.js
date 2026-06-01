class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        return (normalized === [...normalized].reverse().join(''));
    }
}
