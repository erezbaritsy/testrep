//33. Write a function that prints a block of asterisks
//(*) by parameters: rows, cols

function astPrint(rows,cols){
  let i=0;
  let j=0;
  for(i = 0;i<rows;i++){
    for(j=0;j<cols;j++){
      console.log('*');
    }
    console.log('\n');
  }
}
function printOutLine(rows,cols){
  let i=0;
  let j=0;
  for(i = 0;i<rows;i++){
    for(j=0;j<cols;j++){
      if(i===0 || i===rows-1){
        console.log('*');
      }
      else if(j===0 || j===cols-1){
        console.log('*');
      }
    }
    console.log('\n');
  }
}

let rows =parseInt(prompt('print number of rows: '));
let cols =parseInt(prompt('print number of column: '));
astPrint(rows,cols);
console.log('----------');
printOutLine(rows,cols);
