//------------------------------//
//----------- Canvas -----------//
//------------------------------//
    
    var shapeNum = 3; // starting number of shapes that will appear on level 1 and increse as the level go on
    const shapeSize = 100; // in pixels
    var shapeSpeed = 100; // max  speed of shape in pixels per second  50***** try 400 to make get go super fast 

    //----------- Point System -----------//
    const largeShapePoint = 20; // points scored for a big shape
    const mediumShapePoint = 30; // points scored for a med shape
    const smallShapePoint = 50; // points scored for a small shape



    //----------- Shooting System-----------//
    const shootDistance = 0.6; // max distance laser can travel as fraction of screen width
    const bulletDur = 0.1; // duration of the bullet' explosion in seconds
    const bulletMax = 10; // number of bullets
    const bulletSpeed = 500; // bullet speed/s

    

   
    const SAVE_KEY_SCORE = "highscore"; // save key for local storage of high score, might or not use

    //----------- Red Triangle SHip -----------//
    const ShipBlinkDur = 0.1; // duration in seconds of a single blink during ship's invisibility
    const selfDestruck = 0.3; // duration of the ship's explosion in seconds
    var invisibility  = 5; // duration (0.4) of the ship's invisibility in seconds
    const shipSize = 30; // ship height in pixels
    const shipAccel = 5; // acceleration of the ship in pixels per second per second
    const turnSpeed = 360; // turn speed in degrees per second
    const bounding = false; // show or hide collision bounding
    const dot = false; // show or hide ship's centre dot
    
    //----------- Text -----------//
    const textFading = 2.5; // text fade time in seconds
    const textsize = 40; // text font height in pixels

    

    //----------- shape moving around the screen -----------//
    const FPS = 30; // frames per second
    const FRICTION = 0.7; // num making it easy to move around
    var startingLife = 3; // Number of starting life you have in a game

    //----------- Canvas  -----------//
    var canv = document.getElementById("canvas");
    var ctx = canv.getContext("2d");


    //----------- Generate Random Color -----------//
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); //generate a random color
    var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);
    var randomColor3 = "#" + Math.floor(Math.random()*16777215).toString(16);
