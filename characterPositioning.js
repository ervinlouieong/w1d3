function countLetters(string){
  var count = {};
  //string = string.split(" ").join("");
  for (var i = 0; i < string.length; i++){
    if (count[string[i]]){
      count[string[i]].push(i);
    } else {
      count[string[i]] = [i];
    }
  }
  return count;
}

console.log(countLetters("lighthouse in the house"));