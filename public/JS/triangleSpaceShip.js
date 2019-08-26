//------------------------------//
//----------- Red Trinagle SpaceCraft and also implementing the bullets :D  -----------//
//------------------------------//


//setting up the loop
setInterval(update, 1000 / FPS);


///make the red flying triangle
function drawShip(x, y, a, colour = "white") {
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = 4;
    // shipSize / 20
    ctx.beginPath();
    ctx.moveTo( // nose of the ship
        x + 4 / 3 * ship.r * Math.cos(a),
        y - 4 / 3 * ship.r * Math.sin(a)
    );
    ctx.lineTo( // rear left
        x - ship.r * (2 / 3 * Math.cos(a) + Math.sin(a)),
        y + ship.r * (2 / 3 * Math.sin(a) - Math.cos(a))
    );
    ctx.lineTo( // rear right
        x - ship.r * (2 / 3 * Math.cos(a) - Math.sin(a)),
        y + ship.r * (2 / 3 * Math.sin(a) + Math.cos(a))
    );
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "cyan";
    

}

function explodeShip() {
    ship.explodeTime = Math.ceil(selfDestruck  * FPS);
    crashexplo.play(); //sound when the ship self destruckt
}


//generate a new awesome ship once the previous one die 
  function newShip() {
        return {
            x: canv.width / 2,
            y: canv.height / 2,
            a: 90 / 180 * Math.PI, // convert to radians
            r: shipSize / 2,
            blinkNum: Math.ceil(invisibility / ShipBlinkDur),
            blinkTime: Math.ceil(ShipBlinkDur * FPS),
            canShoot: true,
            dead: false,
            explodeTime: 0,
            lasers: [],
            rot: 0,
            thrusting: false,
            thrust: {
                x: 0,
                y: 0
            }
        }
    }



//bullet fire power
    function shootingAwsomeBullets() {
        // create the bullet 
        if (ship.canShoot && ship.lasers.length < bulletMax ) {
            ship.lasers.push({ // from the nose of the ship
                x: ship.x + 4 / 3 * ship.r * Math.cos(ship.a),
                y: ship.y - 4 / 3 * ship.r * Math.sin(ship.a),
                xv: bulletSpeed * Math.cos(ship.a) / FPS,
                yv: -bulletSpeed * Math.sin(ship.a) / FPS,
                dist: 0,
                explodeTime: 0
            });
            bulletSound.play()
        }

        // prevent further shooting lol
        ship.canShoot = false;
    }






    function update() {


        var blinkOn = ship.blinkNum % 2 == 0;
        var exploding = ship.explodeTime > 0;



        // draw space
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canv.width, canv.height);

        // draw shape
        ctx.beginPath();

        var a, r, x, y, offs, vert;
        for (var i = 0; i < container.length; i++) {
            ctx.lineWidth = 8;

            ctx.strokeStyle = "#ffff00";
            // ctx.lineWidth = shipsize / 20;

            // get shape properties
            a = container[i].a;
            r = container[i].r;
            x = container[i].x;
            y = container[i].y;
            offs = container[i].offs;
            vert = container[i].vert;
            
            // draw the path
            ctx.beginPath();
            ctx.moveTo(
                x + r * offs[0] * Math.cos(a),
                y + r * offs[0] * Math.sin(a)
            );

            // draw the shpaes
            for (var j = 1; j < vert; j++) {
                ctx.lineTo(
                    x + r * offs[j] * Math.cos(a + j * Math.PI * 2 / vert),
                    y + r * offs[j] * Math.sin(a + j * Math.PI * 2 / vert)
                );
            }
            ctx.closePath();
            ctx.stroke();

            // collision
            if (bounding) {
                ctx.strokeStyle = "lime";
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2, false);
                ctx.stroke();
            }
            
            ctx.fillStyle = randomColor;
            ctx.fill();
        }
        
        // ships engine
        if (ship.thrusting && !ship.dead) {
            ship.thrust.x += shipAccel * Math.cos(ship.a) / FPS;
            ship.thrust.y -= shipAccel * Math.sin(ship.a) / FPS;
            engine.play(); //start the sound of the engine

            // ship engine
            if (!exploding && blinkOn) {
                ctx.fillStyle = randomColor2;
                ctx.strokeStyle = randomColor3;
                ctx.lineWidth = shipSize / 10;
                ctx.beginPath();
                ctx.moveTo( // rear left
                    ship.x - ship.r * (2 / 3 * Math.cos(ship.a) + 0.5 * Math.sin(ship.a)),
                    ship.y + ship.r * (2 / 3 * Math.sin(ship.a) - 0.5 * Math.cos(ship.a))
                );
                ctx.lineTo( // rear centre (behind the ship)
                    ship.x - ship.r * 5 / 3 * Math.cos(ship.a),
                    ship.y + ship.r * 5 / 3 * Math.sin(ship.a)
                );
                ctx.lineTo( // rear right
                    ship.x - ship.r * (2 / 3 * Math.cos(ship.a) - 0.5 * Math.sin(ship.a)),
                    ship.y + ship.r * (2 / 3 * Math.sin(ship.a) + 0.5 * Math.cos(ship.a))
                );
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
        } else {
            ship.thrust.x -= FRICTION * ship.thrust.x / FPS;
            ship.thrust.y -= FRICTION * ship.thrust.y / FPS;
            engine.stop();
        }
        
        if (!exploding) {
            if (blinkOn && !ship.dead) {
                drawShip(ship.x, ship.y, ship.a);
            }

            // handle blinking
            if (ship.blinkNum > 0) {

                // reduce the blink time
                ship.blinkTime--;

                // reduce the blink num
                if (ship.blinkTime == 0) {
                    ship.blinkTime = Math.ceil(ShipBlinkDur * FPS);
                    ship.blinkNum--;
                }
            }
        } else {
            // draw boom boom color
            ctx.fillStyle = "darkred";
            ctx.beginPath();
            ctx.arc(ship.x, ship.y, ship.r * 1.7, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(ship.x, ship.y, ship.r * 1.4, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.fillStyle = "orange";
            ctx.beginPath();
            ctx.arc(ship.x, ship.y, ship.r * 1.1, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.fillStyle = "yellow";
            ctx.beginPath();
            ctx.arc(ship.x, ship.y, ship.r * 0.8, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(ship.x, ship.y, ship.r * 0.5, 0, Math.PI * 2, false);
            ctx.fill();
        }

        // show  collision 
        if (bounding) {
            ctx.strokeStyle = "lime";
            ctx.beginPath();
            ctx.arc(ship.x, ship.y, ship.r, 0, Math.PI * 2, false);
            ctx.stroke();
        }
        
      
        // draw bullet
        for (var i = 0; i < ship.lasers.length; i++) {
            if (ship.lasers[i].explodeTime == 0) {
                ctx.fillStyle = "greenyellow";
                ctx.beginPath();
                ctx.arc(ship.lasers[i].x, ship.lasers[i].y, shipSize/ 15, 0, Math.PI * 2, false);
                ctx.fill();
            } else {
                // draw  the boom boom once shape is killed
                ctx.fillStyle = "greenyellow";
                ctx.beginPath();
                ctx.arc(ship.lasers[i].x, ship.lasers[i].y, ship.r * 0.75, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(ship.lasers[i].x, ship.lasers[i].y, ship.r * 0.5, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.fillStyle = "yellow";
                ctx.beginPath();
                ctx.arc(ship.lasers[i].x, ship.lasers[i].y, ship.r * 0.25, 0, Math.PI * 2, false);
                ctx.fill();
            }
        }
        // ctx.fillText("Score: " + score, canv.width - shipSize / 2, shipSize);
        
        // draw the game text
        if (textAlpha >= 0) {
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "white";
            ctx.font = textsize+ "px 'Anton', sans-serif";
            ctx.fillText(text, canv.width / 2, canv.height * 0.1);

            // ctx.fillText(text, canv.width / 2, canv.height * 0.75);
            // ctx.fillText(text, canv.width - shipSize / 2, shipSize);
            // textAlpha -= (1.0 / textFading / FPS);
        } else if (ship.dead) {
            // after "game over" fades, start a new game
            newGame();
            //add event listener to here click to start a new game
        }

        // draw the lives
        
        for (var i = 0; i < lives; i++) {
            lifeColour = exploding && i == lives - 1 ? "red" : "yellow"; //start to disappear once you are killed
            drawShip(shipSize + i * shipSize * 1.2, shipSize, 0.5 * Math.PI, lifeColour);
            
        }

        // draw the score
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "red";
        ctx.font = 40 + "px dejavu sans mono";
        // ctx.fillText("Score: " + score, canv.width / 2, shipSize)
        ctx.fillText("Score: " + score, canv.width - shipSize / 2, shipSize);

        // draw the high score
        // ctx.textAlign = "center";
        // ctx.textBaseline = "middle";
        // ctx.fillStyle = "white";
        // ctx.font = (textsize * 0.75) + "px dejavu sans mono";
        // ctx.fillText("BEST " + scoreHigh, canv.width / 2, shipSize);


        var ax, ay, ar, lx, ly;
        for (var i = container.length - 1; i >= 0; i--) {

         
            ax = container[i].x;
            ay = container[i].y;
            ar = container[i].r;

          
            for (var j = ship.lasers.length - 1; j >= 0; j--) {

                
                lx = ship.lasers[j].x;
                ly = ship.lasers[j].y;

                // detect hits
                if (ship.lasers[j].explodeTime == 0 && distBetweenPoints(ax, ay, lx, ly) < ar) {

                    // shape is gone once hit and activate booooooom
                    killingShapes(i);
                    ship.lasers[j].explodeTime = Math.ceil(bulletDur * FPS);
                    break;
                }
            }
        }

        // ship colide
        if (!exploding) {

            // if it is not blinking
            if (ship.blinkNum == 0 && !ship.dead) {
                for (var i = 0; i < container.length; i++) {
                    if (distBetweenPoints(ship.x, ship.y, container[i].x, container[i].y) < ship.r + container[i].r) {
                        explodeShip();
                        killingShapes(i);
                        break;
                    }
                }
            }

            // rotating
            ship.a += ship.rot;

            // ship moveing in the canvas
            ship.x += ship.thrust.x;
            ship.y += ship.thrust.y;
        } else {
            
            ship.explodeTime--;

            // ship get right backup after it dies
            if (ship.explodeTime == 0) {
                lives--;
                if (lives == 0) {
                    gameOver();

                } else {
                    ship = newShip();
                }
            }
        }

       
        if (ship.x < 0 - ship.r) {
            ship.x = canv.width + ship.r;
        } else if (ship.x > canv.width + ship.r) {
            ship.x = 0 - ship.r;
        }
        if (ship.y < 0 - ship.r) {
            ship.y = canv.height + ship.r;
        } else if (ship.y > canv.height + ship.r) {
            ship.y = 0 - ship.r;
        }

                            
    // move the shooting thingy
        for (var i = ship.lasers.length - 1; i >= 0; i--) {
            
            
            if (ship.lasers[i].dist > shootDistance * canv.width) {
                ship.lasers.splice(i, 1);
                continue;
            }

            //  explosion
            if (ship.lasers[i].explodeTime > 0) {
                ship.lasers[i].explodeTime--;

                // destroy  after the duration is up
                if (ship.lasers[i].explodeTime == 0) {
                    ship.lasers.splice(i, 1);
                    continue;
                }
            } else {
                // move the shooting thingy
                ship.lasers[i].x += ship.lasers[i].xv;
                ship.lasers[i].y += ship.lasers[i].yv;

               
                ship.lasers[i].dist += Math.sqrt(Math.pow(ship.lasers[i].xv, 2) + Math.pow(ship.lasers[i].yv, 2));
            }

           
            if (ship.lasers[i].x < 0) {
                ship.lasers[i].x = canv.width;
            } else if (ship.lasers[i].x > canv.width) {
                ship.lasers[i].x = 0;
            }
            if (ship.lasers[i].y < 0) {
                ship.lasers[i].y = canv.height;
            } else if (ship.lasers[i].y > canv.height) {
                ship.lasers[i].y = 0;
            }
        }

        // shape moving in the canvas
        for (var i = 0; i < container.length; i++) {
            container[i].x += container[i].xv;
            container[i].y += container[i].yv;

            
            if (container[i].x < 0 - container[i].r) {
                container[i].x = canv.width + container[i].r;
            } else if (container[i].x > canv.width + container[i].r) {
                container[i].x = 0 - container[i].r
            }
            if (container[i].y < 0 - container[i].r) {
                container[i].y = canv.height + container[i].r;
            } else if (container[i].y > canv.height + container[i].r) {
                container[i].y = 0 - container[i].r
            }
        }
    }








    
