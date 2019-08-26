
    function newGame() {
        myy.stop(); ///stop the mission failed music
        myAudio.play();

        level = 0;
        lives = startingLife;
        score = 0;
        invisibility = 0.4
        shapeNum = 3;
        shapeSpeed = 50;
        ship = newShip();

        // get the high score from local storage
        var scoreStr = localStorage.getItem(SAVE_KEY_SCORE);
        if (scoreStr == null) {
            scoreHigh = 0;
        } else {
            scoreHigh = parseInt(scoreStr);
        }

        newLevel();
    }
    
    //troll level for the hardcore gamers

    function bosslevel() {
        myy.stop(); ///stop the mission failed music

        // invisibility = 10;
        level = 0;
        lives = startingLife;
        shapeNum = 100;
        invisibility = 5; //stay alive for 5 seconds, life is never fair
        shapeSpeed = 400;
        score = 0;
        ship = newShip();

        // get the high score from local storage
        var scoreStr = localStorage.getItem(SAVE_KEY_SCORE);
        if (scoreStr == null) {
            scoreHigh = 0;
        } else {
            scoreHigh = parseInt(scoreStr);
        }

        newLevel();
    }