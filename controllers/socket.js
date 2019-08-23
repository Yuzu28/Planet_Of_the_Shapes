
exports = module.exports = function(io){
    io.on('connection',function(socket){
        
        io.emit("greetings","Welcome to Planet of the Shapes");
        //io.to(socket.id).emit("getName");
        // socket.on('sendName',sendName)
      
        socket.on("joinServer",joinServer)
      
        socket.on('sendMessage',broadcastMessageToServer);
      
        socket.on('kill', broadcastKillFeed);
      
        // socket.on('newGameRequest',newGameRequest);
        // socket.on('newGame',newGame);
      
        // socket.on('disconnect',disconnect)
      
        function broadcastMessageToServer(server, message){
            console.log(message)
          socket.broadcast.to(server).emit("sendMessage",message);
        }
      
        function broadcastKillFeed(server, moveData){
          socket.broadcast.to(server).emit("move",moveData);
        }
        // function newGame(room){
        //   io.to(room).emit("newGame");
        // }
      
        // function newGameRequest(room){
        //   if(room)
        //     socket.broadcast.to(room).emit("newGameRequest");
        // }
      
        // function joinRequestTo(name){
        //   console.log('sendRequest to ' + name);
        //   for(var i=0;i<users.length;i++){
        //     if(users[i].name===name){
        //       socket.broadcast.to(users[i].room).emit("joinRequestFrom",socket.id);
        //       break;
        //     }
        //   }
        // }
      
        function joinServer(server){
          console.log("joined server" + server);
          socket.broadcast.to(server).emit("sendMessage","SERVER : a user just joined");
          if(server){
            socket.join(server);
            users.filter(user=>user.id == socket.id)[0].room = room;
          }
        }
        // function sendName(name){
        //   var isNameValid = true;
        //   for(var i=0;i<users.length;i++){
        //     if(users[i].name===name){
        //       isNameValid = false;
        //       socket.emit('nameError','Name is already existed, Try again');
        //       return;
        //     }
        //   }
        //   if(isNameValid){
        //     var room = generateRoomId();
        //     users.push({id:socket.id, name:name, room:room});
        //     socket.join(room);
        //     socket.emit("roomId",room);
        //   } 
        
      
        // function joinRequestAnswer(answer,socketId){
        //   var user = users.filter(user=>user.id == socket.id)[0];
      
        //   if(answer=="yes"){
        //     socket.to(socketId).emit("joinRoom",user.room, user.name);
        //   }
        // }
        // function disconnect(){
        //   for(var i =0;i<users.length;i++){
        //     if(users[i].id == socket.id){
        //       socket.broadcast.to(users[i].room).emit("opponentDisconnect");
        //       users.splice(i,1);
        //       break;
        //     }
        //   }
      
        // }
      
      })
      
}
