function printRightTriangle(rows){
 for(let i=1; i<= rows; i++){
  let stars = '';
  for(let j=1; j<=i; j++){
   stars += '*';
  }
  console.log(stars);
 }
}


console.log(printRightTriangle(5))



function printRightTriangle(rows){
 for(let i=1; i<= rows; i++){
  let stars = '';
  for(let j=1; j<=i; j++){
   stars += j;
  }
  console.log(stars);
 }
}


console.log(printRightTriangle(5))