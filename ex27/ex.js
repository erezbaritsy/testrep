/*27. Write a function getAsterisks which gets a number, and returns a string
containing asterisks according the number supplied.
o Write a program that prints in the first line 1 asterisk, in the second 2 asterisk
and so on until 10 After reaching a line with 10 asterisks, and goes backwards until a line with 1
asterisko There is a new requirement to support any character (not necessarily asterisk),
refactor your code, the character will be read from the user and be sent to the
function.o Use Math.rand to generate a number between 1 and 10 and use it to draw asterisks
rows at random lengths  */

function getAsterisks(char,num){
  for(let i = 0;i<num;i++){
    for(let j=num-i;j<=num;j++){
      console.log(char);
    }
    console.log('t');
  }
  for(let i = 0;i<num-1;i++){
    for(let j=num-i-1;j>0;j--){
      console.log(char);
    }
    console.log('t');
  }
}
let char = prompt('choose char: ');
let number = Math.floor(Math.random() * 11)+1;
getAsterisks(char,number);
