/*51. Write a function: multBy that gets an array: nums and a num and returns
 a modified array in which each item in the array is multiplied by num.
e. Add another param: immutable, when true use slice to work on a new
array and leave the original array as is.*/

let arr = [];
let mult = parseInt(prompt('Enter mulyBy Number: '));
for(let i = 0 ; i<7;i++){
  arr[i]= parseInt(prompt('Enter Number: '));
}

function multBy(arr,mult) {
console.log('original: ' + arr);
  for(let j = 0;j<arr.length;j++){
    arr[j]=arr[j]*mult;
  }
  return arr;
}
let modified = multBy(arr,mult);

console.log('modified: '+ modified);
