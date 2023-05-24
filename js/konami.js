$(function () {
	"use strict"

	let body = $(`body`)
	let hide = $(`.hide`)

	let code = [];
	let konamiCode = [`arrowup`, `arrowup`, `arrowdown`, `arrowdown`, `arrowleft`, `arrowright`, `arrowleft`, `arrowright`, `b`, `a`, `enter`]

	body.on(`keydown`, function (event) {
		code.push(event.key.toLowerCase())
		if(konamiCode.join(` `).includes(code.join(` `))) {
			if (konamiCode.join(` `) === code.join(` `)) {
				partyTime();
			}
		} else {
			code = [];
		}
	})

	function partyTime() {
		body.addClass(`blink`);
		hide.addClass(`yay`);
		hide.addClass(`blink2`);
		makeConfetti();
	}

	function makeConfetti() {
		let html = ``
		for (let i = 0; i < 50; i++) {

			if (i % 2 === 0) {
				html += `<div class="snow second"></div>`
			} else if (i % 3 === 0) {
					html += `<div class="snow third"></div>`
			} else {
					html += `<div class="snow"></div>`
			}
		$(`#confetti`).html(html)
		}
	}

})