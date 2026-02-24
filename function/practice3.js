//Task 1: Student Result System
const Student = {
    studentName: "john",
    studentMarks: [60, 70, 75, 65, 80],
    totalMarks: 500,
}

let obtainedMarks = 0;

for(let i = 0; i < Student.studentMarks.length; i++){
    obtainedMarks += Student.studentMarks[i]
}

let percentage = (obtainedMarks / Student.totalMarks) * 100;

    function grade(percentage){
        return percentage >= 80 ? "A" : percentage >= 70 ? "B" : percentage >=50 ? "C" : percentage <= 49 ? "Fail" : "Invalid input"
    }
console.log(`Student Name: ${Student.studentName.toUpperCase()}`);
console.log(`Student Marks: ${Student.studentMarks}`);
console.log(`Percentage: ${percentage} %`);
console.log(`Grade: ${grade(percentage)}`)


//Task 2: Number Analyzer
import pr from 'prompt-sync'
const prompt = pr()

let number = Number(prompt('Enter number:'))
function Analyzer(number){
    return number >= 0 && number %2 == 0 ? "Positive Even" : number >= 0 && number %2 != 0 ? "Positive Odd" : number < 0 && number %2 == 0 ? "Negative Even" : number < 0 && number %2 != 0 ? "Negative Odd" : "Invalid input"
}
    for(let i = 0; i <= number; i++){
        console.log(`${i} is ${Analyzer(i)}`);
    }


//Exercise 1: Simple Arrow Function
const square = (num) => num * num 
console.log(`Square of number is ${square(4)}`);


//Exercise 2: Arrow Function with Multiple Parameters
const calculateTotal = (price, quantity) => {
    if(quantity == 0){
    return  "Invalid quantity"
   }
   let total = price * quantity;//logic 
   return total;
}

console.log(`Total = ${calculateTotal(100, 2)}`);


//Exercise 3: Arrow Function + Array
const getEvenNumbers = (x = [1, 2, 3, 4, 5, 6, 7]) => {
    let evenNumbers = [];
    for(let i = 0; i < x.length; i++){
        if(x[i] %2 == 0){
            evenNumbers.push(x[i])
        }
    }
    return evenNumbers;
}
console.log(getEvenNumbers());


//Exercise 4: Create & Access Object
const student = {
    name: "john",
    age: 20,
    course: "Computer science",
    isEnrolled: "yes"
}
console.log(`Name: ${student.name} \n Course: ${student.course}`);


//Exercise 5: Object with Method
const bankAccount = {
    accountHolder: "john" ,
    balance: 5000,
    deposit: function(amount){
        this.balance += amount //blance + amount
        return this.balance;
    }
}
console.log(bankAccount.deposit(500));