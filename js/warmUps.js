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

// Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming that only arrays are going to be used with this function).

function addEmUp(numArray) {
	let sum = 0;
	for (let i = 0; i < numArray.length; i++) {
		sum += numArray[i];
	}
	return sum;
}

// console.log(addEmUp([2,6,19])); // returns 27
// console.log(addEmUp([-99, 180, -5])); // returns 76
// console.log(addEmUp([44,10,7])); // returns 61
// console.log(addEmUp([-100])); // returns -100
// console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
// console.log(addEmUp([-13, -92, -3500])) // returns -3605


// Write a function that takes in a string and returns an object describing the string. The object should have a string property that contains the original string, a numberOfEs property that contains a count of the number of e's in the string (case-insensitive), and a isEvenLength property that contains a boolean for whether the string's length is even or not.

function explainString(string) {
	let ob = {}
	ob.ogString = string;
	ob.numEs = countEs(string);
	ob.isEvenLength = string.length % 2 === 0;
	return ob;
}

// console.log(explainString("cheese")) // returns {string: "cheese", numberOfEs: 3, isEvenLength: true}
// console.log(explainString("dog")) // returns {string: "dog", numberOfEs: 0, isEvenLength: false}

// Write a function that takes in an array of objects and returns an array containing all of the names from the original array.

const hamsters = [
	{
		name: "Hamtaro",
		heightInMM: 86,
		fur: ['orange', 'white'],
		gender: "male",
		dateOfBirth: "August 6"
	} , {
		name: "Bijou",
		heightInMM: 75,
		fur: ['white'],
		gender: "female",
		dateOfBirth: "July 10"
	} , {
		name: "Oxnard",
		heightInMM: 100,
		fur: ['grey', 'white'],
		gender: "male",
		dateOfBirth: "May 3"
	} , {
		name: "Boss",
		heightInMM: 120,
		fur: ['brown', 'white'],
		gender: "male",
		dateOfBirth: "September 21"
	} , {
		name: "Snoozer",
		heightInMM: 85,
		fur: ['brown', 'white', "pink"],
		gender: "male",
		dateOfBirth: "January 14"
	}
];

function extractNames(obArr) {
	let names = [];

	for(let i = 0; i < hamsters.length; i++) {
		names.push(obArr[i].name);
	}

	return names;
}

// console.log(extractNames(hamsters)); // returns ["Hamtaro", "Bijou", "Oxnard", "Boss", "Snoozer"];


// Write a function that takes in an array of objects and returns the object with the largest heightInMM property

const getTallest = function (obArr) {
	let largest = obArr[0];

	for (let i = 1; i < obArr.length; i++){
		if(largest.heightInMM < obArr[i].heightInMM) {
			largest = obArr[i];
		}
	}
	return largest;
}

// console.log(getTallest(hamsters)); // returns {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"}

// Write a function that takes in an array of objects and returns an array of the objects from the array that only have one fur color.

function singleFurColor(obArr) {
	let bucket = [];

	obArr.forEach(function (obj){
		if (obj.fur.length < 2){
			bucket.push(obj);
		}
	});
	return bucket;
}

// console.log(singleFurColor(hamsters)); // returns [{name: "Bijou", heightInMM: 75, fur: ['white'], gender: "female", dateOfBirth: "July 10"}];

// Write a function that takes in an array of objects and returns the object with the most colors in the fur array.

function mostColorful(obArr) {
	let most = obArr[0]

	obArr.forEach(function (obj) {
		if (obj.fur.length > most.fur.length) {
			most =  obj;
		}
	})
	return most;
}

// console.log(mostColorful(hamsters)); // returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"};

// Write a JavaScript function that takes in a number and returns an object with the following fields: number, which will contain the original number; evenOrOdd, which will contain a string ("even" or "odd") as to whether the value is even or odd; factors, an array of numbers that are evenly divisible within the number passed; and numberOfDigits, a number counting the number of digits with the number passed.

function describeNumber(num) {
	return {
	number: num,
	evenOrodd: (num % 2 === 0) ? `even` : `odd`,
	factors: findFactors(num),
	numberOfDigits: num.toString().length,
	}
}

// console.log(describeNumber(19)); // returns {number: 19, evenOrOdd: "odd", factors: [1,19], numberOfDigits: 2};
// console.log(describeNumber(2)); // returns {number: 2, evenOrOdd: "even", factors: [1,2], numberOfDigits: 1};

// Write a JavaScript function that takes in an array of numbers and returns an array of the same length where all of the numbers have been replaced with the number multiplied by 3.

function multiplyElementsByThree(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] *= 3;
	}
	return arr;
}

console.log(multiplyElementsByThree([3,4,5])); // returns [9, 12, 15];
console.log(multiplyElementsByThree([12,8])); // returns [36, 24];
console.log(multiplyElementsByThree([100])); // returns [300];
console.log(multiplyElementsByThree([15, 9, 33, 16, 50])); // returns [45, 27, 99, 48, 150];

