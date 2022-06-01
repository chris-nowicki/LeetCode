/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    var count = 0;
    if (low > 0 || high > 0) {
        for (i = low; i < high + 1; i++) {
            if (i % 2 === 1) {
                count++
            }
        }
    }
    return count;
};