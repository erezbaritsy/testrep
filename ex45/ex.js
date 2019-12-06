//45. Write a function biggerThan100 that gets an array of nums and returns an
//array of items that are bigger than 100.

let randomNums =[];
for(let i = 0;i<10;i++){
  randomNums[i]= Math.floor(Math.random() * (150 - 50) + 50);
}

function biggerThan100(randomNums){
  let biggerNums =[];
  let index = 0;
  for(let i = 0;i<randomNums.length;i++){
    if(randomNums[i]>100){
      biggerNums[index]=randomNums[i];
      index++;
    }
  }
  return biggerNums;
}

console.log('Original array: ' + randomNums);
console.log('biggerThan100 array: ' + biggerThan100(randomNums));
