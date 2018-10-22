document.write('<br/>logging in...')

let login = (user, pw) => {
	if (user === 'admin' && pw === 'm123') {
		console.log('<br/>logged in!!');

		return;
	}
}

login('admin', 'm123');