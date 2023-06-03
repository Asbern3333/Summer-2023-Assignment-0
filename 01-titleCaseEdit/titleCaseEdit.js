function titleCaseEdit(title) {
  var arr=title.split(" ");
  for(var i=0;i<arr.length;i++)
  {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  title=arr.join(" ");
  return title;
}

// Do not edit this line;
module.exports = titleCaseEdit;
