console.log('sup+++++++++++++++++++++')
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
