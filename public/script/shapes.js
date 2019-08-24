console.log('sup+++++++++++++++++++++')



///PLAYER SQUARE
class playerSquare{
    constructor(x,y, size){
        this.size = size;
        this.angle= 0;
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
    }
}

///CIRCLE
class Circle{
    constructor(x, y, radius, startRadius, endRadius){
        this.x = x;
        this.y = y;
        this.radius = 50;
        this.startRadius = 0
        this.endRadius = Math.PI * 2;
        this.direction = 1;
        // this.hit = 0;
        // this.level = 1;50, 0, Math.PI * 2
    }
    move(){
        this.x += 5 * this.direction //* this.level;
        if(this.x > maxWidth){
            this.direction = -1
        }else if(this.x < 0){
            this.direction = 1

        }
    }
    draw(){
       
        
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startRadius, this.endRadius); // Outer circle
        ctx.fill();
    }
};

///SQUARE
class Square{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.direction = 1
    }//100, 100
   
    move(){
        this.y += 5 * this.direction
    }
    draw(){
        if(this.y > maxHeight){
            this.direction = -1
        }else if(this.y < 0){
            this.direction = 1
        }
        
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
};

///TRIANGLE
class Triangle{
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        ctx.moveTo(this.x+200,this.y+50);//x,y values to start at
        ctx.lineTo(this.x+150,this.y+150);//draws a line
        ctx.lineTo(this.x+250,this.y+150)
        ctx.fill()
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
        this.direction = 1;
        }
        draw(){
        ctx.beginPath();
        ctx.moveTo(this.x+200,this.y+50);//x,y values to start at
        ctx.lineTo(this.x+150,this.y+100);//draws a line
        ctx.moveTo(this.x+200,this.y+50)
        ctx.lineTo(this.x+250,this.y+100)
        ctx.lineTo(this.x+250,this.y+150)
        ctx.lineTo(this.x+150,this.y+150)
        ctx.lineTo(this.x+150,this.y+100)

        ctx.fillStyle="orange";//changed to fill
        ctx.fill()//fill() will only fill in a shape with one gap 
        }
        move(){
            if(this.x != maxWidth){
                this.x+=10
            }else{
                this.x=-200
            }
        }
}


///HEXAGON
class Hexagon{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.direction =1;
    }
        draw(){
            ctx.beginPath();
            ctx.moveTo(this.x+250,this.y+50);//x,y values to start at
            ctx.lineTo(this.x+300,this.y+50);//draws a line
            ctx.lineTo(this.x+350,this.y+100)
            ctx.lineTo(this.x+300,this.y+150);
            ctx.lineTo(this.x+250,this.y+150)
            ctx.lineTo(this.x+200,this.y+100)
            ctx.fillStyle="gold";//changed to fill
            ctx.fill()//fill() will only fill in a shape with one gap   
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
    }
    draw(){
        ctx.beginPath();
        // ctx.rotate(this.angle)
        ctx.moveTo(this.x + 50,this.y+ 500);
        ctx.lineTo(this.x + 100,this.y+550)
        ctx.lineTo(this.x + 50,this.y+ 600)
        ctx.lineTo(this.x + 0,this.y+550)
        ctx.fillStyle="#55694e"
        ctx.fill()
        ctx.stokeStyle= "pink"
        ctx.beginPath()
        ctx.arc(this.x+50, this.y+550, this.radius, 0, Math.PI * 2)//50,550
        ctx.stroke()
        

    }
}
Hexship.prototype.isHitBy = function(x, y){
    var distance = Math.sqrt(Math.pow(x - this.x+50 ,2) +  Math.pow(y + this.y+550 ,2))//pythorean theorem a^2 + b^2 = c^2
    return distance <= this.radius
}

var image = new Image()
//start image loading
image.src='http://pngriver.com/wp-content/uploads/2018/04/Download-Star-PNG-File.png'
// 
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

