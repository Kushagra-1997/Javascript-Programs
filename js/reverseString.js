function reverseString(str){
 res = str.split('').reverse().join('');
 console.log(res); 
}

console.log(reverseString('hellow India'));

// Alternative Approach
 
function reverseString(str){
 let reversed = '';
 for(let i=str.length-1 ; i>=0 ; i--){
  reversed += str[i];
 }
 return reversed;
}


console.log(reverseString('hellow India'));