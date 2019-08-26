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



///PLAYER SQUARE
class playerSquare{
    constructor(x,y, size, playerName){
        this.player = playerName;
        this.size = size;
        this.health = 100;
        this.power = 100;
        this.speed = 20;
        this.angle= 0;
        this._x = x;
        this._y = y;
        this.x = x+this.size/2;
        this.y = y+this.size/2;
        this.create = ()=>{
            ctx.save();
            ctx.fillStyle= 'purple';
            ctx.translate(this.x+this.size/2,this.y+this.size/2);
            ctx.rotate(this.angle)
            ctx.translate(-(this.x+this.size/2),-(this.y+this.size/2));
            ctx.fillRect(this.x, this.y, this.size, this.size);
            ctx.restore();
        }
        this.status = ()=>{

        }
        
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x-50, this.y-50, this.width, this.height)
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        //ctx.stroke()
    }
};

///TRIANGLE
class Triangle{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius=50
        this.direction = 1;
    }
    draw(){
        if(this.y > maxHeight){
            this.direction = -1
        }else if(this.y < 0){
            this.direction = 1
        }

        // if(this.x > maxWidth){
        //     this.direction = -1
        // }else if(this.x < 0){
        //     this.direction = 1
        // }


        ctx.fillStyle ='blue'
        ctx.beginPath();
        ctx.moveTo(this.x,this.y-50);//x,y values to start at
        ctx.lineTo(this.x-50,this.y+50);//draws a line
        ctx.lineTo(this.x+50,this.y+50)
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        // ctx.stroke()

        
    }
    move(){
        this.y += 5 * this.direction
        this.x += 5 * this.direction 
    }
}


///PENTAGON
class Pentagon{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.radius = 50
        this.direction = 1;
        }
        draw(){
        ctx.beginPath();
        ctx.moveTo(this.x+50,this.y);//x,y values to start at
        ctx.lineTo(this.x-50,this.y);//draws a line
        ctx.moveTo(this.x,this.y-50)
        ctx.lineTo(this.x+50,this.y)
        ctx.lineTo(this.x+50,this.y+50)
        ctx.lineTo(this.x-50,this.y+50)
        ctx.lineTo(this.x-50,this.y)
        ctx.fillStyle="orange";//changed to fill
        ctx.fill() 
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        //ctx.stroke()
        }
        move(){
            if(this.x != maxWidth){
                this.x+=10
            }else{
                this.x=-200
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
function createSquare(player){
    x_pos = player.x
    y_pos = player.y
    r_pos = player.r

    var size = 100;
    var angle = r_pos;
    var x_center = x_pos + size/2
    var y_center = y_pos + size/2
    ctx.save();
    ctx.fillStyle= 'purple';
    ctx.translate(x_center,y_center);
    ctx.rotate(angle)
    ctx.translate(-(x_center),-(y_center));
    ctx.fillRect(x_pos, y_pos, size, size);
    ctx.restore();
}

///HEXAGON
class Hexagon{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius=50
        this.direction =1;
    }
        draw(){
            ctx.beginPath();
            ctx.moveTo(this.x-25,this.y-50);//x,y values to start at
            ctx.lineTo(this.x+25,this.y-50);//draws a line
            ctx.lineTo(this.x+75,this.y)
            ctx.lineTo(this.x+25,this.y+50);
            ctx.lineTo(this.x-25,this.y+50)
            ctx.lineTo(this.x-75,this.y)
            ctx.fillStyle="gold";
            ctx.fill()
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
            //ctx.stroke()
        }

        move(){
            this.x += 20 * this.direction //* this.level;
            if(this.x > maxWidth){
                this.direction = -1
            }else if(this.x < 0){
                this.direction = 1
        }
}}

class Hexship{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.radius = 50;
        this._x = this.x+50;
        this._y = this.y+50
        //this.distance = Math.sqrt(Math.pow(this.x+50 ,2) +  Math.pow(this.y+550 ,2));
    }
    draw(){
        ctx.beginPath();
        // ctx.rotate(this.angle)
        ctx.moveTo(this.x,this.y-50);
        ctx.lineTo(this.x + 50,this.y)
        ctx.lineTo(this.x,this.y+ 50)
        ctx.lineTo(this.x -50,this.y)
        ctx.fillStyle="#55694e"
        ctx.fill()
        ctx.stokeStyle= "pink"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)//50,550
        // ctx.stroke()
        

    }
}

    
    



// class Hexship{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//         this.angle = 0;
//     }
//     draw(){
//         ctx.beginPath();
//         // ctx.rotate(this.angle)
//         ctx.moveTo(this.x + 200,this.y+ 450);
//         ctx.lineTo(this.x + 250,this.y+500)
//         ctx.moveTo(this.x + 300, this.y+450);
//         ctx.lineTo(this.x + 350,this.y+500)
//         ctx.lineTo(this.x + 350,this.y+550)
//         ctx.lineTo(this.x + 300,this.y+ 525)
//         ctx.lineTo(this.x + 250,this.y+ 550)
//         ctx.lineTo(this.x + 250,this.y+500)
        


//         ctx.fillStyle="#55694e"
//         ctx.fill()
       
        

//     }
// }
    
