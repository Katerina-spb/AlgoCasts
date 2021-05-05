// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //create result array
  var result = [];
  //create currentSubarray
  var currentSub = [];
  result.push(currentSub);
  //create counter
  var counter = 0;
  //iterate over an array
  for (element of array) {
    //if counter less than size
    if (counter < size) {
      //push the element to current subarray
      currentSub.push(element);
      counter ++;
    } else {
      // else - create new subarray and reassign current subarray to it
      var newSubArray = [];
      result.push(newSubArray);
      currentSub = newSubArray;
      // set counter to 0
      counter = 1;
      //push the element to current subarray
      currentSub.push(element);
    }
  }
  //return result
  return result;
}

module.exports = chunk;
