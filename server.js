//create a server using nodeJS

//1. Import http library/module
const http= require("http");

//2. Create Server
const server= http.createServer((req, res)=>{
//here comes the request
if(req.url==='/product'){
    return res.end('This is product page');
}
else if(req.url==='/user'){
   return res.end('This is User page');
}
res.end('Welcome to NodeJS sever');
});

//3. A port to listen to client's request
server.listen(3100, ()=>{
    console.log('Server is listening on port 3100');
});

