//38. Read a string and print it backwards using loop

let str = prompt('enter string: ');
let backwards = '';
let j = 0;
for(let i = (str.length-1);i>=0;i--){
  backwards=backwards+str[str.length-1-j];
  j++;
}
console.log(str);
console.log(backwards);
