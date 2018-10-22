/* requirejs version

define([], function() {

	//let bs = () => {

		return {
					start: (domId) => {
						document.getElementById(domId).innerHTML = "play here!";
					}
				};
	//}

	//return bs;
});*/


let bs = {
			start: (domId) => {
				document.getElementById(domId).innerHTML = "play here!";
			}
		};

export {bs};