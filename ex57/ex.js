//57. Write a function that gets a hebrew letter and returns
//its GIMATRIA value.


let hebrewLetter = prompt('Enter hebrew letter: ');

function gimatriaVal(){
  let value =0;
  let gimVals =[400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1];
  let letters =['ת','ש','ר','ק','צ','פ','ע','ס','נ','מ','ל','כ','י','ט','ח','ז','ו','ה','ד','ג','ב','א'];
  for(let i = 0;i<gimVals.length;i++){
    if(letters[i] === hebrewLetter){
      value = gimVals[i];
    }
  }
  return value;
}

alert('The GIMATRIA value of: ' + hebrewLetter + ' is : ' + gimatriaVal());
