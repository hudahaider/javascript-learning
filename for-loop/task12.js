//Use a for loop to count the total digits in a number.

let num = 1234567;
let count = 0;

if (num == 0) {
  count = 1;
} else {
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    count++;
  }
}
console.log(count);
