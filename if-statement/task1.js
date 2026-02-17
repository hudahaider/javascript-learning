import pr from "prompt-sync"
const prompt = pr();

let  marks = prompt("Enter your marks: ")
if( marks >= 80 ){
    console.log("Grade A")
}
else if(marks >= 60){
    console.log("Grade B")
}
else if(marks >= 40){
    console.log("Grade C")
}
else{
    console.log(`"Fail" (input : ${marks})`)
}
