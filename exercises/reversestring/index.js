// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var arrayOfLetters = str.split('');
  arrayOfLetters.reverse();
  return arrayOfLetters.join('');
}

module.exports = reverse;
