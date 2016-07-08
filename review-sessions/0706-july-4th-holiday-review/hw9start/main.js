var game = require('./game.js');
var inquirer = require('inquirer');

inquirer.prompt([{
	name: 'letter',
	type: 'text',
	message: 'Enter a Letter:',
	validate: function(str){
		return /[a-z]{1}/i.test(str);
	}
}]).then(function(answers){
	var letter = answers.letter;
});