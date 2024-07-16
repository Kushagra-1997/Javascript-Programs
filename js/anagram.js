function anagram(str1, str2){
 let objStr1 = {};
 if(str1.length !== str2.length){
   console.log('strings are different');
  return false;
 }
 for(ch of str1){
  // console.log(ch);
  objStr1[ch] = (objStr1[ch] || 0) + 1; 
  // setting key value pair values  
 }
  // console.log(objStr1);
  // console.log(Object.keys(objStr1));
  // console.log(Object.values(objStr1));

 for(char of str2){
  if(!objStr1[char]){
   // console.log(objStr1[char]);
   return false;
   // if the character does not matches then return false 
  }  
   objStr1[char]--  
 }
 return true
}

console.log(anagram('hello','oloeh'))


// logic 
// 1. check the length of both the String
// 2. count each character value of string 1 and store that in object and then check the occurence of each character with string2.