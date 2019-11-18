//Read distance and speed and print ETA

let speed = prompt('put speed kilometer per hour:' );
let distance = prompt('put distance in kilometers:' );
let eta = distance/speed;
if(eta*60>60){
  var hour = Math.floor(eta);
  var minutes = (eta*60)%60;
  alert('ETA is : ' + hour + ' hours' + ' and ' + minutes + ' minutes');
}
else{
alert('ETA is : '+(eta*60) +' ' + 'minutes');
}
