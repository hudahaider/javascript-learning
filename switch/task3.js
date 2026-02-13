const prompt = require('prompt-sync')();

console.log('"Pakistani Electricity Bill Category"')

let enter = prompt("Enter electricity bill : ")
switch(true){
    case enter <= 50:
        console.log("Protected consumer – very cheap rate")
    break;
    case enter <= 100:
        console.log("Protected – still reasonable")
    break;
    case enter <= 200:
        console.log("Normal slab")
    break;
    case enter <= 300:
        console.log("Higher slab – bill will be noticeable")
    break;
    case enter <= 700:
        console.log("Expensive slab")
    break;
    default:
        console.log("Invalid input")
}