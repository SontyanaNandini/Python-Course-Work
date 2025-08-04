/** logical operator 2 */

// const firstName="nandu";
// const nickName="bunny";

//console.log(nickName); // returns first truthy value
//console.log(`Name : ${nickName}`)
//console.log(firstName||nickName);
// console.log(Boolean("nandu"));
// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// const firstName=null;
// const nickName=undefined;

// const userName=firstName || nickName;
// console.log(`User Name : ${userName}`);

// const firstName=null;
// const nickName=undefined;

// const userName=firstName || nickName || null;
// console.log(`User Name : ${userName}`);

// const firstName=null;
// const nickName="bunny";

// const userName=firstName || nickName || null;
// console.log(`User Name : ${userName}`);


// const firstName=null;
// const nickName="";

// const userName=firstName || nickName || null;
// console.log(`User Name : ${userName}`);

// const firstName=null;
// const nickName="";

// const userName=firstName || nickName || null || "HiddenGeek"; //Short Circuiting

// console.log(`User Name : ${userName}`);

// let a=10;
// let b;
// console.log(a+b);

// let a=10;
// let b;
// console.log(a+(b||0));

// let a=10;
// let b=3;
// console.log(a+(b||0));

// let a=10;
// let b=null;
// console.log(a+(b||0));


// let a=10;
// let b="";
// console.log(a+(b||0));

// const firstName="nandu";
// const nickName="bunny";
// const username= firstName&& nickName; // returns first truthy value
// console.log(`Name : ${username}`)

// const firstName="nandu";
// const nickName="";
// const username= firstName&& nickName; // returns first truthy value
// console.log(`Name : ${username}`)

// const firstName="nandu";
// const nickName=null;
// const username= firstName&& nickName; // returns first truthy value
// console.log(`Name : ${username}`)

// const firstName="nandu";
// const nickName="bunny";
// const username= firstName&& nickName && 'nandini'; // returns first truthy value
// console.log(`Name : ${username}`)

// const firstName="";
// const nickName="bunny";
// const username= firstName&& nickName && 'nandini'; // returns first truthy value
// console.log(`Name : ${username}`)


// console.log(3||2||1);
// console.log(""||2||0);
// console.log(""||0||undefined);
// console.log(""||null||2);

console.log(3&&2&&1);
console.log(0&&""&&2);
console.log(null && 0 && undefined);