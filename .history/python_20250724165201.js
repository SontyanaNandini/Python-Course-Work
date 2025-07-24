// console.log("hello world");
// console.log("my name is nandini sontyana");

const { type } = require("os");

// var message;
// message="hello Nandini Sontyana!";
// message="hello geeks!";
// console.log(message);

// let text;
// text="js is the best bestest";
// console.log(text)
// let myname="my name is nandini";
// console.log(myname)

// const number=3;
// console.log(number);
// let text="geeks";
// // let text="go";
//  text="go";
// console.log(text)

//DATATYPES
/**string */
// let userName="123456";
// console.log(typeof userName);
/**number */
// let age=99;
// console.log(typeof age)
/**boolean */
// let productInCart=false;
// console.log(typeof productInCart);
/**undefined*/
// let userAge;
// console.log(typeof userAge);
/**null */
// let noValue=null;
// console.log(typeof noValue);

/**object */
// const personDetails={name:"nandini",age:20,education:"btech"};
// console.log(typeof personDetails);
// const arrayDemo=[1,2,3,4,5];
// console.log(typeof arrayDemo);

//CONCATENATION
//TEMPLATE LITERAL / STRINGS
let user="Nandini!";
let age=20;
// let message ="My name is "+ user + "and I am is "+ age +" years old";
// console.log(message);
// let text='My name is ${user} and Iam ${age} years old.'
// console.log(text);
// let txt=`My name is ${user} and I am ${age} years old.`
// console.log(txt);
// let multext=`my name is ${user} 
// i am ${age} years old
// i love to code
// i love to text
// i love to sleep`
// console.log(multext);

//ARITHMETIC OPERATORS
//12 3
// const x="mango";
// const y="apple";

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**2);
// console.log(y**3);

//TYPE CONVERSION
/** to string */
/**to boolean */
/**to number */

// const a="3";
// const b="10";

// console.log(Number("3")+Number(b));
// const a="3";
// const b="10";

// const c=Number(a);
// const d=Number(b);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// const a=3;
// const b=10;

// const c=String(a);
// const d=String(b);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// const a="3";
// const b="10";
// console.log(Boolean (""));

// const c=String(a);
// const d=String(b);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// const a="3";
// const b=0;
// console.log(Boolean (b));

//READLINE SYNC
const readlineSync=require("readline-sync");
const userName=readlineSync.question("May I know your name?");
console.log(userName);