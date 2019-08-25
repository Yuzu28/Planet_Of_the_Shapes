
// console.log('Im on the console');

//bullet shooting sound
var bulletSound = new nonstop("sound/pew.wav", 5, 0.5);

//when the awsome trigangle ship crash to other 
var crashexplo = new nonstop("sound/explosion5.mp3");

//when the triangle take down the opposing shapes
var shapeSplit = new nonstop("sound/Punch.wav", 5);

//sound when the final shape is destroy 
var lastShapeGone = new nonstop("sound/points.wav", 5);

//sound of triangel engine or thurster
var engine = new nonstop("sound/jetengine.wav", 1, 0.3);

//sound when level passed
var passlev = new nonstop("sound/pass.wav", 1, 0.3);

//background music
var music = new Music("sound/afraid.mp3", "sound/afraid.mp3");
// var myy = new nonstop("sound/afraid.mp3");
var myy = new nonstop("sound/depress.mp3",1,0.2);



//non ending loop for a sound track
myAudio = new Audio("sound/afraid.mp3"); 
if (typeof myAudio.loop == 'boolean')
{
    myAudio.loop = true;
}
else
{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}

function pauseAudio() { 
    myy.pause();
    myy.currentTime = 0;
  } 


function nonstop(src, maxs =1, volumeLel = 1.0){
    this.go = 0
    this.emptyArray = [];
    for(var i = 0; i < maxs; i++){
        this.emptyArray.push(new Audio(src));
        this.emptyArray[i].volume = volumeLel;
    }

    this.play = function(){
        this.go = (this.go + 1) % maxs;
        this.emptyArray[this.go].play();
    }
    this.stop = function(){
        this.emptyArray[this.go].pause();
        this.emptyArray[this.go].currentTime = 0;
        

    }
}

// function music(element){
//     this.sound = new Audio(element);
//     this.play();
// }








function Music(srcLow, srcHigh) {
    this.soundLow = new Audio(srcLow);
    this.soundHigh = new Audio(srcHigh);
    this.low = true;
    this.tempo = 1.0; // seconds per beat
    this.beatTime = 0; // frames left until next beat

    this.play = function() {
        if (true) {
            if (this.low) {
                this.soundLow.play();
            } else {
                this.soundHigh.play();
            }
            this.low = !this.low;
        }
    }

    this.setAsteroidRatio = function(ratio) {
        this.tempo = 1.0 - 0.75 * (1.0 - ratio);
    }

    this.tick = function() {
        if (this.beatTime == 0) {
            this.play();
            this.beatTime = Math.ceil(this.tempo * FPS);
        } else {
            this.beatTime--;
        }
    }
}
