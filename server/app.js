const express = require("express");
const app = express();
const http = require("http").Server(app);
//configuring
const io = require("socket.io")(http);
const port = process.env.PORT||3000;
app.use(express.json());//this replace bodyParser.json(), so we don't have to import one extra library
//routes
app.get("/",function(req,res){
    res.sendFile(__dirname+'/index.html');
})
//setting up socket.io for listening to the server
io.on("connection",function(socket){
    socket.on("disconnect",function(){
        
    })
    socket.on("message",function(msg){
        console.log("Message: "+msg);
        //io.emit("message",msg);
        socket.emit("broadcast",{message: "User has disconnected!"});
    })
})

//listining to server
http.listen(port,function(){
    console.log("Server is running....");
})