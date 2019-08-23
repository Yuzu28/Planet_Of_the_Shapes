console.log('sup+++++++++++++++++++++')
class Circle{
    constructor() {
        this.create = (x, y, angle, size) => {
            ctx.rotate(angle * Math.PI /180)
            ctx.beginPath();
            ctx.arc(x, y, radius, startRadius, endRadius); // Outer circle
            ctx.fill();
        }
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

class playerSquare{
    constructor(x,y, size){
        this.size = size;
        this.angle= 0;
        this.x = x+this.size/2;
        this.y = y+this.size/2;
        this.create = ()=>{
            ctx.save();
            ctx.translate(this.x+this.size/2,this.y+this.size/2);
            ctx.rotate(this.angle)
            ctx.translate(-(this.x+this.size/2),-(this.y+this.size/2));
            ctx.strokeRect(this.x, this.y, this.size, this.size);
            ctx.restore();
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

