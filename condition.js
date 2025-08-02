/***task-1

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burger = 1000;
if(burger < 500){
  console.log("free coke");
}
else {
  console.log('coke');
  const coke = 30;
  console.log('coke=30tk');
}

/*** task-2

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const height = 5.9;
const weight = 80;

const BMI = weight / (height * height);

if (BMI < 18.5) {
   console.log(`your bmi is ${BMI} , you are underweight`);
}
else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log(`your bmi is ${BMI},you are normal`);
}
else if (BMI >= 25 && BMI <= 29.9) {
  console.log(`your bmi is ${BMI},you are overweight`);
}
else {
  console.log(`your bmi is ${BMI},you are obese`);
}
console.log(BMI.toFixed(2));

/***Task-3

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const physics = 70;

if (physics >= 90 && physies <= 100) {
  console.log('A');
}
else if (physics >= 80 && physics < 90 )  {
  console.log('B');
}
else if (physics >= 70 && physics < 80) {
  console.log('C');
}
else if (physics >= 60 && physics < 70) {
  console.log('D');
}
else {
  console.log('F');
}

/***task-4

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var score = 100;

if (score <= 80) {
  console.log("Go for a lunch");
}
else {
  if (score > 80 && score >= 60) {
    console.log("Good luck next time.");
  }
  else {
    if (score < 60 && score >= 40) {
      console.log('Keep your friend msg unseen.');
    }
    else {
      if (score < 40) {
        console.log('Block your friends');
      }
    }
    
  }
}
  

/***Task-05

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

var num1 = 60;
var num2 = 40;
sum = num1 + num2;

if (num1 > num2) {
  console.log(sum);
  sum = num1 * 2;
  console.log(sum);
}


// ternary oparator
// num1 < num2 ? console.log(sum) : console.log(sum);
num1 > num2 ? console.log(sum) : console.log(sum);


// Tasks 06
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 62;
const price = 800;
if (age < 10) {
  console.log('free');
}
else if (age >= 15) {
  // 50% discount
  const discount = price * 50 / 100;
  const payAmount = price - discount;
  console.log(payAmount ,`:students`);
}
else if (age >= 60) {
  // 15% discount
  const discount = price * 15 / 100;
  const payAmount = price - discount;
  console.log(discount, 'Senior citizen');
}
else {
  console.log(price);
}




