$(function () {
	"use strict";

	// $('li').css('font-size', `20px`)
	// $(`p, li, h1`).css(`background-color`, `yellow`)
	// let div = $(`div`)
	// div.css(`color`, `brown`)

	$(`h1`).click(function (){
		$(`h1`).css(`background-color`, `green`);
	})

	$(`p`).dblclick(function (){
		$(`p`).css(`font-size`, `18px`);
	})

	$(`li`).hover(
		function (){
		$(`li`).css(`color`, `red`);
		},
		function (){
			$(`li`).css(`color`, `black`);
		}
		);

});