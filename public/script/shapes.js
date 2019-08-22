console.log('sup+++++++++++++++++++++')
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');

class Circle{
    constructor() {
        this.create = (x, y, angle) => {
            ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
            ctx.stroke();
        }
    }
}
class Square{
    constructor() {
        this.create = (x, y, angle) => {
            // ctx.fillRect(100, 100, 100, 100);
            ctx.strokeRect(100, 100, 100, 100);
        }
    }
}

class Triangle{
    constructor() {
        this.create = (x, y, angle) => {
            ctx.moveTo(canvas.width/2, canvas.height/2-50);
            ctx.lineTo(canvas.width/2-50, canvas.height/2+50);
            ctx.lineTo(canvas.width/2+50, canvas.height/2+50);
            ctx.fill()
        }
    }
}

class Pentagon{
    constructor() {
        this.create = (x, y, angle) => {
            // ctx.fillRect(100, 100, 100, 100);
            ctx.strokeRect(100, 100, 100, 100);
        }
    }
}


