//59. Pick random atoms from an array, how much time passes before you
//get water (H2O)?

let atoms = ['g','5','H','f','d','e','2','i','O','b','3','8','Y','B','z','0','q'];

function findWater() {
  let molecule ='';
  let index = 0;
  let counter = 0;
  while (molecule !== 'H2O') {
    molecule = '';
    for(let i = 0;i<3;i++){
      index = Math.floor(Math.random()*atoms.length);
      molecule=molecule+atoms[index];
    }

    counter++;
  }
  return counter;
}
for(let j = 0 ;j<100;j++){
  console.log('It took '+ findWater()+ ' searches to find water');
}
