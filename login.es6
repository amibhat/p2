document.write('<br/>loggin in...')

let login = (user, pw) => {
	if (user === 'admin' && pw === 'm123') {
		document.write('<br/>logged in!!');

		return;
	}
}

login('admin', 'm123');