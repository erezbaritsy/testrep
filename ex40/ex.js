//40. write a function that accepts 2 strings, and returns the location of
//the second string in the first, if the string is not found return false

let str1 = prompt('enter first string: ');
let str2 = prompt('enter first string: ');
console.log(str1);
console.log(str2);

function findString(str1,str2) {
  let start = false;
  let index = 0;
  for(let i = 0;i<str1.length;i++){
    if(start!==false){
      break;
    }
    else{
      for(let j = 0;j<str2.length;j++){
        if(str1[i+index]===str2[j]){
          index++;
          if(start===false){
            start=i;
          }
        }
        else{
          start=false;
          index=0;
          break;
        }
      }
    }
  }

  if(start!==false){
    console.log('second string start at letter number '+ (start+1));
  }
  else{
    console.log('string NOT found');
  }
}

findString(str1,str2);
