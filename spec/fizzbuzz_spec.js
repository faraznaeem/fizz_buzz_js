
describe("fizzBuzz", function() {
  var subject;

  beforeEach(function() {
    subject = new fizzBuzz();
  });

  it("#1 fizzBuzz will return fizz if div by 3", function() {
    expect(subject.fizzBuzzFunction(3)).toBe('fizz');
  });

  it("#2 fizzbuzz will return buzz if div by 5", function(){
    expect(subject.fizzBuzzFunction(5)).toBe('buzz');
  });

  it("#3 fizzbuzz should return fizzbuzz if div by 3 & 5", function() {
    expect(subject.fizzBuzzFunction(15)).toBe('FizzBuzz!');
  });
  it("#4 fizzbuzz should return integer if not div by 3 & 5", function() {
    expect(subject.fizzBuzzFunction(2)).toEqual(2);
  })

});
