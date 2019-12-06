//29. Write a function that prints the multiplication table
let res;
for(i=1;i<=10;i++){
  res=0;
  console.log('\n');
  for(j=1;j<=10;j++){
    if(j===1){
      res =(i*j);
    }
    else {
      res= res + ' ' + (i*j);
    }
  }
  console.log(res);
}
