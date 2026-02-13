const prompt = require('prompt-sync')();

console.log('"Exam Result Comment Generator"')

let enter = prompt("Enter your result : ")
switch(true){
    case enter >= 90:
        console.log("Outstanding! Keep it up 🔥")
        break;
    case enter >= 80:
        console.log( "Excellent – Very good effort")
        break;
    case enter >= 70:
        console.log( "Good – Can do even better")
        break;
    case enter >= 60:
        console.log("Fair – Needs more practice")
        break;
    case enter >= 50:
        console.log("Pass – Work harder next time")
        break;
    case enter < 50:
        console.log( "Failed – Don't lose hope, try again!")
        break;
    default:
        console.log("Invalid input")
}