/*43. Write a function: generatePass(passLength) that generates a password of
a specified length. Password is made out of random single-digit numbers,
using our first function.*/
let passLength = prompt('Enter password length:');
function generatePass(passLength){
  let password ='';
  for(let i = 0;i<passLength;i++){
    password= password+ Math.floor(Math.random()*9);
  }

  return password;
}
let pass = generatePass(passLength);
alert(pass);
