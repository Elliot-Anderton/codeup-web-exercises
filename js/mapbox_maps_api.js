$(function () {
	let zoomSelect = $(`#zoomlevel`);
	// let centerPosition = [-123.26124, 44.5597];

	loadmap();

	zoomSelect.on(`change`, loadmap);

	function loadmap() {

		mapboxgl.accessToken = API_PRACTICE;
		let map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v9',
			zoom: zoomSelect.val(),
			center: [-123.26124, 44.5597]
		});

		setMarkers(map);

		$(`#submit`).on(`click`, function () {
			geocode($(`#searchAddress`).val(), API_PRACTICE).then(function (result) {
				console.log(result);
				map.flyTo({
					center: (result)

				});
				let marker3 = new mapboxgl.Marker()
					.setLngLat(result)
					.addTo(map)
			});
		});
	}

	function setMarkers(map) {
		let marker = new mapboxgl.Marker()
			.setLngLat([-123.26124, 44.5597])
			.addTo(map);

		let del_alma = new mapboxgl.Popup()
			.setHTML("<p>del Alma!</p>");

		marker.setPopup(del_alma);

		let marker2 = new mapboxgl.Marker()
			.setLngLat([-123.25846, 44.565205])
			.addTo(map);

		let kingfish = new mapboxgl.Popup()
			.setHTML("<p>Kingfish</p>");

		marker2.setPopup(kingfish);

		let marker3 = new mapboxgl.Marker()
			.setLngLat([-123.367635, 44.5403])
			.addTo(map);

		let dirtroad = new mapboxgl.Popup()
			.setHTML("<p>Dirt Road</p>");

		marker3.setPopup(dirtroad);
	}


})