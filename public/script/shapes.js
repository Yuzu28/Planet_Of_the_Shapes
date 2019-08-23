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

class Square{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = 1
    }
   
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

var image = new Image()
//start image loading
image.src='http://pngriver.com/wp-content/uploads/2018/04/Download-Star-PNG-File.png'
// 