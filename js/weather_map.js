$(function () {

	//-------------------------Global var used everywhere---------------------------//
	let coordinates = [-121.866126, 42.577636];

	//-------------------------List of initial Calls---------------------------//
	updateMap();
	updateWeather();

	//-------------------------Creates and updates map---------------------------//
	function updateMap() {
		mapboxgl.accessToken = MBWM_KEY;
		let map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v9',
			zoom: 10,
			center: coordinates
		})
		updateMarker(map);
	}

	//-------------------------Creates and updates marker---------------------------//
	function updateMarker(map) {
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
		coordinates.splice(0, 2, lngLat.lng, lngLat.lat);
		updateWeather();
	}

	//-------------------------Uses GeoCode to update coordinates for search---------------------------//
	$(`#submit`).on(`click`, function () {
		geocode($(`#searchCity`).val(), API_PRACTICE).then(function (result) {
			coordinates = result;
			updateMap();
			updateWeather();
		})
	})

	//-------------------------Gets forecast with one call---------------------------//
	function updateWeather() {
		$.get("http://api.openweathermap.org/data/2.5/onecall", {
			APPID: OWM_KEY,
			lat: coordinates[1],
			lon: coordinates[0],
			units: "imperial"
		}).done(currentWeather)
		getPlace()
	}


	//-------------------------Handles Data from request------------------------------//
	function currentWeather(data) {
		console.log(data)
		let current = data.current;
		let todayDate = getTime(current.dt, data.timezone_offset, true);

		$(`#weather`).html(`<h5>${todayDate}</h5>`);
		rainDance(`Today`, `Temp`, current.temp, `Feels Like`, current.feels_like, current.weather[0])

		for (let i = 1; i < 5; i++) {
			let daily = data.daily[i];
			let todayDate = getTime(daily.dt, data.timezone_offset);

			rainDance(todayDate, `High`, daily.temp.max, `Low`, daily.temp.min, daily.weather[0]);
			hourly(data)
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

	//-------------------------Renders for hourly---------------------------//
	function hourly(data) {
		let html = `<ul class="">`
		for (let i = 0; i < 48; i++) {
			let hourly = data.hourly[i];
			let hour = getTime(hourly.dt, data.timezone_offset, false);
			html += `<li class="row ">`
			html += `<span class="col me-5">${hour}</span>`
			html += `<span class="col-4 mx-5">Temp: ${hourly.temp}</span>`
			html += `<span class="col ms-5">${hourly.weather[0].description}</li>`
		}
		html += `<ul>`

		$(`#hour`).html(html);
	}

	//-------------------------Handles reverseGeoCode to get correct place name---------------------------//
	function getPlace() {
		reverseGeocode({lng: coordinates[0], lat: coordinates[1]}, MBWM_KEY).then(function (features) {
			let place;

			if (features.length >= 7) {
				place = features[3].place_name;
			} else if (features.length >= 3) {
				place = features[2].place_name;
			} else if (features.length === 2) {
				place = features[1].place_name;
			} else {
				place =`Lat: ${coordinates[1].toFixed(4).toString()}, Long: ${coordinates[0].toFixed(4).toString()}`;
			}
			$(`#place`).html(place)
		})
	}

	//-------------------------Formats Time and Date---------------------------//
	function getTime(unixTime, offset, full) {
		let tz = new Date().getTimezoneOffset() * 60;
		let millisecond = ((unixTime + tz) + offset) * 1000;
		let dateObject = new Date(millisecond);
		let options;

		if (full) {
			options = {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit'
			}
		} else if (full === false) {
			options = {
				weekday: 'long',
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