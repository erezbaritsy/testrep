//53. Implement your own version of the split function. Test with different
//types of data, measure time difference between your function and String.split



let str = "Implement your own, version of the split function. Test with differenttypes of data";
let userChar = prompt('Enter char: ');
let a0 = performance.now();
let segment ='';
let lastPosition = 0;
let splitArray = [];
let index = 0;

function mySplit(str,char) {
  for(let i = 0;i<str.length;i++){
    if(i===(str.length-1)){
      strToArr(i+1);
    }
    else if(str[i]===char){
      strToArr(i);
      index++;
    }
  }
  return splitArray;
}
function strToArr(i) {
  for(let j = lastPosition;j<i;j++){
    segment=segment+str[j];
  }
  splitArray[index]=segment;
  lastPosition = i+1;
  segment='';
}

let newArray = mySplit(str,userChar);
console.log('Original string :  ' +str);
console.log('char : ' + userChar);
console.log('New array is : ' + newArray);
let a1 = performance.now();
console.log('time in miiliseconds: ' + (a1-a0));

//-------------------------------------------------------
let t0 = performance.now();// test original split function time
let test = str.split(userChar);
console.log(test);
let t1 = performance.now();
console.log('time in miiliseconds with original function : ' + (t1-t0));
