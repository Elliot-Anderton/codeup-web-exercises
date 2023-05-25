$(function (){
	"use strict"

	$(`dt`).on( "click", function() {
		const now = $(this).hasClass(`highlight`);
		let isHigh = $(`.highlight`);

		isHigh.next().toggleClass(`invisible`);
		isHigh.toggleClass(`highlight`);

		if (!now) {
			$(this).toggleClass(`highlight`);
			$(this).next().toggleClass(`invisible`);
		}
	});



	$(`#turn-yellow`).on(`click`, function () {
		$(`.list`).children().each(function (index) {
			if ((index + 1) % 4 === 0) {
				$(this).toggleClass(`highlight`);
			}
		})
	});

	$(`h3`).on(`click`, function () {
		$(this).next().css(`font-weight`, `bold`);
	});

	$(`li`).on(`click`, function () {
		$(this).children().first().css(`color`, `blue`);
	});

	$(`.left`).on(`click`, function () {
		let color1 = $(`#left[name^="color-"]`);
		let color2 = $(`#middle[name^="color-"]`);
		$(`#left`).removeClass(color1)
		$(`#middle`).removeClass(color2)
		$(`#left`).addClass(color2)
		$(`#middle`).addClass(color1)
	})

})