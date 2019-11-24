/*o Keep a currentFloor variable, initialize it to 0
o Ask the user which floor he needs
o Validate its between -2 (parking) and 4
Copyright 2017 © misterBIT
o Update the currentFloor variable accordingly
o If the user goes to 0 say 'Bye Bye'
o If the user goes to parking output: 'Drive Safely */


let currentFloor = parseInt(prompt('which floor do you need ? (-2 up to 4)'));
if(currentFloor >= -2 && currentFloor <=4){
  if(currentFloor === 0){
    alert('Bye Bye');
  }
  else if (currentFloor === -1 || currentFloor === -2){
    alert('Drive Safely');
  }
}
else{
  alert('you chose wrong number');
}
