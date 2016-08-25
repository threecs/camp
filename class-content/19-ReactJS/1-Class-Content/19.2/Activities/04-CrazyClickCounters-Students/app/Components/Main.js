// Include React 
var React = require('react');

// Here we include all of the sub-components
var Adder = require('./Panels/Adder');
var Multiplier = require('./Panels/Multiplier');
var Randomizer = require('./Panels/Randomizer');
var Imgr = require('./Panels/Imgr');

// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			clicks: 0
		}
	},

	// Whenever the button is clicked we'll use setState to add to the clickCounter
	// Note the syntax for setting the state
	handleClick: function(){
		this.setState({clicks: 1 + this.state.clicks});
	},

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h1>Hey you! Click this button!</h1>
						<p>I do crazy things.</p>
						<p>
							{/*Here we create a button click. Note how we have an onClick event associate with our handleClick function.*/}
							<a className="btn btn-primary btn-lg" type="button" onClick={this.handleClick}>CLICK ME!!!!</a>
						</p>
					</div>


					{/*Below we add each of the sub components. Note how we "pass" in the click count*/}
					<div className="col-md-3">
				
						<Adder clicks={this.state.clicks}/>

					</div>


					<div className="col-md-3">
				
						<Multiplier clicks={this.state.clicks} />

					</div>


					<div className="col-md-3">

						<Randomizer clicks={this.state.clicks} />

					</div>

					<div className="col-md-3">

						<Imgr clicks={this.state.clicks} />

					</div>


				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;