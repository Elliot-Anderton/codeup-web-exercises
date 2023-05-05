function seven() {
	return 7;
}

// Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.

function findFactors(num) {
	let divisibleBy = [];
	if (typeof num === 'number' && !isNaN(num)) {
		for (let i = 1; i <= num; i++)
			if (num % i === 0) {
				divisibleBy.push(i);
			}
	} else {
		divisibleBy = false;
	}
	return divisibleBy;
}

// console.log(findFactors(6)); // returns [1,2,3,6];
// console.log(findFactors(16)); // returns [1,2,4,8,16];
// console.log(findFactors(0)); // returns [];
// console.log(findFactors(true)); // returns false;
// console.log(findFactors("13")); // returns false;
// console.log(findFactors([54,72,144])); // returns false;
// console.log(findFactors({value: 64})); // returns false;
// console.log(findFactors()); // returns false;

// Write a function that takes in a string and counts the instances of the letter 'e' within the argument. The count should be case insensitive. If the string does not contain any 'e's it should return 0. If the argument is not a string it should return false.

function countEs(string) {
	let count = 0;
	if( typeof string === 'string') {
		string = string.toLowerCase();
		for (let i = 0; i < string.length; i++) {
			if (string[i] === 'e') {
				count++;
			}
		}
	} else {
		count = false;
	}
	return count;
}

// console.log(countEs("Ease")); // returns 2;
// console.log(countEs("teleconference")); // returns 5;
// console.log(countEs("TOM")); // returns 0;
// console.log(countEs(true)); // returns false;
// console.log(countEs(['e', 'E'])); // returns false;
// console.log(countEs()); // returns false;

function containsE(string) {
	let isE = false;
	if(typeof string === 'string') {
		string = string.toLowerCase();
		if (string.indexOf(`e`) !== -1) {
				isE = true;
		}
	}
	return isE;
}

// console.log(containsE("Ease")); // returns 2;
// console.log(containsE("teleconference")); // returns 5;
// console.log(containsE("TOM")); // returns 0;
// console.log(containsE(true)); // returns false;
// console.log(containsE(['e', 'E'])); // returns false;
// console.log(containsE()); // returns false;

// function fizzBuzz() {
// 	for(let i = 0; i < 100; i++) {
// 		if(i % 3 === 0 && i % 5 === 0) {
// 			console.log(`fizzBuzz`);
// 		} else if(i % 5 === 0) {
// 			console.log(`buzz`);
// 		} else if(i % 3 === 0) {
// 			console.log(`fizz`);
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }

// fizzBuzz()

function isFizz(num) {
	let fizzVar = ``;
	if (num % 3 === 0) {
		fizzVar = `fizz`;
	}
	return fizzVar;
}

function isBuzz(num) {
	let buzzVar = ``;
	if (num % 5 === 0) {
		buzzVar = `Buzz`;
	}
	return buzzVar;
}
function fizzBuzz() {
	for (let i = 1; i < 101; i++) {
		fizzBuzzVar = isFizz(i) + isBuzz(i);
		if (fizzBuzzVar !== ``) {
			console.log(fizzBuzzVar);
		} else {
			console.log(i);
		}
	}
}

// fizzBuzz()

// Create a do-while loop that starts at 2, and displays the number squared on each line while the number is less than 1,000,000. Output should equal:
// function twoSquared () {
// 	for (let i = 2; i < 1000000; i = Math.pow(i, 2)) {
// 		console.log(i);
// 	}
// }
function twoSquared() {
	let i = 2;
	do {
		console.log(i);
		i = Math.pow(i, 2);
	} while(i < 1000000);
}

// twoSquared()