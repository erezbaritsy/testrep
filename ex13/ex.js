/* o Alert the user to think about some actor
o Using the confirm function, ask the user 2 yes-no questions:
 Male?
 Blond?
o Yes: Philip Seymour!
o No: Tom Cruise!
 English?
o Yes: Julianne Moore!
o No: Natalie Portman!  */

alert('think about some actor');
let gender = confirm('It is a male ? ');
if(gender == true){
  let ifBlonde = confirm('he is Blond ?');
  if(ifBlonde == true){
    alert('Philip Seymour!');
  }
  else{
    alert('Tom Cruise!');
  }
}
else{
  let ifEnglish = confirm('Is she English?');
  if(ifEnglish == true){
    alert('Julianne Moore!')
  }
  else{
    alert('Natalie Portman immah shma vezihra! ')
  }
}
