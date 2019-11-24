/*  11. Ask the user how many friends he has on FB and print out an analysis:
o More than 500 – OMG, celebrity!
o More than 300 (and up to 500) – Well connected!
o 100 and more – Knows some people
o Up to 100 – Quite picky aren't you?
o 0 – Lets be friends?  */


let friends = parseInt(prompt('how many friends do you have on facebook ? '));

if(friends>500){
  alert('OMG, celebrity!');
}else if(friends>300){
  alert('Well connected!');
}
else if(friends>=100){
  alert('Knows some people');
}
else if(friends>0){
  alert("Quite picky aren't you?");
}
else if(friends===0){
  alert('Lets be friends?');
}
else{
  alert('Error, please try again');
}
