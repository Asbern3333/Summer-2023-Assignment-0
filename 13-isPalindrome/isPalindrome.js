function isPalindrome(word) {
  var j=word.length-1;
  for(var i=0;i<word.length;i++)
  {
      if(word[i]!=word[j])
      {
          return false;
      }
      j--;
  }
  return true;
}
// Do not edit this line;
module.exports = isPalindrome;
