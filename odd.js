/***task-2

Subtask-1:

Find all the odd numbers from 61 to 100.

 */





let number = 61;
// while loop (odd number)
while (number <= 100) {
  console.log(number);
  if (number % 2 === 1) {
    console.log('odd number', number);
  }
  number++;
}

// for loop (odd number)
for (let number = 61; number <= 100;){
  console.log(number);
  if (number % 2 === 1) {
    console.log('odd number',number)
  }
  number++;
  
}



