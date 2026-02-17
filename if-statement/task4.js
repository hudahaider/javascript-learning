import pr from "prompt-sync";
const prompt = pr();

let age = prompt("Enter a number : ");
if (age < 13) {
  console.log("Child");
} 
else if (age >= 13 && age < 20) {
  console.log("Teenager");
} 
else if (age >= 20 && age < 60) {
  console.log("Adult");
} 
else if (age >= 60) {
  console.log("Senior");
} 
else {
  console.log(`"invalid input" (input : ${age})`);
}
