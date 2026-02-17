//Use a while loop to print numbers from 1 upward, but stop when the sum becomes greater than 100.

let i = 1;
let sum = 0;
while(i <= 100){
    sum += i;
    if(sum >= 100) {break;}{
        console.log(sum)
    }
   i++; 
}