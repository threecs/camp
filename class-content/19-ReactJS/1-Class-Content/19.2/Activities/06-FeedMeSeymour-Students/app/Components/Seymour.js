// Include React 
var React = require('react');

// Here we include all of the sub-components
var Child1 = require('./Children/Child1');
var Child2 = require('./Children/Child2');
var Child3 = require('./Children/Child3');


// This is the main component. It includes the banner and button.
// Whenever you click the button it will communicate the click event to all other sub components.
var Seymour = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			consumed: 0
		}
	},

	// Here we create a function for updating the Seymour based on clicks received by the child
	// We will then give the child access to this function
	feedSeymour: function(food){
		this.setState({
			consumed: this.state.consumed + food
		})
	},

	// This lifecycle event will run every single time the Seymour component is updated by the children. 
	componentDidUpdate: function(){
		console.log("Updated");
		if (this.state.consumed > 500){

			alert("You have done well. Seymour is very full!");
			
			this.setState({
				consumed: 0
			})
		}
	},

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h2>Feed Me Seymour!</h2>
						<p><em>Click on Seymour's Children to Feed Him</em></p>

					</div>


					{/*This represents the "Seymour"*/}
					<div className="col-md-12">
				
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">Seymour</h3>
							</div>
							<div className="panel-body text-center">

								<h1>Food Consumed {this.state.consumed} </h1>
								<img src="https://media.giphy.com/media/pBj0EoGSYjGms/giphy.gif" />

							</div>
						</div>

					</div>

					<div className="col-md-4">
				
						{/*Included first child*/}
						<Child1 feedSeymour={this.feedSeymour}/>

					</div>


					<div className="col-md-4">
				
						{/*Included second child*/}
						<Child2 feedSeymour={this.feedSeymour} />

					</div>

					<div className="col-md-4">
						
						{/*Included third child*/}
						<Child3 feedSeymour={this.feedSeymour} />

					</div>


				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Seymour;