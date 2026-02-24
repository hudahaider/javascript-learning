
/*let text=""
for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) { continue; }
  text += "The number is " + i + "\n";
}
console.log(text)*/

function div(a, b){
  return a / b;
}
function mul(a, b){
  return a * b;
}
function add(a, b){
  return a + b;
}
function sub(a, b){
  return a - b;
}

let result1 = div(4, 8)
let result2 = mul(2, 5)
let result3 = add(10, 2)
let result4 = sub(20, 3)

console.log(`4 / 8 = ${result1}`)
console.log(`2 * 5 = ${result2}`)
console.log(`10 + 2 = ${result3}`)
console.log(`20 - 3 = ${result4}`)


