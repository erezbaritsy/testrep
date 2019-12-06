//47. Read a number and print each number in words.
//I.E – 123 – One Two Three. 7294 – Seven two nine four

let userNum = prompt('Enter number: ');

function numberToWords(userNum) {
  let wordsArr = ['Zero','One','Two','Three','Four','Five','Six','Seven',
  'Eight','Nine'];
  let sentence = '';

  for(let i = 0;i<userNum.length;i++){
    for(let j = 0;j<10;j++){
      if(userNum[i]==j){
        sentence = sentence+wordsArr[j]+' ';
      }
    }
  }
  alert(sentence);
  console.log(userNum);
  console.log(sentence);
}

numberToWords(userNum);
