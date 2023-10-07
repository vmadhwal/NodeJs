const fs= require('fs');

//Read file asynchornously
fs.readFile('data.txt',(err, data)=>{
if(err){
    console.log(err)
    }else{
        console.log(data.toString())
    }
})

// Write  data
fs.writeFile("data.txt", 'New Employee', ( err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File is written");
    }
})

// Append
fs.appendFile('data.txt','\n Another Empoyee',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Updated...")
    }
})

//delete

fs.unlink('data.txt', (err)=>{
if(err){
    console.log(err)
}
else{ 
    console.log("File Deleted Sucessfully")
}
})
console.log("This is another operation");
 