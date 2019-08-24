// console.log('sup+++++++++++++++++++++')

// console.dir(canvas)
var circle = new Circle(50, 50);
var square = new Square(200, 50);
var triangle = new Triangle(100, 300);
var pentagon = new Pentagon(100, 100);
var hexagon = new Hexagon(0,400);
var maxWidth = canvas.width;
var maxHeight = canvas.height; 
var player =new playerSquare(100, 400, 100);
let diamond = new Hexship(50,500)

function draw(){ 
    ctx.clearRect(0,0, canvas.width, canvas.height);
    //player.create();
    circle.move();
    circle.draw()
    square.draw()
    square.move()
    triangle.draw()
    triangle.move()
    pentagon.draw()
    pentagon.move()
    hexagon.draw()
    hexagon.move()
    diamond.draw()
    // ctx.drawImage(image, 20, 20, 100, 100)//(image, x, y, width, height)
    // ctx.restore()
    if(getDistance(diamond.x, diamond.y,circle.x, circle.y) <= 100){
        console.log("YOU LOSE")
        diamond.draw = console.log('GAME OVER')
    }
    
    requestAnimationFrame(draw)
}
draw()




