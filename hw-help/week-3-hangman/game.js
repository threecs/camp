// GLOBAL VARIABLES
// ===============================================================
var wordBank = ['apple', 'oranges', 'peaches', 'raspberries'];
var targetWord = "";
var targetWordArray = [];
var wrongLetters = [];
var blanksAndLetters = [];

// FUNCTIONS
// ===============================================================
function startGame()
{
	targetWord = wordBank[Math.floor(Math.random()* wordBank.length)];
	targetWordArray = targetWord.split("");

	for(var j = 0; j < targetWord.length; j++)
	{
		blanksAndLetters.push("_");
	}

	//Update the Page

	document.getElementById('wordToGuess').innerHTML = blanksAndLetters.join(" ");
	//alert("start game!");
	//targetWord 
}

function checkLetter(letter)
{
	var isInWord = false;
	console.log("Letter: " + letter);
	for(var i = 0; i < targetWordArray.length; i++)
	{
		if( letter == targetWordArray[i] ) {
			isInWord = true;
		}
	}

	// If letter is in word
	if( isInWord ) 
	{
		//TODO: Update blanks and letters
	}
	else {
		// Else not in word
		// Add this letter to the wrongLetters thing
	}
	


}

// MAIN PROGRAM
// ===============================================================
startGame();

document.onkeyup = function(event)
{
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
	checkLetter(userGuess);
}

// TESTING/DEBUGGING
console.log(targetWord);
console.log(targetWordArray);