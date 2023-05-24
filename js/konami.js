$(function () {
	"use strict"

	let code = ``;
	let konamiCode = `arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightbaenter`

	let body = $(`body`)
	let hide = $(`.hide`)

	body.on(`keydown`, function (event) {
		if(code === `` || konamiCode.includes(code.toLowerCase())) {
			code += event.key
			console.log(code)
			if (konamiCode === code.toLowerCase()) {
				partyTime();
			}
		} else {
			code = ``;
		}
	})

	function partyTime() {
		body.addClass(`blink`);
		hide.addClass(`yay`);
		hide.addClass(`blink2`);
	}

})