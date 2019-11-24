/* Read 2 numbers and calculate the difference (absolute value)
o if the diff is smaller from both values say that those
numbers are relatively-closeo Validate that you got numbers
(hint: search for something like: javascript check if number) */


let numA = parseInt(prompt('enter number: '));
let numB = parseInt(prompt('enter number: '));
let difference = numA-numB;
if(isNaN(numA) == false && isNaN(numB) == false){
if(difference<0){
  difference=difference*-1;
}
if(numA > difference && numB > difference){
  console.log('those numbers are relatively-closed');
}
else{
  console.log('those numbers are NOT! relatively-closed')
}
}
else{
  alert('you didnt enter numbers, please try again');
}
