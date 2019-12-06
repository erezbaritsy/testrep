//58. Implement lion in desert for a sorted array

function lionDesert() {
  let loopCount = 0;
  let found = false;
  let start =0;
  let preventInfinit = 0;
  let checkStart = 0;
  let checkEnd = 0;
  let end = sortedArray.length;
  let currentIndex = parseInt(sortedArray.length/2);

  while( found === false && preventInfinit < 3) {
    checkStart = start;
    checkEnd = end;
    if(userNum === sortedArray[currentIndex]){
      found = true;
    }
    else if(userNum<sortedArray[currentIndex]){
      end = currentIndex;
      currentIndex = parseInt(((end-start)/2)+start);
    }
    else if(userNum>sortedArray[currentIndex]){
      start = currentIndex;
      currentIndex = parseInt(((end-start)/2)+start);
    }
    if(start===checkStart && end===checkEnd){
      preventInfinit++;
    }
    loopCount++;
  }
  if(preventInfinit<3){
    alert('Number found at index: '+ currentIndex + ' , It took '+loopCount + ' loops');
    return currentIndex;
  }
  else{
    alert('Number not found');
  }
}

let sortedArray =[1,5,14,20,25,30,52,72,84,85,100,101,113,130,131,140];
let userNum = parseInt(prompt('Enter number from 0-100'));
lionDesert();
