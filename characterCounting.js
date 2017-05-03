function countLetters(string){
  var count = {};
  string = string.split(" ").join("");
  for (var i = 0; i < string.length; i++){
    if (count[string[i]]){
      count[string[i]] += 1;
    } else {
      count[string[i]] = 1;
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));