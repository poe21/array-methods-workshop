// Exercise 1
// Write a function called printPositives that takes an array and uses its forEach method to print 
// only the positive numbers.

var negativesPositivesArray = [-3, 21, 17, -15, 43, -28];
function printPositives(element, index, array) {
    if (element > -1) {
        console.log(element);
    }
}

negativesPositivesArray.forEach(printPositives);