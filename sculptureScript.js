const sculptureList = require('./data.js'); // import data.js

//const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
//for (const key in element){
//    console.log(`${key}: ${element[key].length}`)
//}

const sculptureListLengths = [];

for(const sculpture of sculptureList){
  let sculptureLengths={};

  for(const key in sculpture){
    if(typeof sculpture[key]==='string'){
      sculptureLengths[key]=sculpture[key].length;
    }
  }

  sculptureListLengths.push(sculptureLengths);

}
console.log(sculptureListLengths);
