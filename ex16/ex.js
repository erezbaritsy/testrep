/*16. read a string and print:
o Its length
o Its first and last chars
o in uppercase and lowercase */

let str = prompt('Enter string: ');
console.log(str.length);
console.log(str[0]);
console.log(str[str.length-1]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
