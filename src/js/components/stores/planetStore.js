var EventEmitter = require('eventemitter3');
var $ = require('jquery');

var planetStore = Object.create(EventEmitter.prototype);
EventEmitter.call(planetStore);

var planet = [];

planetStore.getPlanet = function () {
	return planet;
}

planetStore.fetchPlanet = function (page) {
	page = page || 1
	$.ajax({
		url: "http://swapi.co/api/planets?page=" + page,
		success: function (response) {
			var results = response.results;
			planet = planet.concat(results);
			planetStore.emit('update');
		}
	})

	return planet;
}

module.exports = planetStore;