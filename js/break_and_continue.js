
"use strict"
let myNum;
do {
	myNum = parseInt(prompt('Please enter an odd number'));
} while (isNaN(myNum) || myNum % 2 === 0)

console.log(myNum);


for (let i = 1; i < 50; i++) {
	if (i === myNum) {

}