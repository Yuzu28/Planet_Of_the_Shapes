// addEventListener('mouseover', (e)=>{
//     // console.log(Math.atan(3/2)* 180/Math.PI)
//     console.log(e)
//     console.log(player.x, player.y)

//     player.angle = (Math.atan2(((e.layerX-50)-player.x), -((e.layerY-50)-player.y))+ 3*Math.PI/2)
//     console.log(player.angle *180/Math.PI)
// })
function fire(bullets,timesfired,playerName,player){
    var socket = SocketClient().socket

    var bullet = shapes().bulletSquare
    bullets = bullets || {}
    addEventListener('click', (e)=>{
        timesfired++
        bullets[playerName+timesfired]=(new bullet(player.playerName.x, player.playerName.y, player.playerName.angle, playerName))
    })
    socket.emit('BulletList', bullets)
    return bullets;
}
function controls(player){
addEventListener('keypress', (e)=>{
    console.log(e)

    if(e.keyCode===40||e.code==='KeyS'){
        console.log("Guy go backwards")
        player.playerName.x -=  player.playerName.speed * Math.cos(player.playerName.angle)
        player.playerName.y -=  player.playerName.speed * Math.sin(player.playerName.angle)
    }else if(e.keyCode===38||e.code==='KeyW'){
        console.log("Guy go fowards") 
        player.playerName.x +=  player.playerName.speed * Math.cos(player.playerName.angle)
        player.playerName.y +=  player.playerName.speed * Math.sin(player.playerName.angle)
    }if(e.keyCode===37||e.code==='KeyA'){
        player.playerName.x -=  player.playerName.speed/2 * Math.cos(player.playerName.angle+Math.PI/2)
        player.playerName.y -=  player.playerName.speed/2 * Math.sin(player.playerName.angle+Math.PI/2)
    }else if(e.keyCode===39||e.code==='KeyD'){
        player.playerName.x +=  player.playerName.speed/2 * Math.cos(player.playerName.angle+Math.PI/2)
        player.playerName.y +=  player.playerName.speed/2 * Math.sin(player.playerName.angle+Math.PI/2)
    }
    // console.log(player.angle)

    
    // }if(e.keyCode===37||e.keyCode===68){
    //     console.log("go right")
    //     theHeroLoc.x +=10
    // }else if(e.keyCode===39||e.keyCode===65){
    //     console.log("go Left")
    //     theHeroLoc.x -=10
    // }
///////////////////////////////////////////////
// var upRight;
// var upLeft;
// var downRight;
// var downLeft;
addEventListener('keydown', (e)=>{
    // console.log(e.keyCode)
    if(e.keyCode===38){//UP
        diamond.y -= 50
    }
    if(e.keyCode===40){//DOWN
        diamond.y += 50
    }
    if(e.keyCode===39){//Right
        diamond.x += 50
    }
    if(e.keyCode===37){//Left
        diamond.x -= 50
    }
    
     
})
////////////////////////////////////////////////

})
}
