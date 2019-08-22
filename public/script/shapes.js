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
