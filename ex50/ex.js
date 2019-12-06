/*50. Write a function: findUniques that gets an array: nums with numbers
in the range 0 -10, and return a modified array where each value appear
only once.d. Find the unique elements from two arrays and insert them into
a new array that should also hold unique only.*/

let arr =[[0,2,5,7,7,3,0,10,2],[3,10,4,2,0,7]];
function findUniques(arr) {
  let index = 0;
  let unique =[];
  let ifUnique = true;
  for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr[i].length;j++){
      for(let k = 0;k<index;k++){
        if(unique[k] == arr[i][j]){
          ifUnique = false;
        }
      }
      if(ifUnique === true){
        unique[index]=arr[i][j];
        index++;
      }
      else{
        ifUnique = true;
      }
    }
    console.log('array number ' + (i+1) + ': '+ arr[i]);
  }
  console.log('unique array is: ' + unique);
}
findUniques(arr);
