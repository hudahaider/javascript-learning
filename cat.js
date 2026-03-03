// scope
// let a = 5;

// function
// const fn = () => {
//     let a = 4
//   console.log("Function Scope", a);
// };

// fn();
// console.log("Global Scope", a);

// const person = {
//   firstName: "Ali",
//   add: function () {
//     return "Hello ";
//   },
// };
// console.log(person.firstName, person.add());
// const date = new Date();
// console.log(typeof date);
// console.log("Today", date.toISOString());

//old

// let car1 ="toyata"
// let car2 ="volva"
// let car3 ="suzuki"
// console.log(car1, car2, car3)

//const car = ["toyata", "volva", "suzuki", 12, 13, 14, true, false];
// car.push('Honda')
// car.pop(car[0])

// for (let e of car) {
//   //(in) -> we will get indexes,  while when we use (of) -> we will get values
//   console.log(e);
// }

//console.log(car.length)

// const number = []

// for(let i=0; i<100;i++){
//     number.push(i)
// }
// console.log(number)

/*const d = new Date()
console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDay())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())
console.log(d.getMilliseconds())
console.log(d.getTime())*/

//const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August']
//const d = new Date("2026-03-02")
//console.log(d.getMonth())
//console.log(d.getHours())


//const d = new Date("2026-03-02")
//d.setFullYear(2024)
//d.setMonth(4)
//d.setDate(23)
//d.setHours(12,20,10)
//console.log(d.toString())


const cars = ['volvo', 'sonata', 'BMW']
//let car = cars[1]
cars[0] = "opel"
console.log(cars)

const fruits = ['apple', 'mango', 'orange']
console.log(fruits.length)

const person = []
person[0] = 'john',
person[1] = 'mark',
person[2] = '20',
person[3] = 'student'
console.log(person.length)
console.log(person[0])
console.log(typeof person[0])
console.log(typeof person)
console.log(person instanceof Array)

