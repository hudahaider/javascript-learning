//Create a function named greet that takes a parameter name and returns "Hello, [name]!".
function greet(name) {
  return `Hello ${name}!`;
}
console.log(greet("World"));


//Write a function addNumbers that takes two numbers as arguments and returns their sum.
function addNumbers(a, b) {
  return a + b;
}
console.log(`Sum of 2 numbers are: ${addNumbers(5, 6)}`);

//Create a function checkEvenOdd that takes a number and returns "Even" if the number is even and "Odd" if the number is odd.
function checkEvenOdd(num) {
      return num % 2 == 0 ? `Even: ${num}` : num != 0 ? `Odd: ${num}`: "Zero"
}
console.log(checkEvenOdd(3));
console.log(checkEvenOdd(4));


//Write a function findLargest that takes three numbers and returns the largest among them.
function findLargest(x, y, z) {
    if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}
console.log(`Largest number = ${findLargest(25, 12, 10)}`);

//Create a function calculate that takes three arguments: num1, num2, and operator (+, -, *, /) and returns the result of the operation.
function calculate(num1, num2, operator) {
  switch (true) {
    case operator === "/":
      return num1 / num2;
      break;
    case operator === "*":
      return num1 * num2;
      break;
    case operator === "+":
      return num1 + num2;
      break;
    case operator === "-":
      return num1 - num2;
      break;
    default:
      console.log("Invalid input");
  }
}
console.log(calculate(2, 4, "/"));
console.log(calculate(2, 4, "*"));
console.log(calculate(2, 4, "+"));
console.log(calculate(2, 4, "-"));

//Grade Checker (Function + Ternary)
function getGrade(score) {
  if (score >= 80) {
    return `Score = ${score} "A"`;
  } else if (score >= 60 && score <= 80) {
    return `Score = ${score} "B"`;
  } else if (score >= 40 && score <= 60) {
    return `Score = ${score} "C"`;
  } else if (score < 40) {
    return `Score = ${score} "F"`;
  } else {
    console.log("Invalid input");
  }
}
console.log(getGrade(90));

//Even/Odd & Positive/Negative (Function + Nested If)
function checkNumber(num) {
  if (num >= 0)
    if (num % 2 == 0) {
      return `${num} = "Positive Even"`;
    } else if (num >= 0)
      if (num % 2 != 0) {
        return `${num} = "Positive Odd"`;
      } else if (num < 0)
        if (num % 2 == 0) {
          return `${num} = "Negative Even"`;
        } else if (num < 0)
          if (num % 2 != 0) {
            return `${num} = "Negative Odd"`;
          } else {
            console.log("Invalid input");
          }
}
console.log(checkNumber(9));

//Day of the Week (Function + Else If)
function getDay(dayNumber) {
  if (dayNumber == 1) {
    return "Monday";
  } else if (dayNumber == 2) {
    return "Tuesday";
  } else if (dayNumber == 3) {
    return "Wednesday";
  } else if (dayNumber == 4) {
    return "Thursday";
  } else if (dayNumber == 5) {
    return "Friday";
  } else if (dayNumber == 6) {
    return "Saturday";
  } else if (dayNumber == 7) {
    return "Sunday";
  } else {
    console.log("Invalid input");
  }
}
console.log(getDay(4));

//Simple Calculator (Function + Nested If)
function calculator(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else if (operator == "/") {
    return num1 / num2;
  } else {
    console.log("Invalid input");
  }
}
console.log(`Sum = ${calculator(3, 3, "+")}`);
console.log(`Sub = ${calculator(3, 3, "-")}`);
console.log(`Mulriply = ${calculator(3, 3, "*")}`);
console.log(`Divide = ${calculator(3, 3, "/")}`);

//Age Category (Function + Ternary + Nested If)
function ageCategory(age) {
  return age < 13 ? "Child" : age >= 13 && age < 20 ? "Teen" : age >= 20 && age < 60 ? "Adult" : age >= 60 ? "Senior" : "Invalid input";
}
console.log("Age Category :", ageCategory(22));


//Multipl call
function sayHello() {
  return "Hello World";
}

let a = sayHello();
let b = sayHello();
let c = sayHello();

console.log(sayHello());


//toCelsius
function toCelsius(fahrenheit){
  return (5/9) * (fahrenheit - 32)
}
console.log(`${toCelsius(80).toFixed(0)} C`)


//sayHello
function say(name){
  return `Hello ${name}`
}
console.log(say("John"))


//fullName
function fullName(firstname, lastname){
  return `Name: ${firstname} ${lastname}`
}
console.log(fullName("John", "Doe"));


//maxnumber
function findMax(){
  let max = -Infinity
  for(let i = 0; i < arguments.length; i++){
    if(arguments[i] > max){
      max = arguments[i]
    }
  }
  return max;
}
console.log(`Largest number = ${findMax(24,34,77,2,12,4,78)}`)


//sumall
function sumAll(){
  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    sum = sum + arguments[i]
  }
  return sum;
}
console.log(`Sum of all numbers = ${sumAll(10, 20, 40,30)}`);


//arrowfunction
const add = (a, b) => a + b;
console.log(add(2,5))

const Hello = () => "Hello World!"
console.log(Hello());


//
const person = {
  name: "john",
  greet: () =>{
    return this.name;
  }
}
console.log(person());