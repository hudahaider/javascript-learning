const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: () => person.firstName + person.lastName
};

console.log(person.firstName, person.lastName);


const car = {
    name: "sonata",
    color: "white",
    weight: "100kg",
    properties: () => car.name + car.color + car.weight
}
console.log(car.name)
console.log(car.color)
console.log(car.weight)


const greet = (name) =>  `Hello ${name}!`
console.log(greet("john"))


const addNumbers = (a, b) => a + b
console.log(`Sum of 2 numbers are: ${addNumbers(5, 6)}`)


const checkEvenOdd = (num) => {
      return num % 2 == 0 ? `Even: ${num}` : num != 0 ? `Odd: ${num}`: "Zero"
}
console.log(checkEvenOdd(3));
console.log(checkEvenOdd(4));


 const findLargest = (x, y, z) => {
    if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}
console.log(`Largest number = ${findLargest(25, 12, 10)}`);


const calculate = (num1, num2, operator) => {
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


const getGrade = (score) => {
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


const checkNumber = (num) => {
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


const getDay = (dayNumber) => {
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


const calculator = (num1, num2, operator) => {
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


const ageCategory = (age) => {
  return age < 13 ? "Child" : age >= 13 && age < 20 ? "Teen" : age >= 20 && age < 60 ? "Adult" : age >= 60 ? "Senior" : "Invalid input";
}
console.log("Age Category :", ageCategory(22));


const sayHello = () => "Hello World";
let a = sayHello();
let b = sayHello();
let c = sayHello();
console.log(sayHello());


const toCelsius = (fahrenheit) => (5/9) * (fahrenheit - 32)
console.log(`${toCelsius(80).toFixed(0)} C`)


const say = (name) => `Hello ${name}`;
console.log(say("John"))


const fullName = (firstname, lastname) => `Name: ${firstname} ${lastname}`;
console.log(fullName("John", "Doe"));


const findMax = function () {
  let max = -Infinity
  for(let i = 0; i < arguments.length; i++){
    if(arguments[i] > max){
      max = arguments[i]
    }
  }
  return max;
}
console.log(`Largest number = ${findMax(24,34,77,2,12,4,78)}`)


const sumAll = function(){
  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    sum = sum + arguments[i]
  }
  return sum;
}
console.log(`Sum of all numbers = ${sumAll(10, 20, 40,30)}`);


const add = (a, b) => a + b;
console.log(add(2,5))

const Hello = () => "Hello World!"
console.log(Hello());


const student = {
  name: "john",
  greet() {
    return this.name;
  }
}
console.log(`Hello, ${student.greet()}`);