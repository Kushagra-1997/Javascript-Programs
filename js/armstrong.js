function checkArmstrongNumber(num) {
 const str = num.toString();
 const strLength = str.length;
 let sum = 0;

 for (let char of str) {
   sum += Math.pow(parseInt(char), strLength);
 }

 // Return true if the sum is equal to the original number, otherwise false
 return sum === num;
}

if (checkArmstrongNumber(153)) {
 console.log('Armstrong Number');
} else {
 console.log('Not an Armstrong Number');
}
