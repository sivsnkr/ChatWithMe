const express = require("express");
const http = require("http");
const io = require("socket.io");
//configuring
const app = express();
const httpServer = http.Server(app);
const ioServer = io(httpServer);

//routes
app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
})


//listining to server
app.listen(3000,function(){
    console.log("Server is running....");
})