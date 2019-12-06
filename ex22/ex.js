//22. Write a function: isOfAge that gets a name and an age,
//if the user is not yet 18, alert him that he is too young,
 //this function also returns a boolean

 function isOfAge(name,age){
   if(age<18){
     alert(name+', you are too young');
   }
   return;
 }

isOfAge('erez',18);
