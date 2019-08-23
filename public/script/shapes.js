console.log('sup+++++++++++++++++++++')
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');

class Circle{
    constructor() {
        this.create = (x, y, radius, startRadius, endRadius) => {
            ctx.fillStyle = 'green';
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

