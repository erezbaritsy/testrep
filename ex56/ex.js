/*56. Write a function that get some text and return an associative array in
which the key is a word and the value is the count (how many times this
word appeared in the text)*/

let userText = prompt('Enter text: ');
alert(' text:  '+ userText);
console.log(userText);
let word = prompt('Enter word :');

function wordCount() {
  let arr = userText.split(" ");
  let count = 0;
  for(let i = 0;i<arr.length;i++){
    if(arr[i]=== word){
      count++;
    }
  }
  return count;
}

alert('The word '+ word +' appeared '+wordCount() + ' times');
console.log('The word '+ word +' appeared '+wordCount() + ' times');
