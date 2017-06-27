
describe("fizzBuzz", function() {
  var subject;

  beforeEach(function() {
    subject = new fizzBuzz();
  });

  it("#dividesBy3", function() {
    expect(subject.dividesBy3(3).toEqual('fizz'));
  });

});
