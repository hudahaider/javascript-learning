const cars = ['volvo', 'BMW', 'civic', 'brv']
console.log(cars.indexOf('BMW'))

const list = [1,2,3,2,5,6]
console.log(list.lastIndexOf(5))

const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.includes("Kiwi"))

const numbers = [1,2,3,4,5,6]
let num = numbers.find(myfunc)
function myfunc(value, index, array){
   return value > 4
}
console.log(num)

const value = [1,2,3,4,5,6]
let val = value.findIndex(myfunction)
function myfunction(value, index, array){
   return value > 4
}
console.log(value)

const temp = [20, 30, 55, 67, 23]
let high = temp.findLast(x => x > 55)
console.log(high)

const temperature = [20, 30, 55, 67, 23]
let position  = temperature.findLastIndex(x => x > 55)
console.log(position)