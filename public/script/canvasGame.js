console.log('sup+++++++++++++++++++++')

console.dir(canvas)
var circle = new Circle;
var square = new Square;
var triangle = new Triangle;
var pentagon = new Pentagon;
var hexagon = new Hexagon;

function draw(){
    
    circle.create(50, 50, 50, 0, Math.PI * 2)
    square.create(200, 50, 100, 100)
    triangle.create(100, 300)
    pentagon.create(100, 100)
    hexagon.create(300,300)
    
    requestAnimationFrame(draw)
}
draw()


