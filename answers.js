// Exercise 1
// Write a function called printPositives that takes an array and uses its forEach method to print 
// only the positive numbers.

var negativesAndPositivesArray = [-3, 21, 17, -15, 43, -28];
function printPositives(element) {
    if (element > -1) {
        console.log(element);
    }
}

negativesAndPositivesArray.forEach(printPositives);