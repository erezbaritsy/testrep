//55. Implement bubble sort for array, measure time difference between your
//function and Array.sort
let arr=[];
for(let i = 0;i<6;i++){
  arr[i]=parseInt(prompt('Enter number: '));
}

function bubbleSort(arr) {
  let sortArr = arr;
  let valueSave = 0;
  for(let j = 0;j<sortArr.length;j++){
    for(let k = 0;k<sortArr.length;k++){
      if( (k+1) === sortArr.length ){
        break;
      }
      else if(sortArr[k]>sortArr[k+1]){
        valueSave=sortArr[k+1];
        sortArr[k+1]=sortArr[k];
        sortArr[k]=valueSave;
      }
    }
  }
  return sortArr;
}
console.log('original is: ' + arr);
let sortedArray = bubbleSort(arr);
console.log('sorted is: ' + sortedArray);
