//Use a for loop to print a right-angle triangle pattern using *.
let star = '';
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
      star =star + '*'  
    }
   console.log(star)
}
