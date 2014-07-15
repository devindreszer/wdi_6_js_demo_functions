function filterLetters(string, filterFunc) {
  var filteredString = '';
  for(var i = 0; i < string.length; i++) {
    if(filterFunc(string[i])) {
      filteredString += string[i];
    }
  }
  return filteredString;
}

var testString = 'This is a tEst string that containS boTh uppEr and lowercaseD characters';

// Using an anonymous function
filterLetters(testString, function(letter){
  letter = letter.toLowerCase();
  return letter === 'a' || letter === 'e';
});

// Defining a named function
function isUpperCase(letter){
  return letter >= 'A' && letter <= 'Z';
}

filterLetters(testString, isUpperCase);
