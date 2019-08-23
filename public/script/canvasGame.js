// console.log('sup+++++++++++++++++++++')

// console.dir(canvas)
var circle = new Circle(50, 50, 50, 0, Math.PI * 2);
var square = new Square();
var triangle = new Triangle();
var pentagon = new Pentagon();
var hexagon = new Hexagon();
var maxWidth = canvas.width;
var maxHeight = canvas.height; 

function draw(){ 
    ctx.clearRect(0,0, canvas.width, canvas.height);
    circle.move();
    circle.draw()
    square.create(200, 50, 100, 100)
    triangle.create(100, 300)
    pentagon.create(100, 100)
    hexagon.create(30,300)
    ctx.drawImage(image, 20, 20, 100, 100)//(image, x, y, width, height)
    // ctx.restore()
    


    requestAnimationFrame(draw)
}
draw()




