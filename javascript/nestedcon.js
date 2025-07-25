const readlineSync=require("readline-sync");
const number=Number(readlineSync.question("Enter a number: "));
const remainder=number%2;
if(remainder===0) {
  console.log(`${number} is even`);
  if(number%4===0){
    console.log(`${number} is also divisible by 4`);
  }
  else{
    console.log(`${number} is not divisible by 4`);
  }
}
else{
  console.log(`${number} is odd`);
  if(number%5===0){
    console.log(`${number} is also divisible by 5`);
  }
  else{
    console.log(`${number} is not divisible by 5`);
  }
}