console.log('sup+++++++++++++++++++++')
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;




class Circle{
    constructor(x, y, radius, startRadius, endRadius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startRadius = startRadius
        this.endRadius = endRadius;
        this.direction = 1;
        // this.hit = 0;
        // this.level = 1;
    }
    move(){
        this.x += 5 * this.direction * this.level;
    }
    draw(){
        if(this.x > maxWidth){
            this.direction = -1
        }else if(this.x < 0){
            this.direction = 1
        }
        
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startRadius, this.endRadius); // Outer circle
        ctx.fill();
    }
}
class Square{
    constructor() {
        this.create = (x, y, width, height) => {
            ctx.fillStyle = 'red';
            ctx.fillRect(x, y, width, height)
            
        }
    }
}

class Triangle{
    constructor() {
        this.create = (x, y) => {

            ctx.fillStyle ='blue'
            ctx.beginPath();
            ctx.moveTo(x+200,y+50);//x,y values to start at
            ctx.lineTo(x+150,y+150);//draws a line
            ctx.lineTo(x+250,y+150)
            ctx.fill()
        }
    }
}

class Pentagon{
    constructor() {
        this.create = (x,y) => {
        ctx.beginPath();
        ctx.moveTo(x+200,y+50);//x,y values to start at
        ctx.lineTo(x+150,y+100);//draws a line
        ctx.moveTo(x+200,y+50)
        ctx.lineTo(x+250,y+100);
        ctx.lineTo(x+250,y+150)
        ctx.lineTo(x+150,y+150)
        ctx.lineTo(x+150,y+100)

ctx.fillStyle="orange";//changed to fill
ctx.fill()//fill() will only fill in a shape with one gap 
            
        }
    }
}

class Hexagon{
    constructor() {
        this.create = (x, y) => {
            ctx.beginPath();
            ctx.moveTo(x+250,y+50);//x,y values to start at
            ctx.lineTo(x+300,y+50);//draws a line
            ctx.lineTo(x+350,y+100)
            ctx.lineTo(x+300,y+150);
            ctx.lineTo(x+250,y+150)
            ctx.lineTo(x+200,y+100)
            ctx.fillStyle="gold";//changed to fill
            ctx.fill()//fill() will only fill in a shape with one gap   
        }
        
    }
}


var image = new Image()
//start image loading
image.src='http://pngriver.com/wp-content/uploads/2018/04/Download-Star-PNG-File.png'
// 