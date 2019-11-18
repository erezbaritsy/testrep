/* Rolling Project - BankSystem (you will add more features to
  this project as we go along)
o Initialize a variable: currentBalance with the value: 1000
o prompt for the user secret and how much he would like to withdraw,
 and then print a nice message with the new balance. */

 let currentBalance = 1000;
 prompt('what is your secret code(random code): ');
 let  amountOfMoney = prompt('put amount of money do you want to draw');
 if (amountOfMoney>currentBalance){
   alert('you dont have enough money,try again');
 }
 else{
 alert('your new balance is : '+ (currentBalance-amountOfMoney) + ' dollars');
}
