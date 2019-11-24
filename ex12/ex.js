/* Rolling Project - BankSystem (you will add more features to
this project as we go along)
o Initialize a variable: currentBalance with the value: 1000
o prompt for the user secret and how much he would like to withdraw,
and then print a nice message with the new balance.

Rolling Project: BankSystem
o Check that the secret is 'secret!', if not, tell the user its wrong and don’t let him withdraw
o Add feature: don’t let the user withdraw more than he has in the account

*/

let currentBalance = 1000;
let secret =  prompt('what is your secret code(random code): ');
if(isNaN(secret) !== false){
  alert('wrong secret, please try again')
}
else{
  let  amountOfMoney = prompt('put amount of money do you want to draw');
  if (amountOfMoney>currentBalance){
    alert('you dont have enough money,try again');
  }
  else{
    alert('your new balance is : '+ (currentBalance-amountOfMoney) + ' dollars');
  }
}
