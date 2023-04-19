(function(){
"use strict";

function showMultiplicationTable(num) {
	for (let i = 1; i < 11; i++) {
		console.log(num + " x " + i + " = " + (num * i));
	}
}

showMultiplicationTable(4);

for (let i = 0; i < 10; i++) {
	let sumnum = Math.floor(Math.random() * 180) + 20;
	let isEven = sumnum % 2 === 0;

	if (isEven) {
		console.log(sumnum + " is even");
	} else {
		console.log(sumnum + " is odd");
	}
}

for (let i = 1, k = i.toString(); i < 10; i++) {
	for (let j = 1; j < i; j++) {
		k += i.toString();
	}
	console.log(k);
	k = (i + 1).toString();
}

for (let i = 100; i > 0; i -= 5) {
	console.log(i);
}

})();