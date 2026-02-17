import pr from "prompt-sync";
const prompt = pr();

let temp = prompt("Enter a temp : ");
if(temp <= 0){
    console.log("Freezing")
}
else if(temp > 0 && temp <= 10){
    console.log("Cold")
}
else if(temp > 0 && temp <= 25){
    console.log("Warm")
}
else if(temp > 25){
    console.log("Hot")
}
else{
    console.log(`"invalid input" (input : ${temp})`)
}