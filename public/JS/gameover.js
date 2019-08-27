//show the user score on the screen once they use up all their three lives

function overPopUp() {
  $("#score").html(score);
  if(playerScore<score){
    fetch('/sethighscore',{
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body:JSON.stringify({'displayName':playerName, 'highscore':score})
    })
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
