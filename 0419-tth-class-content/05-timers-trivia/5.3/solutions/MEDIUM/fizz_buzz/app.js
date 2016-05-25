var fizzBuzz = function(){

  //loop 100 times, starting from the number 1
  for(var i = 1; i <= 100; i++){

    //if divisible by 3 and 5
    if(i%3 === 0 && i%5 === 0){
      console.log('FizzBuzz');

      //if divisible by 3
    } else if (i%3 === 0){
      console.log('Fizz');

      //if divisible by 5
    } else if (i%5 === 0){
      console.log('Buzz');

      //if not divisible either 3 or 5
    } else {
      console.log(i);
    }
  }
};
