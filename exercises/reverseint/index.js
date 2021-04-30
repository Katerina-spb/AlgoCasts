// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var sign = Math.sign(n);
  var num = Math.abs(n);
  var reversed = num.toString().split('').reverse().join('');
  for (int of reversed) {
    if (int === 0) {
      reversed = reversed.slice(1);
    } else {
      break;
    }
  }
  return reversed * sign;
}

module.exports = reverseInt;
