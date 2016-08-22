// Include React 
var React = require('react');

// Create the Header component
// Notice how the header uses .createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Header = React.createClass({

	render: function(){

		return(
			<h1>I'm a header!</h1>
		)
	}
});

// Export the componen back for use in other files
module.exports = Header;