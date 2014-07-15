function greet(options) {
  options = options || {};
  var person = options.person || 'friend';
  var greeting = options.greeting || 'Hi';
  return greeting + ', ' + person;
}
