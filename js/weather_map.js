$(function () {

	//-------------------------Global var used everywhere---------------------------//
	let coordinates = [-121.866126, 42.577636];

	//-------------------------List of initial Calls---------------------------//
	updateMap(coordinates);
	updateWeather(coordinates);

	//-------------------------Creates and updates map---------------------------//
	function updateMap(coordinates) {
		mapboxgl.accessToken = MBWM_KEY;
		let map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v9',
			zoom: 10,
			center: coordinates
		})
		updateMarker(map, coordinates);
	}

	//-------------------------Creates and updates marker---------------------------//
	function updateMarker(map, coordinates) {
		const marker = new mapboxgl.Marker({
			draggable: true
		})
			.setLngLat(coordinates)
			.addTo(map);
		marker.on('dragend', function () {
			onDragEnd(marker);
		})
	}

	//-------------------------Updates coordinates array on drag end---------------------------//
	function onDragEnd(marker) {
		const lngLat = marker.getLngLat();
		coordinates.splice(0, 1, lngLat.lng);
		coordinates.splice(1, 1, lngLat.lat);
		updateWeather(coordinates);
	}

	//-------------------------Uses GeoCode to update coordinates for search---------------------------//
	$(`#submit`).on(`click`, function () {
		geocode($(`#searchCity`).val(), API_PRACTICE).then(function (result) {
			coordinates = result;
			updateMap(coordinates);
			updateWeather(coordinates);
		})
	})

	//-------------------------Gets forecast with one call---------------------------//
	function updateWeather(coordinates) {
		$.get("http://api.openweathermap.org/data/2.5/onecall", {
			APPID: OWM_KEY,
			lat: coordinates[1],
			lon: coordinates[0],
			units: "imperial"
		}).done(currentWeather)
		reverseGeocode({lng: coordinates[0], lat: coordinates[1]}, MBWM_KEY).then(function (results) {
			$(`#place`).html(results)
		})
	}

	//-------------------------Handles Data from request------------------------------//
	function currentWeather(data) {
		console.log(data)
		let todayDate = getTime(data.current.dt, data.timezone_offset, true);
		$(`#weather`).html(`<h5>${todayDate}</h5>`);
		rainDance(`Today`, `Temp`, data.current.temp, `Feels Like`, data.current.feels_like, data.current.weather[0]);
		for (let i = 1; i < 5; i++) {
			let todayDate = getTime(data.daily[i].dt, data.timezone_offset);
			let daily = data.daily[i];
			rainDance(todayDate, `High`, daily.temp.max, `Low`, daily.temp.min, daily.weather[0]);
		}
	}

	//-------------------------Renders HTML---------------------------//
	function rainDance(day, high, max, low, min, weather) {
		let html = ``
		html += `<section class="card col-2 my-3 py-1"><h5>${day}</h5><br>`
		html += `<p class="my-1">${high}: ${Math.round(max)}</p>`
		html += `<p>${low}: ${Math.round(min)}</p>`
		html += `<p class="pb-0 mb-0">${weather.description}</p>`
		html += `<h1><img id="weeklyWeatherIcon" class="img-fluid" src=https://openweathermap.org/img/w/${weather.icon}.png  alt="Weather icon"></h1>`
		html += `</section>`
		$(`#weather`).append(html);
	}

	//-------------------------Formats Time and Date---------------------------//
	function getTime(unixTime, offset, isItThough) {
		let tz = new Date().getTimezoneOffset() * 60;
		let millisecond = ((unixTime + tz) + offset) * 1000;
		let dateObject = new Date(millisecond);
		let options;
		if (isItThough) {
			options = {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit'
			}
		} else {
			options = {
				weekday: 'long'
			}
		}
		return dateObject.toLocaleString("en-US", options);
	}

})