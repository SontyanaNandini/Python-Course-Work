/**program that read 3 string and prints smallest */

const firstString="apple";
const secondString="mango";
const thirdString="watermelon";

const lenFirstString=firstString.length;
const lenSecondString=secondString.length;
const lenThirdString=thirdString.length;

if (lenFirstString < lenSecondString && lenFirstString < lenThirdString) {
  console.log(firstString + " is the smallest string");
} else if (lenSecondString < lenFirstString && lenSecondString < lenThirdString) {
  console.log(secondString + " is the smallest string");
} else if (lenThirdString < lenFirstString && lenThirdString < lenSecondString) {
  console.log(thirdString + " is the smallest string");
}else{
  console.log("Found 2 or more strings are of equal length");
}
