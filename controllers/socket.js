
exports = module.exports = function(io){
    io.on('connection',function(socket){
        
        io.emit("greetings","Welcome to Planet of the Shapes");
        //io.to(socket.id).emit("getName");
        // socket.on('sendName',sendName)
      
        socket.on("joinServer",joinServer)
      
        socket.on('sendMessage',broadcastMessageToServer);
      
        socket.on('kill', broadcastKillFeed);

        socket.on('drawObject', drawObject);

        socket.on('playerMove', playerMove)
      
        // socket.on('newGameRequest',newGameRequest);
        // socket.on('newGame',newGame);
      
        // socket.on('disconnect',disconnect)
      
        function broadcastMessageToServer(server, message){
            console.log(message)
          socket.broadcast.to(server).emit("sendMessage",message);
        }
      
        function broadcastKillFeed(server, killer, killed){
          socket.broadcast.to(server).emit("killFeed",moveData);
        }

        function playerMove(server, xy){
            socket.broadcast.to(server).emit('playerMove', xy)
        }

        function drawObject(){}
      
        function joinServer(server){
          console.log("joined server" + server);
          socket.broadcast.to(server).emit("sendMessage","SERVER : a user just joined");
          if(server){
            socket.join(server);
            users.filter(user=>user.id == socket.id)[0].room = room;
          }
        }
      
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
