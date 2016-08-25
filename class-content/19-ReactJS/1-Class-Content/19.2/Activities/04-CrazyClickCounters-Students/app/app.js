// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the Main Component
var Main = require('./Components/Main')

// This code here allows us to render an entire block of Bootstrap layout HTML
ReactDOM.render(

	<Main />,
	document.getElementById('app')
)