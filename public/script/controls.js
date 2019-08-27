// addEventListener('mouseover', (e)=>{
//     // console.log(Math.atan(3/2)* 180/Math.PI)
//     console.log(e)
//     console.log(player.x, player.y)

//     player.angle = (Math.atan2(((e.layerX-50)-player.x), -((e.layerY-50)-player.y))+ 3*Math.PI/2)
//     console.log(player.angle *180/Math.PI)
// })
function fire(timesfired,playerName,player){
    var socket = SocketClient().socket

    var bullet = shapes().bulletSquare
    addEventListener('click', (e)=>{    
        var bullets = {}
        timesfired++
        bullets[`${playerName}?${timesfired}`]= {x:player.x+50,y:player.y+50,angle:player.angle,name:playerName,x_origin:player.x,y_origin:player.y,distance:0}//(new bullet(player.x, player.y, player.angle, playerName))    
        console.log(bullets);    
        socket.emit('BulletList', bullets)
    })
    return timesfired;
}
function controls(player){
addEventListener('keypress', (e)=>{
    console.log(e)

    if(e.keyCode===40||e.code==='KeyS'){
        console.log("Guy go backwards")
        player.x -=  player.speed * Math.cos(player.angle)
        player.y -=  player.speed * Math.sin(player.angle)
    }else if(e.keyCode===38||e.code==='KeyW'){
        console.log("Guy go fowards") 
        player.x +=  player.speed * Math.cos(player.angle)
        player.y +=  player.speed * Math.sin(player.angle)
    }if(e.keyCode===37||e.code==='KeyA'){
        player.x -=  player.speed/2 * Math.cos(player.angle+Math.PI/2)
        player.y -=  player.speed/2 * Math.sin(player.angle+Math.PI/2)
    }else if(e.keyCode===39||e.code==='KeyD'){
        player.x +=  player.speed/2 * Math.cos(player.angle+Math.PI/2)
        player.y +=  player.speed/2 * Math.sin(player.angle+Math.PI/2)
    }
    console.log(player.angle)

    
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
    //console.log(e.keyCode)
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
