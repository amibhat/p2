
//require('./login')
import {} from './login'

/* requirejs load example
let bs = require('./playgrounds/binary_search/BinarySearch');
*/

import bsPlugin from './playgrounds/binary_search/BinarySearch';

/*
require version
let $ = require('jquery'); 
*/

import $ from 'jquery';

/*$('#menu').append('<a href="#">Home</a>');
$('#menu').append('<a href="#">Binary Search</a>');*/

let menuItemId = 0;

let addMenuItem = (menuItemName, callback) => {
	let argObj = {};

	$('#menu').append('&nbsp&nbsp&nbsp&nbsp<a href="#" id="menu_' + menuItemId + '">' + menuItemName + '</a>');

	argObj.playgroundDomId = 'playground';

	$('#menu_' + menuItemId).on('click', argObj, callback);

	menuItemId++;
}

let addPlugin = (p) => {
	addMenuItem(p.menuItemName, p.callbackFromMenu);
}

let shout = (e) => {
	$('#' + e.data.playgroundDomId).html("Welcome to meet nanni!!");
}

addMenuItem('Home', shout);
addPlugin(new bsPlugin());




//addMenuItem('Binary Search');

/*$(document).ready(function() {
debugger;
	$('#playground').innerHTML = "<br/>Welcome to meet nanni!!<br/>";

	bs.start('pane_binary_search');
});*/