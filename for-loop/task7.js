//Use a for loop to print numbers from 1 to 20 and print "Pass" if the number is greater than 10, otherwise print "Fail".

for(let i = 1; i <= 20; i++){
    if(i > 10){
        console.log(`The number > 10 is ${i} = "Pass" `)
    }
    else{
        console.log(`The number < 10 is ${i} = "Fail" `)
    }
}