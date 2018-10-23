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


let bsPlugin = {
			start: (domId) => {
				document.getElementById(domId).innerHTML = "play here!";
			}
		};

export default {bsPlugin};