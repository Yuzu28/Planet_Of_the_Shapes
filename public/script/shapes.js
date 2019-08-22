console.log('sup+++++++++++++++++++++')
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext('2d');

class Circle{
    constructor() {
        this.createCircle = () => {
            context.save();
            context.translate(0 >> 0, 0 >> 0);
            context.rotate(0)
            context.strokeStyle = 'blue';
            context.lineWidth = (Math.random() > 0.9) ? 7 : 8;
            context.beginPath();
            context.arc(0, 0, 50, 0, 2 * Math.PI); //Makes the circle
            context.moveTo(10, 0);
            context.lineTo(-10, -10);
            context.lineTo(-10, 10);
            context.lineTo(10, 5);
            context.stroke();
            context.closePath(); //makes the triangle shooter
            context.restore();
        }
    }
}
