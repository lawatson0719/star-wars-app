var React = require('react');

var PlanetDets = require('./PlanetDets.jsx');
var planetStore = require('./stores/planetStore');


var PlanetListItem = React.createClass({


	getInitialState: function () {
		return {
			detailsVisible: false
		}
	},

	render: function () {
		var details;

		if(this.state.detailsVisible) {
			details = <PlanetDets 
			key={this.props.url} 
			residents={this.props.residents}
			terrain={this.props.terrain}/>
		}

		return (
			<div onClick={this.handleDetsClick}>
				<h2>{this.props.name}</h2>
				{details}
			</div>
		);
	},

	handleDetsClick: function () {
		this.setState({
			detailsVisible: !this.state.detailsVisible
		});
	}

});

module.exports = PlanetListItem;