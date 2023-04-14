"use strict"
console.log('Hello from External JavaScript');

alert("Welcome to my Website");

var favColor;

favColor = prompt('What is your favorite color?');
alert('Awesome, ' + favColor + ' is my favorite color too!');

let daysLM = Number(prompt('How many days will you rent Little Mermaid?'));
let daysBB = Number(prompt('How many days will you rent Brother Bear?'));
let daysHU = Number(prompt('How many days will you rent Hercules?'));
let price = Number(prompt('What is the price per day?'));
let total = (daysLM + daysBB + daysHU) * price;
alert('Your total is ' + total.toFixed(2));

let ar = Number(prompt('What is your rate for Amazon?'));
let ah = Number(prompt('How many how many hours did you work for Amazon?'));
let gr = Number(prompt('What is your rate for Google?'));
let gh = Number(prompt('How many how many hours did you work for Google?'));
let fr = Number(prompt('What is your rate for Facebook?'));
let fh = Number(prompt('How many how many hours did you work for Facebook?'));
let totalPay = ar * ah + gr * gh + fr * fh;
alert('Your total pay is ' + totalPay.toFixed(2));

let full = confirm('Is the class full?');
let scheddy = confirm('Do you have schedule conflicts?');
if (!full && !scheddy) {
    alert('Hooray, you can enroll!');
} else {
    alert('Sorry, you cannot enroll.');
}

let numItems = Number(prompt('How many items are you buying'));
let offerexpired = confirm('Is offer sitll valid?');
let prem = confirm('Are you a premium member?');
let applyOffer = offerexpired && (prem || numItems > 2);
if (applyOffer) {
    alert('Hooray, can apply the offer!');
} else {
    alert('Sorry, you cannot apply the offer');
}