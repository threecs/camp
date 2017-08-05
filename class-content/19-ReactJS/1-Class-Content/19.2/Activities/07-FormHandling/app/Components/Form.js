// Include React 
var React = require('react');

// This is the main component. It includes the banner and form element.
var Form = React.createClass({

	// Here we set a generic state associated with the text being searched for
	getInitialState: function(){
		return {
			num1: 0,
			num2: 0,
			text: ""
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

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h2>Form Capture</h2>
						<p><em>Type numbers and text in the appropriate boxes.</em></p>
					</div>


					<div className="col-md-6">
				
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">Form</h3>
							</div>
							<div className="panel-body text-center">

									<form>
										<div className="form-group">
											<h4 className=""><strong>Number 1</strong></h4>

											{/*Note how each of the form elements has an id that matches the state. This is not necessary but it is convenient.
												Also note how each has an onChange event associated with our handleChange event. 
											*/}
											<input type="number" value={this.state.value} className="form-control " id="num1" onChange= {this.handleChange} required/>

											<h4 className=""><strong>Number 2</strong></h4>
											<input type="number" value={this.state.value} className="form-control " id="num2" onChange= {this.handleChange} required/>

											<h4 className=""><strong>Random Text</strong></h4>
											<input type="text" value={this.state.value} className="form-control " id="text" onChange= {this.handleChange} required/>

										</div>

									</form>

							</div>
						</div>

					</div>

					<div className="col-md-6">
				
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">Results</h3>
							</div>
							<div className="panel-body text-center">

									<form>
										<div className="form-group">

											<h2>{this.state.num1} + {this.state.num2} = {this.state.num1 + this.state.num2}</h2>
											<h2>{this.state.text} Reversed: {this.state.text.split("").reverse().join("")}</h2>
										</div>

									</form>

							</div>
						</div>

					</div>

				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Form;