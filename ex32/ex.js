//32. Write a program to compute the greatest common divisor
//(GCD) of two positive integers.


let num1 = parseInt(prompt('enter first number: '));
let num2 = parseInt(prompt('enter second number: '));
let smaller = 0;

if(num1<=num2){
  smaller=num1;
}
else{
  smaller=num2;
}
for(let i =smaller;i>0;i--){
  if(num1%i === 0 && num2%i === 0){
    alert(i + ' is the greatest common divisor of '+ num1 + ' and ' + num2);
    break;
  }
}
