let login = (user, pw) => {
	console.log('<br/>logging in...')
	if (user === 'admin' && pw === 'm123') {
		console.log('<br/>logged in!!');

		return;
	}
}

login('admin', 'm123');