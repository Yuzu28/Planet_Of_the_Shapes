var socket;
let canvas = document.getElementById('Server_view');
console.log(canvas)
let ctx = canvas.getContext('2d');
canvas.width = 6000;
canvas.height = 6000;
var r =0;
var player = new playerSquare(150,150,100);
var theScreen = document.getElementById('player_view')

console.log('it loaded')
var init = function() {
    // var circle = new Circle;
    // var square = new Square;


    function draw(){
        theScreen.style.left = `${player.x+600}px`
        theScreen.style.top = `${player.y-200}px`
        console.log(theScreen.style.left)
        // console.log(player.x)
        theScreen.scrollIntoView();
        ctx.fillStyle = "green";

        // console.log(r)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        player.create()        
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