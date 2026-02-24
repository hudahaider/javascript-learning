//Write a function that accepts two inputs (e.g., numbers) and checks whether they are equal or not, returning an appropriate message.
import pr from "prompt-sync"
const prompt = pr();

let num1 = Number(prompt("Enter any number: "))
let num2 = Number(prompt("Enter any number: "))

function inputs(num1, num2){
  return num1 == num2 ? "Both numbers are equal" : "Both numbers are not equal";
}
console.log(inputs(num1, num2));