import pr from "prompt-sync"
const prompt = pr();

console.log('"Smart Phone Battery Saver Mode Recommender "');

let battery = Number(prompt("Enter battery percentage (0–100) : "));
let charger = prompt("Is charger plugged in? (yes/no) : ");
let time = prompt("Is it daytime or nighttime? (day/night) : ");
switch (true) {
  case battery < 15 && charger === "no":
    console.log("Battery critically low! Enable power saving + dark mode NOW");
    break;
  case battery < 30 && charger === "yes":
    console.log("Still low – keep charging, avoid heavy apps");
    break;
  case battery >= 30 && time === "nighttime":
    console.log("Good to use dark mode");
    break;
  case battery >= 80 && time === "day":
    console.log("You can use normally – brightness up");
    break;
  default:
    console.log("Invalid input");
}
