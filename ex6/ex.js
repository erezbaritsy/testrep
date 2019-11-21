/* Ask the user for 3 digits and print the number in full
 for example: if the user entered 3,2,6 then we print 326.
o BONUS: In this case, working with strings is easier,
try solving using numeric variables */

var digA = prompt('enter first digit: ');
var digB = prompt('enter second digit: ');
var digC = prompt('enter third digit: ');
let wholeNum = digA+digB+digC;
alert('whole number is : ' + wholeNum);
let numericVal = (parseInt(digA)*100)+(parseInt(digB))*10+parseInt(digC);
console.log(numericVal);
