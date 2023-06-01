$(function () {

	let coordinates = [-121.866126, 42.577636];

	updateMap(coordinates);
	currentWeather(coordinates);
	updateWeather(coordinates);

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

	function onDragEnd(marker) {
		const lngLat = marker.getLngLat();
		coordinates.splice(0, 1, lngLat.lng);
		coordinates.splice(1, 1, lngLat.lat);
		currentWeather(coordinates);
		updateWeather(coordinates);
	}

	function currentWeather(coordinates) {
		$.get("http://api.openweathermap.org/data/2.5/weather", {
			APPID: OWM_KEY,
			lat: coordinates[1],
			lon: coordinates[0],
			units: "imperial"
		}).done(function (data) {
			let html = `<h1>${data.name}</h1>`
			let todayDate = getTime(data.dt, data.timezone, 1)
			html += `<h6>${todayDate}</h6>`
			html += `<section class="card col-2 my-3 py-1"><h6>Today</h6>`
			html += `<p class="my-1">High: ${data.main.temp_max}</p>`
			html += `<p>Low: ${data.main.temp_min}</p>`
			html += `<p class="pb-0 mb-0">${data.weather[0].description}</p>`
			html += `<p><img id="weeklyWeatherIcon" class="img-fluid" src=https://openweathermap.org/img/w/${data.weather[0].icon}.png  alt="Weather icon"></p>`
			html += `</section>`
			$(`#current`).html(html);
		})
	}


	function updateWeather(coordinates) {
		$.get("http://api.openweathermap.org/data/2.5/onecall", {
			APPID: OWM_KEY,
			lat: coordinates[1],
			lon: coordinates[0],
			units: "imperial"
		}).done(function (data) {
			let html = ``
			console.log(data)
			for (let i = 1; i < 5; i++) {
				let todayDate = getTime(data.daily[i].dt, data.timezone_offset)
				html += `<section class="card col-2 my-3 py-1"><h6>${todayDate}</h6><br>`
				html += `<p class="my-1">High: ${data.daily[i].temp.max}</p>`
				html += `<p>Low: ${data.daily[i].temp.min}</p>`
				html += `<p class="pb-0 mb-0">${data.daily[i].weather[0].description}</p>`
				html += `<h1><img id="weeklyWeatherIcon" class="img-fluid" src=https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png  alt="Weather icon"></h1>`
				html += `</section>`
			}
			$(`#current`).append(html);
		});
	}

	$(`#submit`).on(`click`, function () {
		geocode($(`#searchCity`).val(), API_PRACTICE).then(function (result) {
			console.log(result);
			coordinates = result;
			updateMap(coordinates);
			currentWeather(coordinates);
			updateWeather(coordinates);
		})
	})

	function getTime(unixTime, offset, option) {
		let millisecond = ((unixTime + 25270) + offset) * 1000
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