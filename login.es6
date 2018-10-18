document.write('loggin in...')

let login = (user, pw) => {
	if (user === 'admin' && pw === 'm123') {
		document.write('logged in!!');

		return;
	}
}

login('admin', 'm123');