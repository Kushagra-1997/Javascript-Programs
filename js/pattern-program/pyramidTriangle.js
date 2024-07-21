function printPyramidTriangle(rows) {
 for (let i = 1; i <= rows; i++) {
   let line = '';

   // Add spaces to the left
   for (let j = i; j < rows; j++) {
     line += ' ';
   }

   // Add stars with spaces between them
   for (let k = 1; k <= (2 * i - 1); k++) {
     line += '*';
   }

   console.log(line);
 }
}

const rows = 5;
printPyramidTriangle(rows);
