// Make a function named isOdd(number)

function isOdd(num) {
	let oddOne = false;

	if (!isNaN(parseFloat(num))) {
		oddOne = num % 2 === 0;
	}
	return oddOne;
}
// Make a function named isEven(number)

function isEven(num) {
	let evenSteven = false;

	if (!isNaN(parseFloat(num))) {
		evenSteven = num % 2 === 0;
	}
	return evenSteven;
}
// Make a function named identity(input) that returns the input exactly as provided.

function identiy(input) {
	return input;
}
// 	Make a function named isFive(input)

function isFive(input) {
	return input === 5;
}
// Make a function named addFive(input) that adds five to some input.

function addFive(num) {
	if (!isNaN(parseFloat(num))) {
		return num + 5;
	}
}

// 	Make a function named isMultipleOfFive(input)
function isMultipleofFive(num) {
	return num % 5 === 0 && typeof(num)  != "boolean";
}

// Make a function named isThree(input)
function isThree(num) {
	return num === 3;
}
// Make a function named isMultipleOfThree(input)
function isMultipleofThree(num) {
	return num === 3 && typeof(num)  != "boolean";
}
// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleofThreeandFive(num) {
	return isMultipleofThree(num) && isMultipleofFive(num);
}
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n) {
	return  target % n === 0 && typeof target != "boolean";
}

// Make a function named isTrue(boolean)
function isTrue(boolean) {
	return boolean === true;
}

// Make a function named isFalse(boolean)
function isFalse(boolean) {
	return boolean !== true;
}
// Make a function named isTruthy(input), remember that values other than true will behave like true
function isTruthy(input) {
	return input == true;
}
// Make a function named isFalsy(input), remember that values other than false behave like false
function isFalsy(input) {
	return input != true;
}

// Make a function named isVowel(letter)
function isVowel(letter) {
	return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1;
}

// Make a function named isConsonant(letter)
function isConsonant(letter) {
	return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) === -1;
}

// Make a function named isCapital(letter)
function isCapital(letter) {
	return letter === letter.toUpperCase();
}

// Make a function named isLowerCase(letter)
function isLowercase(letter) {
	return letter === letter.toLowerCase();
}

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
function hasLowerCase(string) {
	return !isCapital(string);
}
// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(letter) {
	return letter === ' ';
}

// Make a function named isZero(number)
function isZero(number) {
	return number === 0;
}

// Make a function named notZero(input) that returns true if the input is not zero
function notZero(input) {
	return !isZero(input);
}

// Write a function named lowerCase(string)
function lowerCase(string){
	return string.toLowerCase();
}

// Write a function named double(n) that returns a number times two
function double(n) {
	return n * 2;
}

// Write a function named triple(n) that returns a number times 3
function triple (n) {
	return n * 3;
}

// Write a function named quadruple(n) that returns a number times 4
function quadruple(n) {
	return n * 4;
}

// Write a function named half(n) that returns 1/2 of the provided input
function half(n) {
	return n / 2;
}

// Write a function named subtract(a, b) that returns a minus b
function subtract(a, b) {
	return a - b;
}

// Write a function named multiply(a, b) that returns the product of a times b
function multiply (a, b) {
	return a * b;
}

// Write a function named divide(a, b) that returns a divided by b
function divide(a, b) {
	return a / b;
}

// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainders(a, b) {
	return a % b;
}

// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
function modulo(a, b) {
	return a % b;
}
// Write a function named cube(n) that returns n * n * n
function cube(n) {
	return Math.pow(n, 3)
}

// Write a function named squareRoot(n) that returns the square root of the input
function squareRoot(n) {
	return Math.pow(n, 1/2);
}

// Write a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot(n) {
	return Math.pow(n, 1/3);
}

// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
function invertSign(number) {
	return number * -1;
}

// Write a function named degreesToRadians(number)
function degreesToRadians(number) {
	return number * (Math.PI / 180);
}

// Write a function named radiansToDegrees(number)
function radiansToDegrees(number) {

}
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
function isBlank(input) {

}

// 	Make a function named trim(string) that removes empty spaces before and after the input.
function trim(string) {
	return input.trim();
}

// 	Make a function named areEqual(input1, input2) that returns if both inputs have the same value
function areEqual(input1, input2) {
	return input1 == input2;
}

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
function areIdentical(input1, input2) {
	return input1 === input2;
}

// 	Make a function named not(input) returns the input with a flipped boolean
function not(input) {
	return !input;
}

// Make a function named notNot(input) that the negation of the negation of the input.
function notNot(input) {
	return !!input;
}

// 	Make a function named and(predicate1, predicate2) that returns the logical operation of AND
function and(predicate1, predicate2) {
	return predicate1 && predicate2;
}

// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
function or(predicate1, predicate2) {
	return predicate1 || predicate2
}
// Write a function called reverseString(string) that reverses a string
function reverseString(string) {
	return string.reverse;
}

// Make a function named absoluteValue(number) that returns the absolute value of a number.
function absoluteValue(number) {

}
// 	Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.

// Write a for loop that prints the even numbers from 0 to 20 to the console.
// 	Write a while loop that counts down from 10 to 0 and prints each number to the console.
// 	Write a do-while loop that prompts the user to enter a number between 1 and 5. The loop should continue to prompt the user until they enter a valid number.
// 	Write a for loop that calculates the sum of the numbers from 1 to 100 and prints the result to the console.
// 	Write a while loop that prompts the user to enter their name. The loop should continue to prompt the user until they enter a non-empty string.
// 	Write a for loop that iterates over an array of strings and prints each string to the console.
// 	Write a for loop that iterates over an object and prints each key-value pair to the console.
// 	Write a while loop that generates random numbers between 1 and 10 until it generates a number greater than 8. The loop should print each generated number to the console.
// 	Write a for loop that iterates over an array of numbers and prints only the even numbers to the console.

// Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//
// 	The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.




function willLoginUser(usnm, psswd, age, admin) {
	let willLogin = false;
	if (!psswd.includes(usnm)) {
		if (age >= 18 || admin === true){
			willLogin = true;
		}
	}
	return willLogin;
}

function getLogin() {
	let oldnuff = parseFloat(prompt(`What is the users age?`));
	let isadmin = confirm(`Is user an admin?`);
	let username = prompt(`Please enter your username`);
	let password = prompt(`Please enter your password`);


	willLoginUser(username, password, oldnuff, isadmin);
}
// Write a function named remainder  that will accept two arguments and return the remainder
// of a division between the two values (the first divided by the second). If either argument is not a
// number, the function should return false .
function remainder(a, b) {
	theRemainder = false;
	if (typeof a === "number" && typeof b === "number") {
		theRemainder = a % b;
	}
	return theRemainder;
}

// function remainder(a, b) {
// 	if(!isNaN(a)) {
// 		if(!isNaN(b)) {
// 			return a % b;
// 		} else {
// 			return false;
// 		}
// 	}
// }

	// Consider the following test cases:
// console.log(remainder(21, 7)); // returns 0
// console.log(remainder(-34, 3)); // returns -1
// console.log(remainder(144, -11)); // returns 1
// console.log(remainder(-14, "2")); // returns false
// console.log(remainder("36", 9)); // returns false
// console.log(remainder("44", "-3")); // returns false
// console.log(remainder("Jeff", "Geoff")); // returns false
// console.log(remainder(false, true)); // returns false
// console.log(remainder()); // returns false


// Write a function named containsAce  that takes in an argument and returns true  if the
// 	argument passed is a string that contains the sequence of characters "ace"  somewhere
// within the string. This check should be case insensitive. The function should return false if the
// 	argument is not a string, or if it doesn't contain "ace"  somewhere in the string.
function containsAce(string) {
	let isAce = false;
	if (typeof string === 'string') {
		input = string.toLowerCase();
		if (input.indexOf('ace') !== -1) {
			isAce = true;
		}
	}
	return isAce;
}

// Consider the following test cases:
// console.log(containsAce("place")); // returns true
// console.log(containsAce("ACE Hardware")); // returns true
// console.log(containsAce("PaLaCe!1!")); // returns true
// console.log(containsAce("camel")); // returns false
// console.log(containsAce("CACHE")); // returns false
// console.log(containsAce("phase 1")); // returns false
// console.log(containsAce("bass")); // returns false
// console.log(containsAce(["a", "c", "e"])); // returns false
// console.log(containsAce(135)); // returns false
// console.log(containsAce(true)); // returns false
// console.log(containsAce()); // returns false


// Write a function named divisibleBy5  that accepts an argument returns true  is the
// argument a number that is evenly divisible by 5. If the argument provided is either not a number,
// 	or is not evenly divisibile by 5, the function should return false .
function divisibleBy5(n) {
	return n % 5 === 0 && typeof n === 'number';
}

// 	Consider the following test cases:
// console.log(divisibleBy5(255)) // returns true
// console.log(divisibleBy5(-100)) // returns true
// console.log(divisibleBy5(5)) // returns true
// console.log(divisibleBy5(0)) // returns true
// console.log(divisibleBy5("80")) // returns false
// console.log(divisibleBy5(6)) // returns false
// console.log(divisibleBy5(-99)) // returns false
// console.log(divisibleBy5(false)) // returns false
// console.log(divisibleBy5([5.10,15])) // returns false
// console.log(divisibleBy5()) // returns false


// Write a function named averageThreeNumbers  that accepts three arguments, and returns
// the average (mean) of the three arguments if all three arguments are numbers. If any/all of the
// three arguments are not a number, or if there are fewer than three arguments, the function
// should return false .
function averageThreeNumbers(num1, num2, num3) {
	let average = false;
	if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
		average = (num1 + num2 + num3) / 3
	}
	return average;
}

// 	Consider the following test cases:
// console.log(averageThreeNumbers(10,5,15)) // returns 10
// console.log(averageThreeNumbers(19,44,-8)) // returns 18.333333333333332
// console.log(averageThreeNumbers("two", 3, 1)) // returns false
// console.log(averageThreeNumbers(2, "3", 1)) // returns false
// console.log(averageThreeNumbers(6,7,"8")) // returns false
// console.log(averageThreeNumbers("duck", "duck", "goose")) // returns false
// console.log(averageThreeNumbers(true, false, true)) // returns false
// console.log(averageThreeNumbers(22,24)) // returns false
// console.log(averageThreeNumbers()) // returns false


// Write a function named stringsAreSameLength  that accepts two arguments and returns
// true  if both arguments are strings of the same length. If either argument is not a string, has
// fewer than two arguments, or if the two strings are of different lengths, the function should return
// false .
function stringsAreSameLength(string1, string2) {
	let isLength = false;
	if (typeof string1 === 'string' && typeof string2 === 'string') {
		isLength = string1.length === string2.length
	}
	return isLength;
}

// 	Consider the following test cases:
// console.log(stringsAreSameLength("duck", "code")) // returns true
// console.log(stringsAreSameLength("Buick", "CAMEL")) // returns true
// console.log(stringsAreSameLength("ERROR_404", "file-miss")) // returns true
// console.log(stringsAreSameLength("ERROR_CODE", "1234567890")) // returns true
// console.log(stringsAreSameLength("Oops", 1234)) // returns false
// console.log(stringsAreSameLength(22, "huh...")) // returns false
// console.log(stringsAreSameLength("Camel", "Case")) // returns false
// console.log(stringsAreSameLength(81,34)) // returns false
// console.log(stringsAreSameLength("ace", [1,2,3])) // returns false
// console.log(stringsAreSameLength("fisherman")) // returns false
// console.log(stringsAreSameLength()) // returns false