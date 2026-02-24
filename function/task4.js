//Write a program or function that takes a year as input and determines whether it is a leap year.
import pr from "prompt-sync"
const prompt = pr();

let  year = Number(prompt("Enter year: "))
function leapYear(year){
  return year % 4 == 0 && year % 100 != 0 ? `${year} is a Leap year` : `${year} is not a Leap year`;
}
console.log(leapYear(year));