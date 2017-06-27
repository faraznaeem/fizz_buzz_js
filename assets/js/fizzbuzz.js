function fizzBuzz(){
}

fizzBuzz.prototype.fizzBuzzFunction = function(integer){
  if(integer % 3 === 0 && integer % 5 === 0){
    return ("FizzBuzz!");
  }
  else if (integer % 5 === 0) {
    return ("buzz");
  }
  else if (integer % 3 === 0) {
    return ("fizz");
  }

};
