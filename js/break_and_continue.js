(function(){
	"use strict";

	let myNum = true;
	while (myNum) {
		myNum = parseFloat(prompt('Please enter an odd number between 0 and 50'));
		if (!isNaN(myNum) && myNum % 2 !== 0) {
			if (0 < myNum && myNum < 50) {
				break;
			}
		}
	}

	console.log(`The number to skip is ${myNum}`);

	for (let i = 1; i < 50; i += 2) {
		if (i === myNum) {
			console.log(`Yikes!!!! Skipping number: ${myNum}`);
			continue;
		}
		console.log(`Here is an odd number: ${i}`);
	}

})();