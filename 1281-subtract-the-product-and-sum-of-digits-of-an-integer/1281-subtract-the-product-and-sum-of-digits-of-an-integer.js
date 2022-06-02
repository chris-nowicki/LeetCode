/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    x = n.toString();
    product = x[0];
    sum = parseInt(x[0]);

    for (let i = 1; i < x.length; i++) {
        product = product * x[i];
        sum = sum + parseInt(x[i]);
    }

    return result = product - sum;
};