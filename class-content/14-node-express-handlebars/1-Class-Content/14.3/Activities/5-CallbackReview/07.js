var sum = function(numOne, numTwo){
	return numOne + numTwo;
}

var subtract = function(numOne, numTwo){
	return numOne - numTwo;
}

var multiply = function(numOne, numTwo){
	return numOne * numTwo;
}

var anythingGoes = function(functionOne, functionTwo, functionThree){
	return functionThree(functionOne(3,4), functionTwo(7,2));
}

//challenge: what does this return?
anythingGoes(multiply, subtract, sum);
