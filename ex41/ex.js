/*41. Write the function encrypt that gets a string and encrypt it by
replacing each character c with c+5 (i.e. 'r' will be replaced by: 'w'),
now write a function to decrypt a message.*/

let massage =prompt('Enter massage for Encription: ');
function encrypt (msg){
  let encrypted ='';
  let ifRegularChar =false;
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'
  ,'o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e'];
  for(let i = 0;i<msg.length;i++){
    for(let j = 0;j<=letters.length-6;j++){
      if(msg[i]==letters[j]){
        encrypted=encrypted+letters[j+5];
        ifRegularChar=true;
      }
    }
    if(ifRegularChar===false){
      encrypted=encrypted+msg[i];
    }
    else{
      ifRegularChar=false;
    }
  }
  console.log('1. original massage: '+msg);
  console.log('2. encrypted massage: '+ encrypted);
  return encrypted;
}

function decrypt (msg){
  let decrypted ='';
  let ifRegularChar =false;
  let letters = ['u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n'
  ,'o','p','q','r','s','t','u','v','w','x','y','z'];
  for(let i = 0;i<msg.length;i++){
    for(let j = 6;j<=letters.length-1;j++){
      if(msg[i]==letters[j]){
        decrypted=decrypted+letters[j-5];
        ifRegularChar=true;
      }
    }
    if(ifRegularChar===false){
      decrypted=decrypted+msg[i];
    }
    else{
      ifRegularChar=false;
    }
  }
  console.log('3. Decrypted Massage: '+ decrypted);
}

decrypt(encrypt(massage));
