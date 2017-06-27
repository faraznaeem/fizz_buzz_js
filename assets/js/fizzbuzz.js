function fizzBuzz(){
};

fizzBuzz.prototype.fizzBuzzFunction = function(integer){
  if(integer % 3 === 0){
    return ("fizz");
  }
  else if (integer % 5 === 0) {
    return ("buzz");
  }

};
