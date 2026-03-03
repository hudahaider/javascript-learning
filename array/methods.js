const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.length)

let list = fruits.toString()
console.log(list)

let index = fruits.at(3)
console.log(index)

let join = fruits.join("-")
console.log(join)

fruits.push("Kiwi")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift("Melon")
console.log(fruits)

console.log(Array.isArray(fruits))

//fruits.copyWithin(1)
//console.log(fruits)

const girls = ["sara", "alia", "zara"]
const boys = ["ali", "ahmed"]
const students = girls.concat(boys)
console.log(students)

const array = [[1,2],[3,4],[5,6]]
console.log(array.flat())

const arr = [1,2,3,4,5]
console.log(arr.flatMap(x => [x, x*10]))

console.log(arr.slice(1))

//console.log(arr.splice(2, 0))