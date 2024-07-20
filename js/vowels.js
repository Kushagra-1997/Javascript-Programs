function vowels(str){
 const vowels = 'aeiouAEIOU';
 let result = '';
 for(ch of str){
  if(vowels.includes(ch)){
   result += ch 
  }
 }
 return result;
}

console.log(vowels('kushagra'));