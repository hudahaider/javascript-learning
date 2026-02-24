//Capitalize First Letter of Each Word
function capitalizeFirst(string){
  return string
  .split(' ') 
  .map(m => m.at(0).toUpperCase() + m.slice(1)) 
  .join(' ');
}
console.log(capitalizeFirst("the quick brown fox"));


//Find Longest Word
function longestWord(string){
  let words = string.split(' ')
  let longest = "";

  for(let word of words){ // let word = 0; word < string,length, word++
    if(word.length > longest.length){
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord("Web Development Tutorial"));


//Get Type of Argument
function typeofArgument(argument){
  return typeof argument;
}
console.log(typeofArgument(['a', 'b','c']));
console.log(typeofArgument(true));
console.log(typeofArgument);
console.log(typeofArgument(12));
console.log(typeofArgument('name'));
console.log(typeofArgument());


//Count Letter in String
function countOccurence(string, letter){
  let count = 0;
  for(let i = 0; i < string.length; i++){
    if(string.at(i) === letter){
      count++;
    } 
  }
  return count;
}
console.log(countOccurence('w3resource.com', 'o'));