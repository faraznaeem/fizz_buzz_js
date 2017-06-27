
describe("fizzBuzz", function() {
  var subject;

  beforeEach(function() {
    subject = new fizzBuzz();
  });

  it("#fizzBuzz", function() {
    expect(subject.fizzBuzzFunction(3)).toBe('fizz');
  });

});
