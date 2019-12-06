/*52. Write a program that reads nums in the range 0 -3. The loops should
stop when 999 is entered. Then print how many times each of these nums wa
s entered.*/


function numsCount() {
  let userInput = 0;
  let countArray=[0,0,0,0];
  while(userInput !== 999){

    userInput = parseInt(prompt('Enter number in the range 0-3 ( press 999 to exit)'));
    if(userInput === 999){
      break;
    }
    else if(userInput >=0 && userInput <=3  && !isNaN(userInput)){
      console.log(userInput);
      countArray[userInput]++;
    }
    else{
      alert('You entered worng input , please try again');
    }
  }
  for(let k = 0;k<countArray.length;k++){
    console.log('number '+ k+' : ' + countArray[k] + ' times');
  }
}
numsCount();
