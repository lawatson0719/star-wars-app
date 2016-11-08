var EventEmitter = require('eventemitter3');
var $ = require('jquery');

var inhabitantStore = Object.create(EventEmitter.prototype);
EventEmitter.call(inhabitantStore);

var residents = {};

inhabitantStore.getInhabitant = function (url) {
	return residents[url] || null;
}

inhabitantStore.fetchInhabitant = function (url) {
	$.ajax({
		url: url,
		success: function (response) {
			residents[url] = response;
			inhabitantStore.emit('update');
		}
	});

	return residents[url] || null;
}

module.exports = inhabitantStore;