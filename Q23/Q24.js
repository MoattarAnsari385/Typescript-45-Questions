"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let string1 = "hello";
let string2 = "HELLO";
let number1 = 10;
let number2 = 5;
let array = [1, 2, 3];
// Tests for equality and inequality with strings
console.log("Is string1 == 'hello'? I predict true.");
console.log(string1 == "hello");
console.log("Is string1 != string2? I predict true.");
console.log(string1 != string2);
// Tests using the lower case function
console.log("Is string1.toLowerCase() == 'hello'? I predict true.");
console.log(string1.toLowerCase() == "hello");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is number1 == 10? I predict true.");
console.log(number1 == 10);
console.log("Is number1 != number2? I predict true.");
console.log(number1 != number2);
console.log("Is number1 > number2? I predict true.");
console.log(number1 > number2);
console.log("Is number1 < number2? I predict false.");
console.log(number1 < number2);
console.log("Is number1 >= number2? I predict true.");
console.log(number1 >= number2);
console.log("Is number1 <= number2? I predict false.");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
console.log("Is number1 > 5 and number2 < 10? I predict true.");
console.log(number1 > 5 && number2 < 10);
console.log("Is number1 > 5 or number2 > 10? I predict true.");
console.log(number1 > 5 || number2 > 10);
// Test whether an item is in an array
console.log("Is 2 in array? I predict true.");
console.log(array.includes(2));
// Test whether an item is not in an array
console.log("Is 4 not in array? I predict true.");
console.log(!array.includes(4));
