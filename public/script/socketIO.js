function SocketClient(){
  console.log('it ran')
  var socket = io.connect();   
  var engineGame;
  var headline = $('#headline');
  var messages = $('#messages');
  var chatBox = $("#chatBox");
  var chat = $('#chat');
  var roomIdForm = $('#serverIdForm');
  var roomIdInput = $('#serverIdInput');
  // var newGameButton = $("#newGameButton");
  var showServerNum = $('#showServerNum');
  var nameForm = $('#nameForm');
  var nameInput = $('#nameInput');
  var name =$("#name");
  var joinGame = $('#joinGame');
  // var hostName=$('#hostName');

  var game; // attach the game battleZone and engine

  var server = 1 ; // testing

  var battleZone; // server keeps tracks where people are

  
  //Enter room with Id
  nameForm.submit(function(){
       socket.emit("sendName",nameInput.val());
       name.text(nameInput.val());
       nameInput.val('');
       nameForm.hide();
       return false;
  })



  //Send message to server
  chatBox.submit(function(){
      //send this to the server
      //socket.emit("sendMessage",room,chat.val());
      socket.emit("sendMessage",server,chat.val());
      var li = $('<li/>').append($('<p/>',{
          text:chat.val(),
          class:"message recipient-message"
      }))
      messages.append(li);
      chat.val('');
      console.log('message sent')
      return false;
  })

 

  socket.on("newGame",function(){
      battleZone.reset();
  })

  socket.on('serverId',function(serverId){
      server = serverId;
      //showRoomId.text('Room ID : ' + room);
  })


  socket.on("joinServer",function(server){
      window.alert("Joined server " + server);
      
      socket.emit("joinServer",server);
      battleZone.setTeam('black');
      battleZone.competingHuman();
      battleZone.reset();
  });
  socket.on("nameError",function(message){
      window.alert(message);
      name.text("Unknown");
      nameForm.show();
  })

  socket.on('greetings',function(msg){
      console.log(msg);
  });

  socket.on('move',function(moveData){
      var from,to,promo;
      from = moveData.from;
      to = moveData.to;
      promo = moveData.promo;
      battleZone.makeMove(from, to,promo);
      battleZone.setFenPosition();
  })

  //recieve message from other player
  socket.on('sendMessage',function(message){
    console.log(`messageReceived`)
      var li = $('<li/>').append($('<p/>',{
          text:message,
          class:"message sender-message"
      }))
      messages.append(li);
  })



  return {
      setbattleZone:function(newbattleZone){
          battleZone= newbattleZone;
      },
      sendPlayers:function(player){
          socket.emit("move",player);
      },
      sendBullets:function(bulletObj){
          socket.emit("BulletList", bulletObj)
      },
      socket
  }
}
// make it so that when a player move it sends to server instantly