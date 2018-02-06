# Crystals Game

by Rich Budek 02/05/2018

Project location for viewing   [richbu.github.io](https://github.com/RichBu/Game_Crystals)

Description:
This is a game of crystal collection.  The program generates a random number for the target score as well as the 4 crystals.  As the user clicks on crystals, they are accumulated and the total score is shown.  In order to win, the user must select the EXACT number of points.

Startup Screen:
The top row returns the user back to the portfolio
![Start up Screen](/assets/images/screen_caps/Crystal_01.png)

The user must pick start a new game before he can play as well as between games.  This is done by clicking on the "play" followed by the "New Game" button.

![New game](/assets/images/screen_caps/Crystal_02.png)


If the user exceed the target score, then he loses the game.  In order to test the functionality, under "settings", the user can click on the "Cheat" button which then sets the far left crystal to be = 1.  This then allows the user to hit the score exactly and test how the game wins.

![Cheating](/assets/images/screen_caps/Crystal_03.png)


The modal window can be cleared using either the close button or by hitting a blank area on the screen:



Technolgies used:
1. HTML for general page layout.  Handcoded to match porfolio pages
2. Responsive design
3. BootStrap for nice buttons and menu
4. Javascript for program functions
5. JQuery to talk to the HTML elements
7. Modal windows to give clean pop ups

Internal design
1. Javascript manupulates the HTML elements directly using jQuery.
2. Most of code re-written as object and methods to make it clearer and easier to handle
3. The crystals are an object with all the functions built in.  Then an array of crystals is made.
4. Everytime a user clicks on a crystal, the total score is re-computed.

Left to do:
1. Get the history of the last picked crystals to show up.
2. Put panels around the crystals to show how many of each were picked.
3. Game settings to be toggles and buttons
4. High score recording


