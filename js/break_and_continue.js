(function(){
	"use strict";

	let myNum;
	while (true) {
		myNum = parseInt(prompt('Please enter an odd number'));
		if (!isNaN(myNum) && myNum % 2 != 0) {
			break;
		}
	}
	console.log(`The number to skip is ${myNum}`);

	for (let i = 1; i < 50; i += 2) {
		if (i === myNum) {
			console.log(`Yikes skipping number: ${myNum}`);
			continue;
		}
		console.log(`Here is an odd number: ${i}`);
	}

})();