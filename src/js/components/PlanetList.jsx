var React = require('react');

var planetStore = require('./stores/planetStore');
var PlanetListItem = require('./PlanetListItem.jsx');

var PlanetList = React.createClass({

	getInitialState: function () {
		return {
			count: 1,
			planet: planetStore.fetchPlanet()
		};
	},

	componentWillMount: function () {
		var _this = this;
		planetStore.on('update', function () {
			_this.setState({
				planet: planetStore.getPlanet()
			});
		});
	},

	render: function () {
		var planetListItems = this.state.planet.map(function (planet) {
			return <PlanetListItem 
				key={planet.url} 
				name={planet.name}
				residents={planet.residents}
				terrain={planet.terrain}
				/>
		})
		return (
			<div>
				{planetListItems}
				<button onClick={this.handleLoadClick}>More Planets</button>
			</div>
		);
	},

	handleLoadClick: function () {
		this.setState({
			count: this.state.count += 1
		})
		planetStore.fetchPlanet(this.state.count);
	}

})

module.exports = PlanetList;