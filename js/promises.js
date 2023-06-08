(() => {

	const url = `https://api.github.com/users`;
	const key = {'Authorization': `token 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`}
	const userLogin = user => {
		return new Promise(resolve => {
			fetch(`${url}/${user}/events/public`, {headers: key})
				.then(data => data.json())
				.then(data => {
					let created = data[0].created_at;
					return {created};
				})
				.then(response => {
					resolve(response);
				});
		});
	};


	userLogin(`elliot-anderton`).then((result) => console.log(`Last commit was made ${result.created}`));


	function wait(num) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(`You'll see this after ${num / 1000} seconds`)
			}, num)
		})
	}

	// wait(1000).then((message) => console.log(message))
	// wait(3500).then((message) => console.log(message))

})();