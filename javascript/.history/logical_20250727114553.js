/**logical operator with conditional stmt 
 * 1. OR || if atleast one condition is true || return true ||otherwise false
 * 2. AND && all conditions must be true && return true && otherwise false
 * 3. NOT !
 * 4. NULL COALESCING ??*/

const physics=90;
const maths=95;
const chemistry=83;
const biology=96;

// if(physics>85 && maths>85 && chemistry>85){
//   console.log("You are eligible for the Eng....");
// }
// else{
//   console.log("You are not eligible for the Eng....");
// }

// if(physics>85 || maths>90 || chemistry>89){
//   console.log("You are eligible for the Eng....");
// }else{
//   console.log("You are not eligible for the Eng....");
// }
const isStudentEligible=false;
if(isStudentEligible){
  console.log("You are eligible....");
}