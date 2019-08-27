//begining screen when press Start to play the Game

$(".play").click(function() {
  $("#startGame").hide();
  newGame();
});



// adding eventlisteners
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

//functionality of the game using arrow keys
//trying to make it so the user can interact with the keyboard

// keycode for keyboard:       https://www.expandinghead.net/keycode.html

function keyDown(element) {
  if (ship.dead) {
    return;
  }
  switch (element.keyCode) {
    case 32: // space bar: shooting
      shootingAwsomeBullets();
      break;
    case 37: // left arrow
      ship.rot = ((turnSpeed / 180) * Math.PI) / FPS;
      break;
    case 38: // up arrow: go forward
      ship.thrusting = true;
      break;
    case 39: // right arrow
      ship.rot = ((-turnSpeed / 180) * Math.PI) / FPS;
      break;
  }
}

function keyUp(/** @type {KeyboardEvent} */ element) {
  if (ship.dead) {
    return;
  }

  switch (element.keyCode) {
    case 32: // space bar: user can shoot
      ship.canShoot = true;
      break;
    case 37: // left arrow key
      ship.rot = 0;
      break;
    case 38: // up arrow key
      ship.thrusting = false;
      break;
    case 39: // right arrow key
      ship.rot = 0;
      break;
  }
}

//new level
function newLevel() {
  text = "Level " + (level + 1);
  textAlpha = 1.0;
  createShape();
}

//When all lives all use up and user hit the try again button
$(".restart").click(function() {
  $("#game-over").hide();
  newGame();
});

$(".heaven").click(function() {
  $("#game-over").hide();
  bosslevel();
  // pauseAudio()
});
// var mainMusic = new nonstop("sound/Music/Game Main.wav", 1, 0.06);
// if (window.location.href === "http://localhost:3000/singleplayer") {
//   mainMusic.play();
// } else return;
