// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  var array = str.split('');
  var reversed = array.reduce((reversed, character) => {
    return character + reversed;
  }, '');
  debugger;
  return str === reversed;
}

palindrome('aabbaa');

module.exports = palindrome;
