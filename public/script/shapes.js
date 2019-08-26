console.log('sup+++++++++++++++++++++')
///Projectiles
class Bullet{
    constructor(x,y, radius){ 
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.startRadius = 0;
    this.endRadius = Math.PI * 2;
    this.direction = 1;
    this.color = 'crimson'
    
}
 draw(){
    
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.startRadius, this.endRadius); // Outer circle
    ctx.fill();
}
move(){
    this.x += 5 * this.direction //* this.level;
    if(this.x > maxWidth){
        this.direction = -1
    }else if(this.x < 0){
        this.direction = 1

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
        this.radius =50;
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
        this.shootX=0
        this.shootY=0
        
        //this.distance = Math.sqrt(Math.pow(this.x+50 ,2) +  Math.pow(this.y+550 ,2));
    }
    draw(){
        let bullet = new Bullet(this.x,this.y)
        ctx.beginPath();
        // ctx.rotate(this.angle)
        ctx.moveTo(this.x,this.y-50);
        ctx.lineTo(this.x + 50,this.y)
        ctx.lineTo(this.x,this.y+ 50)
        ctx.lineTo(this.x -50,this.y)
        ctx.fillStyle="#55694e"
        ctx.fill()
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)//50,550
        // ctx.stroke()
        //bullet.draw()
     
    }  
    reload(){
    ctx.fillStyle = 'crimson';
    ctx.beginPath();
    ctx.arc(this.x+this.shootX, this.y+this.shootY, this.radius-40, 0, Math.PI * 2); 
    ctx.fill();
 
    

    }
} 


    
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

