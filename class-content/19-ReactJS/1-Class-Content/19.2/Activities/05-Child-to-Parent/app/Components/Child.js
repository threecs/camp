// Include React 
var React = require('react');

var Parent = require("./Parent")

// Create the Child Component
var Child = React.createClass({

	// Child has a state that follows the number of clicks
	getInitialState: function(){
		return {
			number: 0
		}
	},

	// Whenever the button is clicked we'll add to the child's click count. 
	// Then use the parent's setParent function to set that as well. 
	handleClick: function(){
		this.setState({
			number: this.state.number + 1
		});

		this.props.setParent(this.state.number);
	},

	// Whenever the button is clicked we'll use setState to reset the clickCounter.
	// This will reset the clicks -- and it will be passed upward to the parent as well.
	resetClick: function(){

		this.setState({
			number: 0
		});

		this.props.setParent(0);
	},

	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Child</h3>
				</div>
				<div className="panel-body text-center">

					<p>
						{/*Here we create a button click. Note how we have an onClick event associate with our handleClick function.*/}
						<a className="btn btn-primary btn-lg" type="button" onClick={this.handleClick}>CLICK ME!!!!</a>
						<span> </span>
						{/*Here we create a button click for resetting the clickCounter*/}
						<a className="btn btn-danger btn-lg" type="button" onClick={this.resetClick}>Reset</a>
					</p>

				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Child;