// 15. Read 2 names and print the longer one

let firstName = prompt('Enter name');
let secondName = prompt('Enter secondName');

if (firstName.length>secondName.length){
  alert(firstName);
}
else if (firstName.length<secondName.length){
  alert(secondName);
}
else{
  alert('both names have the same length');
}
