/**conditional stmt */

// const isLoggedIn=true;
// if(isLoggedIn){
//   console.log("Hello, I'm from GFG...")
// }

// const readlineSync = require('readline-sync');
// const userAge= readlineSync.question("Enter your age: ");
// if(userAge>=18)
// {
//   console.log("You are eligible to vote");
// }
// else{
//   console.log("You are not eligible to vote");
// }


const readlineSync = require('readline-sync');
const number= Number(readlineSync.question("Enter a number: "));
const remainderDivByThree = number % 3;
const remainderDivByFive=number%5;
const remainderDivBySeven=number%7;

// if(remainderDivByThree === 0) {
//   console.log("The number is divisible by 3");
// }else if(remainderDivByFive === 0) {
//   console.log("The number is divisible by 5");
// }
if(remainderDivByThree === 0 && remainderDivByFive === 0) {
  console.log("Fizz");
}else if(remainderDivByThree === 0 || remainderDivByFive === 0) {
    console.log("Buzz");
  }else if(remainderDivBySeven === 0) {
    console.log("Bazz");  
  }
  else{
    console.log("The number is not divisible by 3, 5 or 7");
  }