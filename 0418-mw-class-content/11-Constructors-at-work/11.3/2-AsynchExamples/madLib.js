var inquirer = require('inquirer');

function MadLib(){
	this.adj = [];
	this.noun = [];
	this.verb = [];
	this.story = function(){
		for(var i = 0; i < this.adj.length; i++){
			console.log("The " + this.adj[i] + "  " + this.noun[i] + " " + 
			this.verb[i] + "!");
		}
	}
}

var count = 0;
var newWord = new MadLib();

function playMadLibs(){
	if(count < 3){

		inquirer.prompt([
		{
			name: 'adjective',
			message: 'Please type an adjective',
			type: 'input'
		},
		{
			name: 'noun',
			message: 'Please type a noun',
			type: 'input'
		},
		{
			name: 'verb',
			message: 'Please type a verb',
			type: 'input'
		}
		]).then(function(answers){
			
			newWord.adj.push(answers.adjective);
			newWord.noun.push(answers.noun);
			newWord.verb.push(answers.verb);
			count++;
			playMadLibs();
		});
	} else {
		newWord.story();
	}
}
playMadLibs();