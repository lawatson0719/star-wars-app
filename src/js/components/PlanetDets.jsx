var React = require('react');

var Inhabitant = require('./Inhabitant.jsx');

var PlanetDets = React.createClass({

	render: function () {
		return (
			<div>
				<div>
					<h4>Inhabitants</h4>
					{this.props.residents.map(function (resident) {
						return <Inhabitant url={resident} key={resident} />;
					})}
				</div>
				<div>
					<h4>Terrain</h4>
					{this.props.terrain}
				</div>
			</div>
		)
	}

})

module.exports = PlanetDets;