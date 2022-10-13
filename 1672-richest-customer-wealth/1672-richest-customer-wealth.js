/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealthSoFar = 0

    for (let i = 0; i < accounts.length; i++) {
        currentCustomerWealth = 0

        for (let j = 0; j < accounts[i].length; j++) {
            currentCustomerWealth += accounts[i][j]
        }

        maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth)
    }

    return maxWealthSoFar
};