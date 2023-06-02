function frequencyCounter(str) {
//Edge case: an empty array
  if (str.length === 0) {
    return {};
  } 
  var output = {};
  var strArr = str
//A loop
  for (var i=0; i < strArr.length; i++) {
    var word = strArr[i];
    if (output[word] === undefined) {
      output[word] = 1;
    } else {
      output[word] += 1;
    }
    
  }
  return output;
}

// Do not edit this line;
module.exports = frequencyCounter;
