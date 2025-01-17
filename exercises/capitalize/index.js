// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i ++) {
    first = words[i][0].toUpperCase();
    words[i] = first + words[i].slice(1);
  }
  return words.join(' ');
}

module.exports = capitalize;
