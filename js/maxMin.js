// How To find max/min in a given array in javascript

// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// let max = arr[0];
// let min = arr[0];

// for(let i=1; i<arr.length; i++){
//  if(arr[i] > max){
//   max = arr[i];
//  }
//  if(arr[i] < min){
//   min = arr[i];
//  }
// }

// console.log(`Maximum value is: ${max}`);
// console.log(`Minimum value is: ${min}`);


let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Using Math.max and Math.min with spread syntax
let max1 = Math.max(...arr);
let min1 = Math.min(...arr);

console.log("Max using Math.max:", max1); // Output: Max using Math.max: 9
console.log("Min using Math.min:", min1);