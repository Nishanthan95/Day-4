//Print odd numbers in an array
var numbers = [1, 2, 3, 4, 5, 6]
function oddNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {

            console.log(arr[i]);
        }
    }
} oddNumber(numbers);

// IIFE to print odd numbers in the array
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(numbers1);

//Convert all the strings to title caps in a string array
var sentence = "hello every one";

function titleCapital(sentence) {
    let words = sentence.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
        if (words[i]) { // Check if the word is not empty
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }
    console.log(words.join(' '));
    return words.join(' ');
}
titleCapital(sentence);

// IIFE Convert all the strings to title caps in a string array
var sentance1 = "hi hello";
var titleCapital = (function (sentance1) {
    sentance1 = sentance1.toLowerCase().split(' ');
    for (var i = 0; i < sentance1.length; i++) {
        sentance1[i] = sentance1[i].charAt(0).toUpperCase() + sentance1[i].slice(1);
    }
    return sentance1.join(' ');
})(sentance1);

console.log(titleCapital);

//Sum of all numbers in an array
var numbers = [1, 2, 3, 4, 5];
function sumOfArray(arr) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray(numbers));

//IIFE Sum of all numbers in an array
const numbers3 = [1, 2, 3, 4];
(function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];

    } console.log(sum);
    return sum;

})(numbers3);

//Return all the prime numbers in an array

function checkPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeNumbers(numbers) {
    return numbers.filter(function (number) {
        return checkPrime(number);
    });
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var primeNumbers = getPrimeNumbers(numbers);
console.log("Prime numbers:", primeNumbers);

//IIFE  Return all the prime numbers in an array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var primeNumbers = (function (numbers) {
    function isPrime(number) {
        if (number <= 1) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    return numbers.filter(function (number) {
        return isPrime(number);
    });
})(numbers);

console.log("Prime numbers:", primeNumbers);

//Remove duplicates from an array
function duplicateRemove(array) {
    let unique1 = [...new Set(array)];
    console.log(unique1);
}

duplicateRemove([1, 1, 2, 2, 3, 4, 5, 5, 6]);

//IIFE Remove duplicates from an array
(function (array) {

    let unique2 = [...new Set(array)];

    console.log(unique2);

})([1, 1, 2, 2, 3, 4, 5, 5, 6])


