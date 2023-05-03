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

console.log(containsE("Ease")); // returns 2;
console.log(containsE("teleconference")); // returns 5;
console.log(containsE("TOM")); // returns 0;
console.log(containsE(true)); // returns false;
console.log(containsE(['e', 'E'])); // returns false;
console.log(containsE()); // returns false;