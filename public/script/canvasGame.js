console.log('sup+++++++++++++++++++++')

console.dir(canvas)
var circle = new Circle;
var square = new Square;
var triangle = new Triangle;
var hexagon = new Hexagon;

function draw(){
    ctx.fillStyle = "green";
    circle.create()
    square.create()
    triangle.create()
    hexagon.create()
    //where we draw
    // context.drawImage(bgImage, 0,0);
    // context.drawImage(theHero, theHeroLoc.x, theHeroLoc.y);
    // bullet.x++
    requestAnimationFrame(draw)
}
draw()


