// How to Find missing elements in a given Array 1 to 10

let arr = [1, 2, 4, 6, 7, 8, 10];

function missingElement(arr){
 let missingElement = [];
 for(let i=1; i<=10; i++){
  if(!arr.includes(i)){
    missingElement.push(i);
  }
 } 
 return missingElement;
}


console.log(missingElement(arr));