var React = require('react');

var Counter = React.createClass({

	render: function () {
		return <div>
			<button>{this.props.phrase}</button>
		</div>;
	}

});

module.exports = Counter;