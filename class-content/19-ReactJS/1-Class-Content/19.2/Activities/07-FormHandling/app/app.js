// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the Main Component
var Form = require('./Components/Form')

// This code here allows us to render our main component (in this case "Form")
ReactDOM.render(

	<Form />,
	document.getElementById('app')
)