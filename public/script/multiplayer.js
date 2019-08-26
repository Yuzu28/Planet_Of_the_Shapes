// import { Socket } from "dgram";

// var socket;
// let canvas = document.getElementById('Server_view');
// let overlay = document.body
// let ctx = canvas.getContext('2d');
// canvas.width = 6000;
// canvas.height = 6000;
// var r =0;

// var players = {};
// var bullets = {};
// var playerName= playerName || `Guest${Math.random()*10}${Math.random()*10}${Math.random()*10}`;
// var player = new playerSquare(150,150,100,playerName);
// players.playerName=player


// var theScreen = document.getElementById('player_view')
// window.onload = mousefunc;
// const miniPlayer = document.querySelector('#player_mini_pos')

let canvas = document.getElementById('Server_view');
let overlay = document.body
let ctx = canvas.getContext('2d');

console.log('it loaded')
var init = function() {
    // var circle = new Circle;
    // var square = new Square;
    shapes()
    var playerShape = shapes().playerSquare 
    var socket;
    var server= 1;
    canvas.width = 6000;
    canvas.height = 6000;
    var r =0;
    
    var players = {};
    var bullets = {};
    var playerName= playerName || `Guest${Math.random()*10}${Math.random()*10}${Math.random()*10}`;
    var player = {playerName:new playerShape(150,150,100,playerName)};
    
    
    var timesfired=0;
    
    var theScreen = document.getElementById('player_view')
    window.onload = mousefunc;
    const miniPlayer = document.querySelector('#player_mini_pos')
    
    const minimap =  document.querySelector('#mini_map');
    
    
    minimap.style.width = `${canvas.width/25}px`;
    minimap.style.height =  `${canvas.height/25}px`;
    
    socket = SocketClient();
    function mousefunc() {
        if(window.Event) {
            document.captureEvents(Event.MOUSEMOVE)
        }
        document.onmousemove = mouse
    }
    var mouse = (e)=> {
        var x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        player.playerName.angle = (Math.atan2(((e.clientX-100)-player.playerName.x+ document.documentElement.scrollLeft), -((e.clientY-100+document.documentElement.scrollTop)-player.playerName.y))+ 3*Math.PI/2)
        // console.log((e.clientX))
        // console.log(player.x)
        // console.log((player.angle *180/Math.PI)-360)
    }
    controls(player.playerName);
    bullets = bullets ? fire(bullets,timesfired,playerName,player.playerName) : {};
    socket.socket.on("PlayerList",(playerList)=>{
        players = playerList;
        delete playerList[player.playerName]
    })
    socket.socket.on("BulletList",(BulletList)=>{
        bullets = BulletList
    })
    function draw(){
        // console.log(Math.atan(3/2)* 180/Math.PI)
        window.scrollTo(player.playerName.x- $(window).width()/2+100,player.playerName.y- $(window).height()/2+100)
        // console.log(theScreen.style.left)
        // console.log(player.x)

        miniPlayer.style.left = `${player.playerName.x/25}px`;
        miniPlayer.style.top =  `${player.playerName.y/25}px`;

        ctx.fillStyle = "green";

        socket.sendPlayer(player.playerName)
        // console.log(r)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        player.playerName.create();
        player.playerName.status();

        Object.values(players).forEach((player)=>{
                player.create();
                player.status();
        })
        
        
        Object.entries(bullets).forEach((bullet)=>{
                bullet[1].create();
                if(bullet[1].status()) {
                   delete bullets[bullet[0]]
                }
        })
        
        //where we draw
        // context.drawImage(bgImage, 0,0);
        // context.drawImage(theHero, theHeroLoc.x, theHeroLoc.y);
        // bullet.x++
        requestAnimationFrame(draw)
    }
    draw()
    socket = SocketClient();
    socket

}
$(document).ready(init);