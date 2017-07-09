function fizzBuzz(integer){

fizzBuzz.prototype.fizzBuzzFunction = function(integer){

  if (integer % 3 === 0 && integer % 5 === 0){
    console.log("FizzBuzz!");
  }
  else if (integer % 5 === 0) {
    console.log("buzz");
  }
  else if (integer % 3 === 0) {
    console.log("fizz");
  }
  else {
    console.log("bye bye");
  }
};
}
