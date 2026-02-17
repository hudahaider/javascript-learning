//Use a while loop to check whether a number is a palindrome.

let n = 1331, reversed = 0, original = n;
while(n > 0) {
    reversed = (reversed * 10) + (n % 10);
    n = n / 10;
}
console.log(`the number is palindrome ${reversed==n}`)
