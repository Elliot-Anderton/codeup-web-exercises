(() => {
	const users = [
		{
			id: 1,
			name: 'ryan',
			email: 'ryan@codeup.com',
			languages: ['clojure', 'javascript'],
			yearsOfExperience: 5
		},
		{
			id: 2,
			name: 'luis',
			email: 'luis@codeup.com',
			languages: ['java', 'scala', 'php'],
			yearsOfExperience: 6
		},
		{
			id: 3,
			name: 'zach',
			email: 'zach@codeup.com',
			languages: ['javascript', 'bash'],
			yearsOfExperience: 7
		},
		{
			id: 4,
			name: 'fernando',
			email: 'fernando@codeup.com',
			languages: ['java', 'php', 'sql'],
			yearsOfExperience: 8
		},
		{
			id: 5,
			name: 'justin',
			email: 'justin@codeup.com',
			languages: ['html', 'css', 'javascript', 'php'],
			yearsOfExperience: 9
		}
	];

	const atLeastThree = users.filter(arr => arr.languages.length > 2);
	// console.log(atLeastThree);

	const emailList = users.map(arr => arr.email);
	// console.log(emailList);

	const totalYears = users.reduce((experience, user) => {
		return experience + user.yearsOfExperience;
	}, 0);
	// console.log(totalYears);
	const averageYears = (years, num) => years / num;
	// console.log(averageYears(totalYears, users.length));

	const longestEmail = users.reduce((longest, user) => {
		if (user.email.length > longest.length) {
			longest = user.email;
		}
		return longest;
	}, '');
	// console.log(longestEmail);

	const stringOfNames = users.reduce((names, user) => {
		return names + `${user.name}, `;
	}, '');
	// console.log(stringOfNames);

	const uniqueLanguages = users.reduce((arr, user) => {
		for (let lang of user.languages) {
			if (!arr.includes(lang)) {
				arr.push(lang)
			}
		}
		return arr
	}, [])

	console.log(uniqueLanguages)

	// const unique =
})();