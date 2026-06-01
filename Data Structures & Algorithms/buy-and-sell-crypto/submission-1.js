class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        for (let i=0; i < prices.length; i++) {
            for (let j=0; j < i; j++) {
                if (prices[i] - prices[j] > maxProfit) {
                    maxProfit = prices[i] - prices[j];
                }
            }
        }
        return maxProfit;
    }
}
