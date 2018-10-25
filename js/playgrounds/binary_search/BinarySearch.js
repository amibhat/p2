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


import $ from 'jquery';

function bsPlugin() {

		function* numGenerator(end = Infinity) {
			//let num = 0;

			for(let i = 0; i < end; i ++) {
				yield i;
			}
		}

		let binarySearch = (arr, numToSearch) => {
			return arr.includes(numToSearch);
		}

		let handleSearchClick = (e) => {

			let numToSearch = Number($('#numToSearch')[0].value);
			let txtFound = "did not search";

			let boolFound = binarySearch(searchData, numToSearch);	

			$('#found')[0].innerText = boolFound && 'Found' || 'Not Found';
		}

		let searchData = [];

		let buildSearchData = ($el) => {
			for(let n of numGenerator(10)) {
				searchData.push(n);
				$el.append(n + " ");
			}
		}

		let start = ($pgEl) => {
			$pgEl.html("<br/><br/><br/>Search Here<br/><br/>");

			buildSearchData($pgEl);

			$pgEl.append('<br/><input id="numToSearch" type="text">');
			$pgEl.append('<br/><input type="button" value="Search">');
			$pgEl.append('<br/><br/><div id="found"></div>')

			$pgEl.find('input[type="button"]').click({ val: $pgEl.find('#numToSearch').value}, handleSearchClick);
			//f();

		}


		return {

			menuItemName: 'Binary Search',

			callbackFromMenu: (e) => {
				//document.getElementById(e.data.playgroundDomId).innerHTML = "search here!";
				start($('#' + e.data.playgroundDomId));
			},



			callbackParams: {}
		};
	};

export default bsPlugin;