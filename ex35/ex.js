35. /*Read a number and
o Calculate sum of its digits.
o Calculate multiply of its digits.
o Print it with swapped first and last digits (2731 => 1732)
o Print its reverse (BONUS: as number not as string).
o Sum its first and last digit.
o Print if it's an Armstrong number. i.e. 371 is an Amstrong number:
33 + 73 + 13 = 371
o Print if it's a perfect number. Perfect number is number that s
um of all his dividers is the number itself. i.e. 6 is a perfect
number (1 + 2 + 3).
Now read a number: max and prints all Amstorng and Perfect positiv
e numbers until max */


let num =prompt('Enter long number: ');
let max = parseInt(prompt('Enter maximum number: '));

function sumAndMultiple(num){
  let digSum = 0 ;
  let multiply = (num%10);
  let digit = 0;
  let firstDigCheck = true;
  let answer = [digSum,multiply];
  while (num !== 0) {
    digit = (num%10);
    digSum = digSum+digit;
    if(firstDigCheck===false){
      multiply=multiply*digit;
    }
    num = parseInt(num/10);
    firstDigCheck= false;
  }
  answer= [digSum,multiply];
  return answer;
}

function swapped(num){
  let swapp ='';
  let firstDigit = num[0];
  let lastDigit = num[num.length-1];
  for(let i = 0;i<num.length;i++){
    if(i===0){
      swapp=swapp+lastDigit;
    }
    else if(i ===(num.length-1)){
      swapp=swapp+firstDigit;
    }
    else{
      swapp=swapp+num[i];
    }
  }
  return swapp;
}

function reverse(num){
  let numerical =parseInt(num);
  let digit =0;
  let multiply = Math.pow(10, (num.length-1));
  let revers = 0;
  for(let i = 0;i<num.length;i++){
    digit = (numerical%10)*multiply;
    revers= revers+digit;
    numerical=parseInt(numerical/10);
    multiply=multiply/10;
  }
  return revers;
}

function firstLast(num){
  let firstDigit=num[0];
  let lastDigit=num[num.length-1];
  let sum = parseInt(firstDigit)+parseInt(lastDigit);
  return sum;
}

function armstrong (max){
  let number =0;
  let digitsLength=0;
  let sum=0;
  let digit = 0 ;
  for (let i = 0;i<=max;i++){
    number = i;
    digitsLength=number.toString();
    digitsLength=digitsLength.length;
    for(let j = 0;j<digitsLength;j++){
      if(number<10){
        digit = number;
      }
      else{
        digit = number%10;
      }
      sum = sum + Math.pow(digit,digitsLength);
      number=parseInt(number/10);
    }
    if(sum == i){
      console.log(i + ' is a Armstrong number');
    }
    sum=0;
  }
}

function perfect(max){
  let sum = 0;
  for(let i = 1;i<=max;i++){
    for(let j = 1;j<i;j++){
      if(i%j===0){
        sum = sum+j;
      }
    }
    if(sum===i){
      console.log(i +' is a perfect number');
    }
      sum = 0;
  }
}

perfect(max);
armstrong(max);
sumAndMultiple(num);
swapped(num);
reverse(num);
firstLast(num);
console.log('number is : '+num);
console.log('reverse is: '+ reverse(num));
console.log('swapped first with last digit is : '+ swapped(num));
let ans=sumAndMultiple(num);
console.log('sum is: '+ ans[0]+'\n'+'multiply is: ' + ans[1]);
console.log('sum of first and last digit is : ' + firstLast(num));
