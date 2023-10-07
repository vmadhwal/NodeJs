//1. Import Readlines
const readline= require('readline')

//2. Configure interface  to conect with terminal/command line.
const inter= readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})      

//Reading value 
inter.question("Enter first number", (num1)=>{
    inter.question("Enter second number", (num2)=>{
        //num1 , num2
        const sum=Number( num1) +Number (num2);
        console.log(sum);
    })
});