// Create a function that takes a single number as input and determines whether it is an even or an odd integer.
import pr from "prompt-sync"
const prompt = pr();

let num = Number(prompt("Enter any number: "))
function number(num){
  return num % 2 == 0 ? `${num} is Even` : num % 2 != 0 ? `${num} is Odd` : "Invalid Input";
}
console.log(number(num));