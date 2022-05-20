/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var revNumber = 0;
    let y = x;
    while (x > 0) {
      revNumber = (revNumber * 10) + (x % 10);
      x = Math.floor(x / 10);
    }
    return revNumber === y;
};