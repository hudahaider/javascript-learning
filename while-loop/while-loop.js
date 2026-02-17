/*let i = 0;
let text = "";
while (i < 10) {
  text += `intially i = ${i}    ${i < 10 ? " i < 10" : " i !< 10 "}  ${i < 10 ? `i++ and i = ${i + 1}` : "condition false"} \n`;
  i++;
}
console.log(text);*/



/*const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
let i = 0;
while ( i < cars.length) {
  text += cars[i]+ " ";
  i++
}
console.log(cars[0]);*/


/*let text = "";
let i = 0;
do{
text += "The number is " + i + "\n";
i++;
}
while(i < 10)
  console.log(text)*/


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
  text += cars[i] + "\n";
  i++;
}
console.log(text)

