var players = {};
var bullets = {};
exports = module.exports = function(io){
    io.on('connection',function(socket){
        
        io.emit("greetings","Welcome to Planet of the Shapes");
        //io.to(socket.id).emit("getName");
        // socket.on('sendName',sendName)
      
        socket.on("joinServer",joinServer)
      
        socket.on('sendMessage',broadcastMessageToServer);
      
        socket.on('kill', broadcastKillFeed);

        socket.on('drawObject', drawObject);

        socket.on('PlayerList', trackPlayers)
        
        socket.on('BulletList',trackBullets)
        // socket.on('newGameRequest',newGameRequest);
        // socket.on('newGame',newGame);
      
        // socket.on('disconnect',disconnect)
      
        function broadcastMessageToServer(message){
            console.log(message)
          socket.broadcast.emit("sendMessage",message);
        }
      
        function broadcastKillFeed(server, killer, killed){
          socket.broadcast.to(server).emit("killFeed",moveData);
        }

        function trackBullets(bulletObj){
            if(bulletObj){
                Object.entries(bulletObj).forEach((bullet)=>{
                    bullets[bullet[0]] = bullet[1]
                })
            }
            socket.broadcast.emit('BulletList',bullets)
        }
        function trackPlayers(playerObj){
            console.log(`player received`)
            Object.entries(JSON.parse(playerObj)).forEach((player)=>{
                players[player[0]] = player[1]
            })
            socket.broadcast.emit('PlayerList', players)
        }

        function drawObject(){}
      
        function joinServer(server){
          console.log("joined server" + server);
          socket.broadcast.to(server).emit("sendMessage","SERVER : a user just joined");
          if(server){
            socket.join(server);
            users.filter(user=>user.id == socket.id)[0].server = server;
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
