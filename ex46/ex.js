//46. Create an array of all characters in english. Write a function that
//gets a length and return a sentence with made-up words (lorem ipsum...)



let length = parseInt(prompt('Enter length of sentence: '));

function lorem(length) {
  let engChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let sentence='';
  let randomChar = Math.floor(Math.random()*(engChars.length-1));
  let wordLength = Math.floor(Math.random()*(7-2)+2);
  for(let i =0;i<length;i++){
    sentence=sentence+engChars[randomChar];
    randomChar = Math.floor(Math.random()*(engChars.length-1));
    if(wordLength===0){
      sentence=sentence+' ';
      wordLength = Math.floor(Math.random()*(7-2)+2);
      i++;
    }
    else{
      wordLength--;
    }
  }
  alert(sentence);
}
lorem(length);
