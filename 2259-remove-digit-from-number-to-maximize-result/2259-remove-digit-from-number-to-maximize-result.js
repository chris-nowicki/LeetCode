/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    for (let i = 0; i < number.length; i++) {
        if (number.charAt(i-1) === digit) {
            if (number.charAt(i) > number.charAt(i-1)) {
                return (number.substring(0,i-1) + number.substring(i));
            } 
        }
    }

    let lastIndex = number.lastIndexOf(digit);
    return (number.substring(0, lastIndex) + number.substring(lastIndex+1));
};