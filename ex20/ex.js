/*20. Write a function isEven that gets a number,
and returns true if the number is even otherwise false. */

function isEven(num1){
  if(num1%2 == 0){
    return true;
  }
  else {
    return false;
  }
}

console.log(isEven(2));
console.log(isEven(1));
