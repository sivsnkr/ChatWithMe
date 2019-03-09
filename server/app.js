const express = require("express");
const app = express();
const http = require("http").Server(app);
//configuring
const io = require("socket.io")(http);
const port = process.env.PORT||3000;
//routes
app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
})
//setting up socket.io for listening to the server
io.on("connection",function(socket){
    console.log("A user has been connected!");
    socket.on("disconnect",function(){
        console.log("User Disconnected");
    })
})

//listining to server
http.listen(port,function(){
    console.log("Server is running....");
})