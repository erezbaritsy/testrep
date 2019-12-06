//31. Write a program that generates 30 random numbers. The numbers
//should be generated so each number is greater than the ones generated before.

let randomNum = 0;
let min = 1;
let max = 10;
for(i=0;i<30;i++){
  randomNum = Math.floor(Math.random() * max) + min;
  console.log(randomNum);
  min=randomNum+1;
  max=max+randomNum;
}
