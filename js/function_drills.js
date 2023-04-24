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
	return 
}
// Make a function named isVowel(letter)
// Make a function named isConsonant(letter)
// Make a function named isCapital(letter)
// Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named isZero(number)
// Make a function named notZero(input) that returns true if the input is not zero
// Write a function named lowerCase(string)
// Write a function named double(n) that returns a number times two
// Write a function named triple(n) that returns a number times 3
// Write a function named quadruple(n) that returns a number times 4
// Write a function named half(n) that returns 1/2 of the provided input
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// Write a function named cube(n) that returns n * n * n
// Write a function named squareRoot(n) that returns the square root of the input
// Write a function named cubeRoot(n) that returns the cube root of the input
// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
// 	Make a function named trim(string) that removes empty spaces before and after the input.
// 	Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
// 	Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
// 	Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
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
