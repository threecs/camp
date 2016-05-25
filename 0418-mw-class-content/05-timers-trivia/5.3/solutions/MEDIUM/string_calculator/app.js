var test1 = "Add 2 and 4";
var test2 = "Subtract 3 from 10";
var test3 = "Multiply 8 and 2";
var test4 = "Divide 30 by 3";

var stringCalculator = function (string){

  //Split input into individual words
  //Using toLowerCase to ensure it will match what we're checking in the switch statement
  var splitString = string.toLowerCase().split(" ");

  //Check to see if array is the correct length, check to see if whats at the 1st and 3rd index positions are numbers
  if(splitString.length != 4 || isNaN(parseInt(splitString[1])) || isNaN(parseInt(splitString[3]))){
    console.log('Invalid Request Format. Try Again');
  } else{
    //Checking the first value for a match
    switch(splitString[0]){
      case "multiply":
        return splitString[1] * splitString[3];
      case "divide":
        return splitString[1] / splitString[3];
      case "subtract":
        return splitString[3] - splitString[1];
      case "add":
        return parseInt(splitString[1]) + parseInt(splitString[3]);
      default:
        //if the above arent met, runs this
        console.log("Error, please make sure your spelling is correct and try again.");
        break;
    }
  }
};
