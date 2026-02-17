//Use a while loop to count how many numbers between 1 and 100 are divisible by 10.

let i = 1;
while(i <= 100){
    if(i % 10 === 0){
        console.log(`Divisible by 10 = ${i}`)
    }
    i++;
}