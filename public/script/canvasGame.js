console.log('sup+++++++++++++++++++++')


const CircleClass = require('./shapes');

console.log(CircleClass)
var circle = new CircleClass;


function draw(){
    circle.createCircle
    //where we draw
    // context.drawImage(bgImage, 0,0);
    // context.drawImage(theHero, theHeroLoc.x, theHeroLoc.y);
    // bullet.x++
    requestAnimationFrame(draw)
}
draw()


