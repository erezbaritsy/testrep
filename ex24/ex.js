/*24. Read 10 numbers and print:
o The maximum number
o The minimum number
o The average  */
let num = 0
let i = 0
let maximum = 0;
let minimum = 0;
let average = 0;
let first = 0;

for(i = 0;i<10;i++){
  num = parseInt(prompt('enter number: '));
  if(first===0){
    maximum =num;
    minimum =num;
    first = 1;
    average = average+num;
  }
  else {
    if(maximum<num){
      maximum=num;
    }
    if(minimum>num){
      minimum=num;
    }
    average = average+num;
  }
}
console.log('the biggest number is : '+ maximum);
console.log('the smallest number is : '+ minimum);
console.log('the avarage number is : '+ (average/10));
