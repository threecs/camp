// Include React 
var React = require('react');

// Here we include all of the sub-components
var Child = require('./Child');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Parent = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h2>Warmup!</h2>
						<p><em>Components and Sub-components</em></p>
					</div>


					{/*This represents the "Parent"*/}
					<div className="col-md-12">
				
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">Parent</h3>
							</div>
							<div className="panel-body text-center">

								{/* This is where we'll show the click count for the parent*/}
								<h2>Hey I'm a Parent!</h2>

								{/*Here we'll deploy the child component. We'll pass it the parent's click counter as a "state"*/}
								<Child />

							</div>
						</div>


					</div>

				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Parent;