$(function () {

	let coordinates = [-123.26124, 44.5597];

	function updateMap(coordinates) {
		mapboxgl.accessToken = MBWM_KEY;
		let map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v9',
			zoom: 10,
			center: coordinates
		});
		const marker = new mapboxgl.Marker({
			draggable: true
		})
			.setLngLat(coordinates)
			.addTo(map);
		marker.on('dragend', function () {
			onDragEnd(marker)
		});
	}

	updateMap(coordinates);
	currentWeather(coordinates);

	function onDragEnd(marker) {
		const lngLat = marker.getLngLat();
		coordinates.splice(0, 1, lngLat.lng);
		coordinates.splice(1, 1, lngLat.lat);
		currentWeather(coordinates);
	}

	function currentWeather(coordinates) {
		$.get("http://api.openweathermap.org/data/2.5/weather", {
			APPID: OWM_KEY,
			lat: coordinates[1],
			lon: coordinates[0],
			units: "imperial"
		}).done(function (data) {
			let html = `<h1>${data.name}</h1>`
			let todayDate = getTime(data.dt, 1)
			html += `<section class="row"><h6 class="col">${todayDate}</h6><br>`
			html += `<p>${data.main.temp_max} / ${data.main.temp_min}</p>`
			html += `<p>${data.weather[0].description}</p>`
			html += `<p>${data.weather[0].icon}</p>`
			html += `</section>`
			$(`#current`).html(html);
			updateWeather(coordinates);
		})
	}

	function updateWeather(coordinates) {
		$.get("http://api.openweathermap.org/data/2.5/forecast", {
			APPID: OWM_KEY,
			lat: coordinates[1],
			lon: coordinates[0],
			units: "imperial"
		}).done(function (data) {
			console.log(`here`)
			let html = ``
			for (let i = 2; i < 35; i += 8) {
				let todayDate = getTime(data.list[i].dt)
				html += `<section class="row"><h6 class="col">${todayDate}</h6><br>`
				html += `<p >${data.list[i].main.temp_max} / ${data.list[i].main.temp_min}</p>`
				html += `<p>${data.list[i].weather[0].description}</p>`
				html += `</section>`
			}
			$(`#forecast`).html(html);
		});
	}

	$(`#submit`).on(`click`, function () {
		geocode($(`#searchCity`).val(), API_PRACTICE).then(function (result) {
			console.log(result)
			coordinates = result
			updateMap(coordinates)
			currentWeather(coordinates)
		})
	})

	function getTime(unixTime, option) {
		let millisecond = unixTime * 1000
		let dateObject = new Date(millisecond)
		let options;
		if (option === 1) {
			options = {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit'
			};
		} else {
			options = {
				weekday: 'long'
			};
		}
		return dateObject.toLocaleString("en-US", options)
	}


})