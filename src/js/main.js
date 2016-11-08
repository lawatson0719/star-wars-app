var React = require('react');
var ReactDom = require('react-dom');

var AppView = require('./components/AppView.jsx');

ReactDom.render(<AppView />, document.querySelector('#app'));