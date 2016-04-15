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

// Exercise 2
// Similar to the previous exercise, write a function called getPositives that takes an array and 
// uses its filter method to return a new array with only the positive numbers

function getPositives(element) {
    if (element > -1) {
        return element;
    }
}

console.log(negativesAndPositivesArray.filter(getPositives));

// Exercise 3
// Write a function called filterArray that takes an array AND a function as arguments. 
// Your filter function should return a new array that contains only the elements where 
// the passed function returns a truthy value.

// NOTE: You are allowed to use Array.prototype.filter to answer this question.

// NOTE 2: This is a bit of a trick question, the answer is a one-liner :)

var toBeFiltered = [21, false, "cat", ""];

function filterArray(array, func) {
    return array.filter(func);
}

function isTrue(element) {
    if (true) {
        return element;
    }
}

console.log(filterArray(toBeFiltered, isTrue));