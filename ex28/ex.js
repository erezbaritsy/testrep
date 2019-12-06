//28. Write the function factorial that gets a number n and return n!


function factorial(num){
  let res = num;
  let multiple = num-1;
  for(let i= num-1;i>0;i--){
    res = res*multiple;
    multiple--;
  }
  return res;
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(9));
