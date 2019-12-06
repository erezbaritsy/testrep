/*37. Write A function that generates a random number between 0 and
max (Parameter) Clue: Use Math.Random & Math.Floor
Strings and*/

let max = parseInt(prompt('enter max number: '));
function randomNum(max) {
  let num = Math.floor(Math.random()*(max+1));
  return num;
}
for(i = 0;i<30;i++){
console.log(randomNum(max));
}
