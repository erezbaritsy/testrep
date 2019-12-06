/*39. VOWELS (aoieu)
Copyright 2017 © misterBIT
o write a function that gets a string and print how many times each vowel appears
o Read a string and make the vowels lowercase, the others uppercase (GiZiM GiDoo)
o Write a function that reads a string and double all the vowel in it*/
let str = prompt('enter string: ');
function howManyVowels(str) {
  console.log(str);
  str= str.toLowerCase();
  let vowels =['a','o','i','e','u'];
  let vowelCount =[0,0,0,0,0];
  for(let i = 0;i<str.length;i++){
    for(let j = 0;j<vowels.length;j++){
      if(str[i]==vowels[j]){
        vowelCount[j]++;
      }
    }
  }
  for(k=0;k<5;k++){
    console.log(vowels[k]+' : '+ vowelCount[k]+' times');
  }
}

function lowerVowel(str) {
  str=str.toLowerCase();
  let vowels =['a','o','i','e','u'];
  let withLowerVowels='';
  for(let i = 0;i<str.length;i++){
    for(let j = 0;j<vowels.length;j++){
      if(str[i]==vowels[j]){
        withLowerVowels=withLowerVowels+(str[i].toLowerCase());
        break;
      }
      else if(j===vowels.length-1){
        withLowerVowels=withLowerVowels+(str[i].toUpperCase());
      }
    }
  }
  console.log('lowerVowls :'+ withLowerVowels);
}

function doubleVowels(str) {
  str=str.toLowerCase();
  let vowels =['a','o','i','e','u'];
  let withDoubleVowels='';
  for(let i = 0;i<str.length;i++){
    for(let j = 0;j<vowels.length;j++){
      if(str[i]==vowels[j]){
        withDoubleVowels=withDoubleVowels+str[i]+str[i];
        break;
      }
      else if(j===vowels.length-1){
        withDoubleVowels=withDoubleVowels+str[i];
      }
    }
  }
  console.log('doubleVowels :'+ withDoubleVowels);
}

howManyVowels(str);
lowerVowel(str);
doubleVowels(str);
