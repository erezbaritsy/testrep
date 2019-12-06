/*49. Write a function that gets 2 arrays and returns a sum array:
b. For example, for: [1, 4, 3] [2, 5, 1, 9] it returns: [3, 9, 4, 9]
c. Read those arrays from the user (until 999 is entered)*/

let userArr = [];

function sumArrays() {
  let index = 0;
  let arrLength=0;
  let userInput=0;
  let arrSum =[];
  let arrCount =0;
  while(userInput!== 999){
    index=0;
    arrLength = parseInt(prompt('Enter array length: '));
    for(let i = 0;i<arrLength;i++){
      userInput =parseInt(prompt('Enter number: '));
      if(userInput == 999){
        alert('End program');
        break;
      }
      userArr[index]=userInput;
      if(arrSum[index]===undefined){
        arrSum[index]=userInput;
      }
      else{
        arrSum[index]= parseInt(arrSum[index]+userInput);
      }
      index++;

    }
    arrCount++;
    if(userInput!==999){
      console.log(' array number '+ arrCount+' is : ' +  userArr);
      console.log('sum array is: '+arrSum);
    }
  }
}
sumArrays();
