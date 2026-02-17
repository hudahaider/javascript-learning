import pr from "prompt-sync"
const prompt = pr();

console.log('"Meal Suggestion based on Time & Weather "')

let time = Number(prompt("Enter current time (use 24-hour format) : "))
console.log(`The default type of time is: ${typeof time} `)

let weather =  prompt("Enter weather (sunny/rainy) : ")
switch(true){
    case (time >= 5 && weather == "sunny"):
        console.log("Paratha + chai")
    break;
    case (time >= 5 && time < 17 && weather == "rainy"):
        console.log("Hot omelette + chai")
    break;
    case (time === 12):
        console.log("Biryani or pulao")
    break;
    case (time >= 17 && weather == "rainy"):
        console.log("Pakora & chai")
    break;
    case (time >= 17 && weather == "sunny"):
        console.log("BBQ or rolls")
    break;
    case (time >= 21 || time < 4):
        console.log("Light dinner or anda paratha")
    break;
    default:
        console.log("Invalid input")
}