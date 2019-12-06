/*42. Write 2 Functions that get a comma ',' delimited string that consists of
names. Ex: 'igal,moshe,haim' and returns who has the longest name, and the shortest
name. Tip: use the split function to covert a string to an array*/

function longest (str){
  let namesArray = str.split(',');
  let nameLength = namesArray[0].length ;
  let longestNames=[];
  let index = 0 ;
  for ( let i = 1 ;i<namesArray.length;i++){
    if(namesArray[i].length>nameLength){
      nameLength=namesArray[i].length;
    }
  }
  for(let i = 0 ;i<namesArray.length;i++){
    if(namesArray[i].length===nameLength){
      longestNames[index]=namesArray[i];
      index++;
    }
  }
  alert('longest names are : ' + longestNames);
  return longestNames;
}

function shortest (str){
  let namesArray = str.split(',');
  let nameLength = namesArray[0].length ;
  let shortestNames=[];
  let index = 0 ;
  for ( let i = 1 ;i<namesArray.length;i++){
    if(namesArray[i].length<nameLength){
      nameLength=namesArray[i].length;
    }
  }
  for(let i = 0 ;i<namesArray.length;i++){
    if(namesArray[i].length===nameLength){
      shortestNames[index]=namesArray[i];
      index++;
    }
  }
  alert('shortest names are : ' + shortestNames);
  return shortestNames;
}

longest('aa,eeeee,bbb,cccc,rr,erez,tgtgt');
shortest('aa,eeeee,bbb,cccc,rr,erez,tgtgt');
