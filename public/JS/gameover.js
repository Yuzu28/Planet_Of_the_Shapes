//show the user score on the screen once they use up all their three lives

function overPopUp() {
  $("#score").html(score);
  if(score>HighScore){

  }
  $("#game-over").show();
  lvlMusic[level].stop();
}

function gameOver() {
  ship.dead = true;
  text = "Mission Failed ";
  myAudio.pause();
  myy.play();
  overPopUp();
  hakeem.stop()
}
