(function () {
	"use strict";

	let num = 1;
	while (num < 65536) {
		console.log(num *= 2);
	}

	let allCones = Math.floor(Math.random() * 50) + 50;
	let conesSold = 0;

	do {
		let thisPurchase = Math.floor(Math.random() * 5) + 1;
		let conesLeft = allCones - conesSold;

		if (thisPurchase > conesLeft) {
			console.log(`I cannot sell ${thisPurchase} cones. I only have ${conesLeft} left.`);
			continue;
		}
		console.log(thisPurchase + ` cones sold!`);
		conesSold += thisPurchase;

	} while (conesSold < allCones)

	console.log(`Yay, all ${conesSold} cones sold!`);

})()