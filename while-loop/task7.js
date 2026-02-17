//Use a while loop to print numbers from 1 to 25 and print "Fizz" for numbers divisible by 5.

let i = 1;
while(i <= 25){
    if(i % 5 === 0){
        console.log(`Numbers divisible by 5 = ${i} is "Fizz"`)
    }
    i++;
}