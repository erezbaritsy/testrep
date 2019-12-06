//23. Read 10 numbers from the users and output "the number is even"
// if this is the case, else "the number is not even"

for(let i = 0;i<10;i++){
  let num = prompt('enter number: ');
  if(num%2===0){
    console.log("the number is Even");
  }
  else if(num%2!==0){
      console.log("the number is Odd");
  }
}
