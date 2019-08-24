// addEventListener('click', (e)=>{
//     // console.log(Math.atan(3/2)* 180/Math.PI)
//     console.log(e)
//     player.angle = Math.atan((Math.abs(e.pageY-player.y)/(Math.abs(e.pageX-player.x))))

//     console.log(((e.pageY-player.y)/(e.pageX-player.x)*180/Math.PI))
// })

addEventListener('keypress', (e)=>{
    // console.log(e)
    if(e.keyCode===40||e.keyCode===115){
        console.log("Guy go backwards")
        player.x -=  10 * Math.cos(player.angle)
        player.y -=  10 * Math.sin(player.angle)
        
    }else if(e.keyCode===38||e.keyCode===119){
        console.log("Guy go fowards") 
        player.x +=  20 * Math.cos(player.angle)
        player.y +=  20 * Math.sin(player.angle)
    }if(e.keyCode===37||e.keyCode===97){
        player.angle -= Math.PI/4;
    }else if(e.keyCode===39||e.keyCode===100){
        player.angle += Math.PI/4;
    }
})



    
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

canvas.addEventListener('mousemove', function(e){

    var cvsBounds = canvas.getBoundingClientRect(); //x and y pos for where the cvs is on the page
    var clickX = e.pageX - cvsBounds.left;
    var clickY = e.pageY - cvsBounds.top;

    if (diamond.isHitBy(clickX,clickY)){
        console.log('diamond hit')
    }

})