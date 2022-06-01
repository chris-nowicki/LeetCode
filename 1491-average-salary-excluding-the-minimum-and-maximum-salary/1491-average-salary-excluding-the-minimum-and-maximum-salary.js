/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    var max = salary[0];
    var min = salary[0];
    var sum = salary[0];
    
    for (var i = 1; i < salary.length; i++) {
        if (salary[i] > max) {
            max = salary[i];
        }
        if (salary[i] < min) {
            min = salary[i];
        }
        
        sum = sum + salary[i];
    }
    
    var avg = (sum - max - min) / (salary.length - 2)
    return avg;
};