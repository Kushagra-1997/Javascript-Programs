function findOccurence(str){
 obj={};
 for(let ch of str){
  obj[ch] = (obj[ch] || 0) + 1
 }
 console.log(obj);
 return obj;
}

const result = findOccurence('hello');
console.log(result.l);
console.log(obj["l"]);