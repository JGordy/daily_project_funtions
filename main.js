// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
    // Your answer here
    if (num1 > num2) {
      return num1;
    } else if ( num1 < num2){
      return num2
    } else {
      return "They are the same number."
    }
}

console.log(max(85, 72))

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3) {
    // Your answer here
    if ((num1 > num2) && (num1 > num3)) {
      return num1;
    } else if ((num2 > num3) && (num2 > num1)) {
      return num2;
    } else if ((num3 > num1) && (num3 > num2)) {
      return num3;
    }
}

console.log(maxOfThree(99, 54, 87));
console.log(maxOfThree(55, 32, 67));
console.log(maxOfThree(87, 90, 54));
// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if ( char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      return true;
    } else {
      return false;
    }
}

console.log(isVowel('b'));
console.log(isVowel('i'));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(5,9))


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(avg(5,10,15))

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(string) {
  return string.length;
}

console.log(getLength("function"));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(num1, num2) {
  if (num2 > num1) {
    return true;
  } else {
    return false;
  }
}

console.log(greaterThan(5, 9));
console.log(greaterThan(9, 5));
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(string) {
  return "Hello, " + string + "!"
}


console.log(greet("Name"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madLib(book, person, fruit, meal) {
  return "For " + meal + ", " + person + " had an " + fruit + " and read " + book + "."
}


console.log(madLib("Harry Potter", "Joe", "apple", "lunch"));
console.log(madLib("JavaScript and CSS by Jon Duckett", "Willy", "orange", "dinner"));
