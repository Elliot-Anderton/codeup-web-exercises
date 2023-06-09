$(function () {
	"use strict";

	// $('li').css('font-size', `20px`)
	// $(`p, li, h1`).css(`background-color`, `yellow`)
	// let div = $(`div`)
	// div.css(`color`, `brown`)

	$(`h1`).on(`click`,function (){
		$(`h1`).css(`background-color`, `green`);
	});

	$(`p`).on(`dblclick`, function (){
		$(`p`).css(`font-size`, `18px`);
	});

	$(`li`)
		.on(`mouseenter`, function (){
			$(this).css(`color`, `red`);
		})
		.on(`mouseleave`, function (){
			$(this).css(`color`, `black`);
		});

});