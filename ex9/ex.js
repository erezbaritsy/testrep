//Read 3 numbers and print the smallest

let numA = parseInt(prompt('enter number: '));
let numB = parseInt(prompt('enter number: '));
let numC = parseInt(prompt('enter number: '));
let smallest = numA;
if(smallest>numB){
  smallest=numB;
}
if(smallest>numC){
  smallest=numC;
}
console.log('smallest number is : ' + smallest);
