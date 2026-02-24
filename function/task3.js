// Design a function that reads a student's score (e.g., out of 100) and returns their grade (e.g., "Pass" for >= 40, "Fail" otherwise).
import  pr from "prompt-sync"
const prompt = pr();

let score = Number(prompt("Enter your score: "))
function studentScore(score){
  return score >= 40 ? `"Pass" : Score is ${score}` : `"Fail" : Score is ${score}`;
}
console.log(studentScore(score));