//30. Let the user guess a random number your program set,
//help the user but outputting Too Low or Too High.

let number = Math.floor(Math.random() * 1001);
let userGuess = -1;
let guessCount = 0;

while(userGuess!== number){
  userGuess = parseInt(prompt('enter your guess: '));
  guessCount++;
  if(userGuess>number){
    alert('your number is too big !');
  }
  else if(userGuess<number){
    alert('your number is too small !');
  }
  else if ( userGuess===number){
    alert('You Won !!!  ' + 'It took : '+ guessCount + ' gueses');
  }
}
