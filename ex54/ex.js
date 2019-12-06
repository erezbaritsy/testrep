/*54. Write a function to get nth largest element from an unsorted array, without sorting the array.
For example: nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4) Result: 89*/

let array = [ 52,990,18,43, 56, 23, 89, 88, 90, 99, 652];
let userInput = parseInt(prompt('enter nth number : '));
function nthlargest(arr,nth) {
  let count = nth-1;
  let number=0;
  for(let i = 0; i<arr.length;i++){
    count = nth-1;
    for(let j = 0;j<arr.length;j++){
      if(arr[i]<arr[j]){
        count--;
      }
    }
    if(count===0){
      number=arr[i];
      i=arr.length;
      break;
    }
  }
  return number;
}
console.log('[ 52,990,18,43, 56, 23, 89, 88, 90, 99, 652];');
console.log('nth '+ userInput + ' is: ' + (nthlargest(array,userInput)));
