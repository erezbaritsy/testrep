//44. Write a function countApperance that gets an array:
//names and a variable name and counts how many times name appears in names

let name = prompt('Enter name: ');
let names =['aaa','bbbb','cc','ddd','aaa','aaa','cc','bbbb','bbbb','bbbb','r','vv4'];

function countApperance(name,nameArr){
  let count = 0;
  for (let i = 0;i<nameArr.length;i++){
    if(nameArr[i]==name){
      count++;
    }
  }
  return count;
}

alert( name + ' appears: '+ countApperance(name,names) + ' times');
