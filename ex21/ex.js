//21. Write a function getBigger that receives 2 numbers and returns the bigger.

function getBigger(num1,num2){
  if(num1>num2){
    return num1;
  }
  else if(num1<num2){
    return num2;
  }
  else if(num2==num1){
    return 'num is even';
  }
  else{
    return 'error';
  }
}

console.log(getBigger(1,2));
console.log(getBigger(2,1));
console.log(getBigger(1,1));
console.log(getBigger(2,'3'));
console.log(getBigger('3',2));
console.log(getBigger(4,'r'));
console.log(getBigger(4,'4'));
