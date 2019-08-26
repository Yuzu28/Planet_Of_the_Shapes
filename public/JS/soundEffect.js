
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
var myy = new nonstop("sound/depress.mp3",1,0.4);


//gameplay music
//non ending loop for a sound track......use .pause() to stop the audio
var myAudio = new Audio("sound/afraid.mp3"); 
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

//function music for gameover, shooting, crashing, and flying
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



