// Include React 
var React = require('react');

// Here we include all of the sub-components
var Child = require('./Child');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Parent = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			clicks: 0
		}
	},

	// Here we create a function for updating the parent based on clicks received by the child
	// We will then give the child access to this function
	setParent: function(newClicks){
		this.setState({
			clicks: newClicks
		})
	},

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h2>When Children Rebel: A Tale of Reactive Components</h2>
						<p><em>Children influence parent via callbacks given to them by the parent.</em></p>

					</div>


					{/*This represents the "Parent"*/}
					<div className="col-md-12">
				
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">Parent</h3>
							</div>
							<div className="panel-body text-center">

								<h1>{this.state.clicks}</h1>
								{/*Here we'll deploy the child component. We'll pass it the parent's function for setting state*/}
								<Child setParent = {this.setParent}/>

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