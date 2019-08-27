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
let startMenu = document.getElementById('start_up_menu');
function checkPlayer(player){
    if(player){
        if(startMenu.classList.contains('hidden')){}else{startMenu.classList.add('hidden')}
    }else{
        if(startMenu.classList.contains('hidden')){startMenu.classList.remove('hidden')}
    }
}


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
    var player = new playerShape(150,150,100,playerName);
    
    // startMenu.submit()

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
        player.angle = (Math.atan2(((e.clientX-100)-player.x+ document.documentElement.scrollLeft), -((e.clientY-100+document.documentElement.scrollTop)-player.y))+ 3*Math.PI/2)
        // console.log((e.clientX))
        // console.log(player.x)
        // console.log((player.angle *180/Math.PI)-360)
    }
    controls(player);
    
    timesfired += fire(timesfired,playerName,player) || 0;

    socket.socket.on("PlayerList",(playerList)=>{
        delete playerList[playerName]
        players = playerList;
    })
    socket.socket.on("BulletList",(BulletList)=>{
        bullets = BulletList
    })
    function draw(){
        // console.log(Math.atan(3/2)* 180/Math.PI)
        window.scrollTo(player.x- $(window).width()/2+100,player.y- $(window).height()/2+100)
        // console.log(theScreen.style.left)
        // console.log(player.x)

        miniPlayer.style.left = `${player.x/25}px`;
        miniPlayer.style.top =  `${player.y/25}px`;

        ctx.fillStyle = "green";
        var playerObj= {}
        playerObj[playerName] = {x:player.getX(),y:player.getY(),r:player.angle,idle:0,color:player.color}
        socket.sendPlayer(JSON.stringify(playerObj))
        // console.log(r)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        player.create();
        player.status();
        if(jQuery.isEmptyObject(players)===false){
            // console.log(players)
            Object.values(players).forEach((player)=>{
                    createSquare(player);
            })  
        }
        
        if(jQuery.isEmptyObject(bullets)===false){
            Object.values(bullets).forEach((bullet)=>{
                    drawBullet(bullet);
                    // if(bullet[1].status()) {
                    // // delete bullets[bullet[0]]
                    // }
            })
        }
        
        //where we draw
        // context.drawImage(bgImage, 0,0);
        // context.drawImage(theHero, theHeroLoc.x, theHeroLoc.y);
        // bullet.x++
        checkPlayer(player)
        requestAnimationFrame(draw)
    }
    draw()
    socket = SocketClient();
    socket

}
$(document).ready(init);