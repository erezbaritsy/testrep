//26. Write the function myPow that gets 2 params:
 //base, exp and returns the power.

 function myPow(base,exp){
   let res = base;
   for(i=1;i<exp;i++){
     res = res*base;
   }
   return res;
 }

console.log(myPow(2,3));
console.log(myPow(3,3));
console.log(myPow(4,2));
console.log(myPow(9,4));
