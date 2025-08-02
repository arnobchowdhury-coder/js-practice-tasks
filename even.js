// Subtask-2:

// Find all the even numbers from 78 to 98.

//  */

let num = 78;
// // while loop
while (num <= 98) {
  console.log(num);
  if (num % 2 === 0) {
    console.log('even number', num);
  }
  num++;
}

// for loop

for (let num = 78; num <= 98;){
  console.log(num);
  if (num % 2 === 0) {
    console.log('even number', num);
  }
  num++;
}