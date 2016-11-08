var React = require('react');

var PlanetList = require('./PlanetList.jsx');


var AppView = React.createClass({

	render: function () {
		return (
			<main>
				<h1>The Star Wars Galaxy and What Resides</h1>
				<PlanetList />
			</main>
		)
	}


});

module.exports = AppView;