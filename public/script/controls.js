// addEventListener('click', (e)=>{
//     // console.log(Math.atan(3/2)* 180/Math.PI)
//     console.log(e)
//     player.angle = Math.atan((Math.abs(e.pageY-player.y)/(Math.abs(e.pageX-player.x))))

//     console.log(((e.pageY-player.y)/(e.pageX-player.x)*180/Math.PI))
// })

addEventListener('keypress', (e)=>{
    console.log(e)
    if(e.keyCode===40||e.keyCode===115){
        console.log("Guy go backwards")
        player.x -=  10 * Math.cos(player.angle)
        player.y -=  10 * Math.sin(player.angle)
        
    }else if(e.keyCode===38||e.keyCode===119){
        console.log("Guy go fowards") 
        player.x +=  10 * Math.cos(player.angle)
        player.y +=  10 * Math.sin(player.angle)
    }if(e.keyCode===37||e.keyCode===97){
        player.angle -= 0.1;
    }else if(e.keyCode===39||e.keyCode===100){
        player.angle += 0.1;
    }

    
    // }if(e.keyCode===37||e.keyCode===68){
    //     console.log("go right")
    //     theHeroLoc.x +=10
    // }else if(e.keyCode===39||e.keyCode===65){
    //     console.log("go Left")
    //     theHeroLoc.x -=10
    // }

})