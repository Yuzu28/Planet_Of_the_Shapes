var players = {};
var bullets = {};

setInterval(()=>{
    Object.entries(players).forEach((player)=>{
        if(player[1].idle >= 20){
            delete players[player[0]]
        }else{
            player[1].idle ++
        }
    })
},1000)

//move bullets
setInterval(()=>{
    Object.entries(bullets).forEach((bullet)=>{
        moveBullet(bullet)
        if(bullet[1].distance>=1000){
            delete bullets[bullet[0]]
        }
    })
},50)

function moveBullet(bullet){
    r_pos = bullet[1].angle;
    x_origin = bullet[1].x_origin
    y_origin = bullet[1].y_origin
    

    bullets[bullet[0]].x += 40 * Math.cos(r_pos)
    bullets[bullet[0]].y += 40 * Math.sin(r_pos)
    bullets[bullet[0]].distance = Math.sqrt((bullets[bullet[0]].x-x_origin)*(bullets[bullet[0]].x-x_origin)+(bullets[bullet[0]].y-y_origin)*(bullets[bullet[0]].y-y_origin))
}
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
        }
        function trackPlayers(playerObj){
            // console.log(players)
            Object.entries(JSON.parse(playerObj)).forEach((player)=>{
                players[player[0]] = player[1]
            })
            socket.broadcast.emit('BulletList',bullets)
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
