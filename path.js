const fs= require('fs');
const path= require('path');

//Read file asynchornously
const filePathresolve=path.resolve('src', 'home', 'data.txt');
const filePath= path.join('src', 'home', 'data.txt');
console.log(filePath);
console.log(filePathresolve);
fs.readFile(filePath,(err, data)=>{
if(err){
    console.log(err)
    }else{
        console.log(data.toString())
    }
})