var React = require('react');

var inhabitantStore = require('./stores/inhabitantStore');

var Inhabitant = React.createClass({

	getInitialState: function () {
		return {
			inhabitant: inhabitantStore.fetchInhabitant(this.props.url)
		};
	},

	componentWillMount: function () {
		inhabitantStore.on('update', this.handleUpdate);
	},

	render: function () {
		if (this.state.inhabitant) {
			// use this.state.inhabitant to render deets
			return <div>{this.state.inhabitant.name}</div>;
		} else {
			// show "loading" maybe?
			return <div>Loading</div>;
		}
	},

	handleUpdate: function () {
		this.setState({
			inhabitant: inhabitantStore.getInhabitant(this.props.url)
		});
	},

	componentWillUnmount: function () {
		inhabitantStore.off('update', this.handleUpdate);
	}

})

module.exports = Inhabitant;