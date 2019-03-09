const express = require("express");
const http = require("http");
//configuring
const app = express();
const httpServer = http.Server(app);
const io = require("socket.io")(httpServer);

//routes
app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
})
//setting up socket.io for listening to the server
io.on("connection",function(socket){
    console.log("A user has been connected!");
})

//listining to server
httpServer.listen(3000,function(){
    console.log("Server is running....");
})