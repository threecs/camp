var primeCheck = function(number){

  //loop to check to see if a number has divisors other than one and itself
  // loops from two to one less than the number we're checking
  for(var i = 2; i < number; i++){
    if (number % i === 0 ){
      //if its evenly divisible by a number between two and one less than itself, it is not prime, return false
      return false;
    }
  }

  //a prime number has to be greater than one, even if it has a divisor other than one and itself
  return number > 1;
};
