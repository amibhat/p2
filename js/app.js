
//require('./login')
import {} from './login'

/* requirejs load example
let bs = require('./playgrounds/binary_search/BinarySearch');
*/

import {bs} from './playgrounds/binary_search/BinarySearch';

let $ = require('jquery'); 

//import {$} from 'jquery';

$(document).ready(function() {
	document.getElementById('home').innerHTML = "Welcome to meet nanni!!<br/>";

	bs.start('pane_binary_search');
});

