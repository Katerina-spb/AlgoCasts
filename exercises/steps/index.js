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
