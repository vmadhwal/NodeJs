//Create and writing a file.
const fs= require('fs');

try{
    fs.writeFileSync("employee.txt", "Name:Santo, Age:34, Position:Manager ")
}
catch(err){
console.log(err)
}

//Append  another employee data
fs.appendFileSync("employee.txt", "Name:Bantos, Age:32, Position:sweaper"); 
console.log('This is another operation being  performed ')

//Deleting a file
try{
    fs.unlinkSync("employee.txt");
}
catch(err){
    console.log("File doesn't exist");
}


