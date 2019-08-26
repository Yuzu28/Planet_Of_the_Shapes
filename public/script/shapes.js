console.log('sup+++++++++++++++++++++')

function shapes(){

class Circle{
    constructor() {
        this.create = (x, y, angle, size) => {
            ctx.rotate(angle * Math.PI /180)
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            ctx.stroke();
        }
    }
}
class Square{
    constructor() {
        this.create = (x, y, angle, size) => {
            // ctx.fillRect(100, 100, 100, 100);
            ctx.rotate(angle * Math.PI /180)
            ctx.strokeRect(x, y, size, size);
            

        }
    }
}

class playerSquare{
    constructor(x,y, size, playerName){
        this.player = playerName;
        this.size = size;
        this.health = 100;
        this.power = 100;
        this.speed = 20;
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
        this.status = ()=>{

        }
        
    }
}
class bulletSquare{
    constructor(x,y,dir,playerName) {
        this.player = playerName;
        this.size = 10
        this.x = x+50+this.size/2;
        this.y = y+50+this.size/2;
        this.dir = dir;
        this.start= [this.x, this.y];
        this.angle = 0;
        this.distance = 1000;
        this.create = ()=>{
            ctx.save();
            ctx.translate(this.x+this.size/2,this.y+this.size/2);
            ctx.rotate(this.angle)
            ctx.translate(-(this.x+this.size/2),-(this.y+this.size/2));
            ctx.strokeRect(this.x, this.y, this.size, this.size);
            ctx.restore();
            this.x += 40 * Math.cos(this.dir)
            this.y += 40 * Math.sin(this.dir)
            this.angle += .5
        }
        this.status = ()=>{
            if(Math.sqrt((this.x-this.start[0])*(this.x-this.start[0])+(this.y-this.start[1])*(this.y-this.start[1])<= this.distance)){
                return true;
            }
            return false
        }
    }
}return{
    Circle,
    Square,
    playerSquare,
    bulletSquare,
    ctx
}
}