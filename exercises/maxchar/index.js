// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var storage = {};
  for (var char of str) {
    storage[char] = storage[char] + 1 || 1;
  }
  var max = 0;
  var resultLetter;
  for (var letter in storage) {
    if (max < storage[letter]) {
      max = storage[letter];
      resultLetter = letter;
    }
  }
  return resultLetter;
}

module.exports = maxChar;
