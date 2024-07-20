const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = [];
const even = [];

// Iterate through each element in the array
arr.forEach((item) => {
  // Check if the item is even
  if (item % 2 === 0) {
    even.push(item); // Add to even array
  } else {
    odd.push(item); // Add to odd array
  }
});

// Print the odd and even arrays
console.log('Odd numbers:', odd);   // Output: Odd numbers: [1, 3, 5, 7, 9]
console.log('Even numbers:', even); // Output: Even numbers: [2, 4, 6, 8, 10]
