import pr from "prompt-sync"
const prompt = pr();

let num = prompt("Enter a number : ");
if(num > 0){
    if(num % 2 === 0){
     console.log("Positive Even")
    }
    else{
    console.log("Positive Odd")
}
}

else if(num < 0){
    if(num % 2 === 0){
    console.log("Negative Even")
    }
    else{
    console.log("Negative Odd")
}
}
else{
    console.log(`"Zero" (input text : ${num})`)
}