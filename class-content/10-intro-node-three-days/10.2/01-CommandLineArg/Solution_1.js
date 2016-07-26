// // Get Variables
var argOne = process.argv[2]
var argTwo = process.argv[3]

// Run the test
if (argOne === argTwo){

	// Print equality.
	console.log(true);
}
else{
	console.log(false);
}

// BONUS: If the sum of remainers is still 0... then that means both were 0 to begin with. 
if ((argOne % 7) + (argTwo % 7) === 0){
	console.log(true);
}
