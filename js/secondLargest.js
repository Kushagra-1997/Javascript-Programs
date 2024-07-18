// How To find second Largest value in array

let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

let largest = -Infinity;
let secondLargest = -Infinity;

for(let i=0; i<arr.length; i++){
 if(arr[i] > largest){
  secondLargest = largest;
  largest = arr[i];
 }
 else if(arr[i] > secondLargest && arr[i]!= largest){
  secondLargest = arr[i];
 }
}

console.log(`Largest value is: ${largest}`);
console.log(`secondLargest value is: ${secondLargest}`);
