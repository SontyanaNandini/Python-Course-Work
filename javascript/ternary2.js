
const totalMarksScored=100;

// if(totalMarksScored<40){
//   console.log("you need to improve");
// }else if(totalMarksScored<60){
//   console.log("B grade");
// }else if(totalMarksScored<75){
//   console.log("A grade"); 
// }else if(totalMarksScored<85){
//   console.log("A+ grade");
// }else{
//   console.log("Genius");
// }

const result=totalMarksScored<40 ? "you need to improve" :
  totalMarksScored<60 ? "B grade" : 
  totalMarksScored<75 ? "A grade" :
  totalMarksScored<85 ? "A+ grade" : "Genius";
  console.log(result);