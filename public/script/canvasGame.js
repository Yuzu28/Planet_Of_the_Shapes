console.log('sup+++++++++++++++++++++')

console.dir(canvas)
var circle = new Circle;
var square = new Square;

function draw(){
    ctx.fillStyle = "green";
    circle.create()
    square.create()
    //where we draw
    // context.drawImage(bgImage, 0,0);
    // context.drawImage(theHero, theHeroLoc.x, theHeroLoc.y);
    // bullet.x++
    requestAnimationFrame(draw)
}
draw()


