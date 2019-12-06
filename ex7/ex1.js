
alert('Please enter a b c arguments in the equation');

let digits=[];

for (i=0 ; i<3; i++){
  digits[i]=Number(prompt());
   if (!Number.isInteger(digits[i])) {
  alert('Input not valid please re-enter number');
  i=i-1;
  }
}
 let a = digits[0];
 let b= digits[1];
 let c= digits[2];

 //displays equation

 const vari='X';
 let templateCalc =`${a}${vari}²- ${b}${vari} + ${c} = 0`;

//calculates squareroot

 let calc=(b*b)-(4*a*c);
 let x1 = ( (-b)+ (Math.sqrt(calc)) )/ (2*a) ;
 let x2 =( (-b)-(Math.sqrt(calc)) )/ (2*a) ;

 //display equation and quadratic solution
 alert(templateCalc +"\n" +  `X1 = ${x1} ; X2 = ${x2} `);
