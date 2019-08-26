// console.log('sup+++++++++++++++++++++')

// console.dir(canvas)
var circle = new Circle(50, 350);
var square = new Square(200, 50);
var triangle = new Triangle(300, 100);
var pentagon = new Pentagon(250, 250);
var hexagon = new Hexagon(250,50);
var maxWidth = canvas.width;
var maxHeight = canvas.height; 
var player =new playerSquare(100, 400, 100);
let diamond = new Hexship(50,500)

function draw(){ 
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    circle.draw()
    square.draw()
    triangle.draw()
    pentagon.draw()
    hexagon.draw()
    diamond.draw()

    pentagon.move()
    hexagon.move()
    triangle.move()
    square.move()
    circle.move()

    // player.create()
    ///////////////////////////////////////////////////////////////////
    ////////COLLISION DETECTION/////////////////////////////////////
        // console.log(getDistance(diamond.x, diamond.y,hexagon.x, hexagon.y))
    ///CIRCLE V. DIAMOND(PLAYEr)
    if(getDistance(diamond.x, diamond.y,circle.x, circle.y) <= 99){
        console.log("YOU LOSE")
        diamond.draw = console.log('GAME OVER')
    }
    //TRIANGLE
    if(getDistance(diamond.x, diamond.y,triangle.x, triangle.y) <= 99){
        console.log("YOU LOSE")
        diamond.draw = console.log('GAME OVER')
    }
    //SQUARE
    if(getDistance(diamond.x, diamond.y,square.x, square.y) <= 99){
        console.log("YOU LOSE")
        diamond.draw = console.log('GAME OVER')
    }
    //PENTAGON
    if(getDistance(diamond.x, diamond.y,pentagon.x, pentagon.y) <= 99){
        console.log("YOU LOSE")
        diamond.draw = console.log('GAME OVER')
    }
     //PENTAGON
    if(getDistance(diamond.x, diamond.y,hexagon.x, hexagon.y) <= 99){
        console.log("YOU LOSE")
        diamond.draw = console.log('GAME OVER')
    }
    ////////////////////////////////////////
    requestAnimationFrame(draw)//////////
    ///////////////////////////
}
draw()




