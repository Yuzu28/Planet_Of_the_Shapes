# Planet Of the Shapes

<img src="https://github.com/Yuzu28/Planet_Of_the_Shapes/blob/master/public/images/image9.gif"  width="70%" height="70%">


# Description
* Planet of the Shapes is an Game Website that allow user to login and register into the site to play single and    multiplayer game modes. 
 
 * In single player mode, it allow a user to take off into the Battle Frontier. In the Battle Frontier, the user start off at level 1 and killing opposing enemy shapes to stack up points to advance to higher levels. There is also a hidden level once a player used up all their lives in the game. 

 * In multiplayer mode, it allow a user to chat with other users. Each user can operate their own shape and move around the screen. 
 
# Goals

* Login, Menu, and Register Page: Understanding and using express to create routes and storing data in databases. 

* Single Player Mode: Using Javascript Canvas to design a game where user can shoot down shapes.

* Multiplayer Mode: Using Socket io. to create live servers and a online chat box to chat with other users. Still a work in progress.

# Login and Registration Page

* **Login Page:** First time when the user head to the page
<img src="https://github.com/Yuzu28/Planet_Of_the_Shapes/blob/master/public/img/login.png"  width="70%" height="70%">

* **Registration Page:** If user don't have a account, they can make one.
<img src="https://github.com/Yuzu28/Planet_Of_the_Shapes/blob/master/public/img/register.png"  width="70%" height="70%">

* **Menu Page:** After a user create an account and successfully login. They will be taken to a menu screen and welcome screen that uses the user's display name during registration.  
<img src="https://github.com/Yuzu28/Planet_Of_the_Shapes/blob/master/public/img/menu.png"  width="70%" height="70%">
https://github.com/Yuzu28/Planet_Of_the_Shapes/blob/master/public/img/menu.png

# GamePlay
<img src="https://github.com/Yuzu28/Planet_Of_the_Shapes/blob/master/public/img/main.gif"  width="70%" height="70%">
    * Try the hidden bonus level call HELL MODE ┌( ಠ‿ಠ)┘.



# Leaderboard
* The leaderboard keep tracks of high score of every users register onto the site in single mode only. 
<img src="https://github.com/Yuzu28/Planet_Of_the_Shapes/blob/master/public/img/score.png"  width="70%" height="70%">




# How did we make it?

| Languages | 
| ------------- |
| HTML  | 
| CSS| 
| Javascript  | 
| Canvas  | 
| Express | 
| Postgresql | 
| Socket io.| 

## Obstacles and Challenges 
* Login and Registration Page
    * Trying to make sure it stores data of username and password in Postgresql.
  
* Single Player Mode
    * Learning and Understanding Canvas
    * Getting the Audio to function  Property
    *Game audio tend to keep playing when user dies.
    *Shapes in Canvas such as how to draw them and generate them on screen.
    *Getting the score to display in the database and on screen. 
           
* The Red Triangle ship 
    * trying to make it move. 
    * position it in the middle of screen on load and once it dies. 
    * Invisbility so that ship does not dies instantly when respawning
    * making it shoot bullets     
* Collision and detection between the shapes and the ship
   
* Multiplayer Mode
    * Taking a shot at using Socket io. and seeing how it work.
    * Chat box seems to operate propertly but text flow out of the box. 
    * Most problem were the same as single players such a shape movements.
    * It is still a work in progress...................
   

        
## Development Team  

| Contributors  | 
| ------------- |
| Charleese Burns|
| Kyle Lacy | 
| John Nguyen | 
| Kevin Reid| 
| Hakeem Washington  | 
