/*Read 3 numbers and check if the 3rd is the sum of the first two
, if so, print all numbers to the console like this: 6 + 4 = 10 */

let numA = parseInt(prompt('enter number: '));
let numB = parseInt(prompt('enter number: '));
let numC = parseInt(prompt('enter number: '));

if(numA+numB === numC){
  console.log(numA + '+' + numB + '= '+ numC);
}
else{
  console.log('exit');
}
