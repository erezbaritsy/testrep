let a = parseInt(prompt('enter number: '));
let b = parseInt(prompt('enter number: '));
let c = parseInt(prompt('enter number: '));
let x1 = 0;
let x2 = 0;


 x1 = ((-1)*b + (Math.sqrt((b*b)-(4*(a*c)))))/(2*a);
 x2 = ((-1)*b - (Math.sqrt((b*b)-(4*(a*c)))))/(2*a);
alert('x1= '+x1);
alert('x2= '+x2);
