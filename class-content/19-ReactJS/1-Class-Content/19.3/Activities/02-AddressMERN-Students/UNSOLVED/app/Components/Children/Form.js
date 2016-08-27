// Include React 
var React = require('react');

// Component creation
var Form = React.createClass({

	// Here we set a generic state associated with the text being searched for
	getInitialState: function(){
		return {
			term: ""
		}
	},

	// This function will respond to the user input 
	handleChange: function(event){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details: 
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

	// When a user submits... 
	handleClick: function(){

		console.log("CLICK");
		console.log(this.state.term);
		
		// Set the parent to have the search term
		this.props.setTerm(this.state.term);

	},

	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Query</h3>
				</div>
				<div className="panel-body text-center">

						<form>
							<div className="form-group">
								<h4 className=""><strong>Location</strong></h4>

								{/*Note how each of the form elements has an id that matches the state. This is not necessary but it is convenient.
									Also note how each has an onChange event associated with our handleChange event. 
								*/}
								<input type="text" className="form-control text-center" id="term" onChange= {this.handleChange} required/>
								<br />
								<button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
							</div>

						</form>
				</div>
			</div>



		)
	}
});

// Export the component back for use in other files
module.exports = Form;