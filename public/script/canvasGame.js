console.log('sup+++++++++++++++++++++')

console.dir(canvas)
var circle = new Circle;


function draw(){
    context.fillStyle = "green";
    circle.createCircle()
    //where we draw
    // context.drawImage(bgImage, 0,0);
    // context.drawImage(theHero, theHeroLoc.x, theHeroLoc.y);
    // bullet.x++
    requestAnimationFrame(draw)
}
draw()


