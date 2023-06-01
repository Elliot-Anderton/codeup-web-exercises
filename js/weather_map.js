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
		updateMarker(map, coordinates)
	}

	function updateMarker(map, coordinates) {
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
			$(`#current`).html(html);
			rainDance(`Today`,  data.main.temp_max,  data.main.temp_min, data.weather[0])
		})
	}


	function updateWeather(coordinates) {
		$.get("http://api.openweathermap.org/data/2.5/onecall", {
			APPID: OWM_KEY,
			lat: coordinates[1],
			lon: coordinates[0],
			units: "imperial"
		}).done(function (data) {
			for (let i = 1; i < 5; i++) {
				let todayDate = getTime(data.daily[i].dt, data.timezone_offset)
				let daily = data.daily[i];
				rainDance(todayDate,  daily.temp.max,  daily.temp.min, daily.weather[0])
			}
		});
	}

	function rainDance(day, max, min, weather) {
		let html = ``
		html += `<section class="card col-2 my-3 py-1"><h6>${day}</h6><br>`
		html += `<p class="my-1">High: ${max}</p>`
		html += `<p>Low: ${min}</p>`
		html += `<p class="pb-0 mb-0">${weather.description}</p>`
		html += `<h1><img id="weeklyWeatherIcon" class="img-fluid" src=https://openweathermap.org/img/w/${weather.icon}.png  alt="Weather icon"></h1>`
		html += `</section>`
		$(`#current`).append(html);
	}

	$(`#submit`).on(`click`, function () {
		geocode($(`#searchCity`).val(), API_PRACTICE).then(function (result) {
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