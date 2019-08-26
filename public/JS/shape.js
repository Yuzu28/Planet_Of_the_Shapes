
    function createShape() {

        container = [];
        var x, y;

        for (var i = 0; i < shapeNum + level; i++) {
            // shape location
            do {
                x = Math.floor(Math.random() * canv.width);
                y = Math.floor(Math.random() * canv.height);
            } while (distBetweenPoints(ship.x, ship.y, x, y) < shapeSize * 2 + ship.r);
            container.push(newShape(x, y, Math.ceil(shapeSize / 2)));
        }
        
        
    }

    function killingShapes(index) {
        var x = container[index].x;
        var y = container[index].y;
        var r = container[index].r;

        // split shape once hit
        if (r == Math.ceil(shapeSize/ 2)) { // make large shape
            container.push(newShape(x, y, Math.ceil(shapeSize / 4)));
            container.push(newShape(x, y, Math.ceil(shapeSize / 4)));
            shapeSplit.play();
            score += largeShapePoint;
        } else if (r == Math.ceil(shapeSize / 4)) { // make medium shape
            container.push(newShape(x, y, Math.ceil(shapeSize / 8)));
            container.push(newShape(x, y, Math.ceil(shapeSize / 8)));
            shapeSplit.play();

            score += mediumShapePoint;
        } else {
            score += smallShapePoint;
            lastShapeGone.play();

        }

        // check high score
        if (score > scoreHigh) {
            scoreHigh = score;
            localStorage.setItem(SAVE_KEY_SCORE, scoreHigh);
        }

        // destroy the shape
        container.splice(index, 1);

        // new level happen once all shape is gone 
        if (container.length == 0) {
            level++;
            newLevel();
            passlev.play();
        }
    }

    //to incorporate with the shapes, bullet, and the tri ship
    function distBetweenPoints(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }




    //go generate a random number between 3 and 6 for the size of the shape to be in the game
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function newShape(x, y, r) {
        var lvlMult = 1 + 0.1 * level;
        var holder = {
            x: x,
            y: y,
            xv: Math.random() * shapeSpeed * lvlMult / FPS * (Math.random() < 0.5 ? 1 : -1),
            yv: Math.random() * shapeSpeed * lvlMult / FPS * (Math.random() < 0.5 ? 1 : -1),
            a: Math.random() * Math.PI * 2, // in radians
            r: r,
            offs: [],
            vert: getRandomInt(3, 6) //generate random shapes based on sides
        };



        // making the shape, so it stay staight
        for (var i = 0; i < holder.vert; i++) {
            holder.offs.push(Math.random() * 0 * 2 + 1 - 0); //jaggedness of shape
        }

        return holder;
    }