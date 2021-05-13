// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  var array = [];
  for (var i = 0; i < n; i++) {
    array.push(' ');
  }
  for (var j = 0; j < n; j++) {
    array[j] = '#';
    console.log(array.join(''))
  }
}

module.exports = steps;


//////////////////////pw w kew

var lengthOfLongestSubstring = function(string) {
  //base case
  if (string.length === 1) {
    return string
  }
  
  var longestSub = '';
  var length = 0;
  var sub = string[0];
  
  for (var i = 1; i < string.length; i++) {
    var nextLetter = string[i];

    if (sub.indexOf(nextLetter) === -1) {
      sub += nextLetter;
    } else {

      if (sub.length > length) {
        longestSub = sub;
        length = sub.length;
      } 
      break;
      
    }
  }
  
  //if no repeated chars
  if (longestSub === '') {
    return sub;
  }

  //recurse the rest of the string
  var rest = string.slice(1);
  var next = lengthOfLongestSubstring(rest)
  if (next.length > longestSub.length) {
    longestSub = next;
    length = next.length;
  }

  return longestSub;
};