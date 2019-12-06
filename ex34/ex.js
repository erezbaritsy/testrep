/*34. Rolling Project – BankSystem:
o Improve the secret code coming from user, instead of
hardcoded secret - symmetric codes (such as: 95459) are accepted. */

let currentBalance = 1000;
let secret = prompt('what is your secret code(random code): ');
let verify = true;
if(isNaN(secret) !== false){
  alert('Wrong secret, please enter numbers only');
}
else {
  for(let i=0;i<(parseInt((secret.length/2)+1));i++){
    for(let j = (secret.length-1-i);j>=(secret.length-1-i);j--){
      if(secret[i]!==secret[j]){
        alert('secret code is not semetric, please try again');
        verify= false;
        i=secret.length+1;
        break;
      }
    }
  }
  if(verify=== true){
    let  amountOfMoney = prompt('put amount of money do you want to draw');
    if (amountOfMoney>currentBalance){
      alert('you dont have enough money,try again');
    }
    else{
      alert('your new balance is : '+ (currentBalance-amountOfMoney) + ' dollars');
    }
  }
}
