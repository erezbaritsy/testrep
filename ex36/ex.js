/*36. Write the function myAbs() to return absolute values,
the compare the performance of your function and the original function
 (by running them 1000000 times each). */

 function myAbs(){
   let num = -5;
   if(num<0){
     num=num*(-1);
   }
   return num;
 }


for(let a = 0;a<3;a++){
let a0 = performance.now();
for(let b=0;b<10000;b++){
  Math.abs();
}
let a1 = performance.now();
console.log("my function time is(in miliseconds) : " + (a1 - a0));
}

for(let j = 0;j<3;j++){
let t0 = performance.now();
for(let i=0;i<10000;i++){
  Math.abs();
}
let t1 = performance.now();
console.log("function time is(in miliseconds)  : " + (t1 - t0));
}
