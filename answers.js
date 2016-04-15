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

// Exercise 4
// Write a function called longestWord that takes a string as argument, 
// and returns the longest word in the string. You should use Array.prototype.reduce to do your work.

// Hint: You can use String.prototype.split to split the string into an array of words.

function longestWord(string) {
    var wordsArray = string.split(" ");
    return wordsArray.reduce(function (prev, next) {
        if (prev.length < next.length) {
            prev = next;
        } 
        return prev;
        }, []);
}

console.log(longestWord("What is the longest word in this sentence?"));

// Exercise 5
// Write a function called countVowels that takes a string and returns the number of vowels in the string. 
// You should use Array.prototype.reduce to do your work.
// Hint: You can use String.prototype.split again. There is a way to use it to split a string by character. 
// Try to Google it :)
// Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter 
// is a vowel.

function countVowels(string) {
    var vowels = ["a","e","i","o","u"];
    var charactersArray = string.toLowerCase().split("");
    return charactersArray.reduce(function (acc, next){
        if (vowels.indexOf(next) !== -1) {
           acc++;
        }
        return acc;
    }, 0);
} 

// *** For now I feel more comfortable storing the total in a specific variable than a prev or acc, it's probably not the best practice though..
function countVowels2(string) {
    var totalVowels = 0;
    var vowels = ["a","e","i","o","u"];
    var charactersArray = string.toLowerCase().split("");
    charactersArray.reduce(function (prev, next){
        if (vowels.indexOf(next) !== -1) {
            totalVowels += 1;
        }
    }, 0);
    return totalVowels;
}

console.log(countVowels("Annie likes cats"));
console.log(countVowels2("What is the longest word in this sentence?"));

// Exercise 6
// Write a function called highLow that takes an array of numbers, and returns an object with a property highest
// containing the highest number, and a property lowest containing the lowest number, 
// using Array.prototype.reduce.

// For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.

// Hint: Javascript has a special value called Infinity, which is higher than any other number. 
// See if you can initialize your reduce accumulator with Infinity and -Infinity :)

function highLow(newArray) {
    return newArray.reduce(function(acc, next) {
        if (acc.highest < next) {
            acc.highest = next;
        }
        if (acc.lowest > next) {
            acc.lowest = next;
        } 
        return acc;
    }, {
        highest: -Infinity,
        lowest: Infinity
    });
}

console.log(highLow([1, -10, 20, 40, 5]));
console.log(highLow([-109, 104, -10020, 2080, 40, 5]));

/* Exercise 7

Expanding on exercise 6, write a function called highLowTwo that takes an array of numbers, 
and returns the highest, second highest, lowest, and second lowest numbers.

For example, starting with [1, -10, 20, 40, 5], your function should return:

{
  "highest": 40,
  "secondHighest": 20,
  "lowest": -10,
  "secondLowest": 5
}
*/

function highLowTwo(newArray) {
    return newArray.reduce(function(acc, next) {
        if (next > acc.highest) {
            acc.secondHighest = acc.highest;
            acc.highest = next;
        }
        else if (next > acc.secondHighest) {
            acc.secondHighest = next;
        }
        if (next < acc.lowest) {
            acc.secondLowest = acc.lowest;
            acc.lowest = next;
        } 
        else if (next < acc.secondLowest) {
            acc.secondLowest = next;
        }
        return acc;
    }, {
        highest: -Infinity,
        secondHighest: -Infinity,
        secondLowest: Infinity,
        lowest: Infinity
    });
}

console.log(highLowTwo([10, -50, 40, -9, 58, -5]));
console.log(highLowTwo([1, -10, 20, 40, 5]));
console.log(highLowTwo([-109, 104, -1020, 2080, 40, 5]));