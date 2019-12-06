/*48. Write a function startWithS that gets an array of names and
returns an array of names that start with Sa. Improve that to work
on any letter by adding a letter argument*/
debugger;
let names = ['aaa','bbb','cerg','dfg','eerg','fhgh','ggweg','hyhh',
'ijhg','jhg','k','lff','mmh','nhrh','ort','prth','qte','rrg','sts',
'ttr','ujhgf','vtr','werg','xrg','ygfh','zwdh','kjhgf','efv','rf','hg',
'yt','k',',n','bhy','ad','rds','qwq','eer','tt','y','yug','jhzg',];
let letter = prompt('Enter letter: ');
function startWith(names,letter) {
  let namesWith =[];
  let index = 0;
  for(let i = 0;i<names.length;i++){
    if(names[i][0]==letter){
      namesWith[index]=names[i];
      index++;
    }
  }
  console.log(names);
  console.log('names start with letter '+ letter + ' : '+namesWith);
}

startWith(names,letter);
