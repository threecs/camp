# Week 4 Assignment

### Objectives
* Create a fun and interactive game in the browser.
* Dynamically update the HTML with jQuery.
* Style various HTML elements with CSS.
* Push your code to Github.
* Deploy your code from Github to Heroku.

### Remember

You will be fully capable of doing this homework by the end of Saturday's class.

### Instructions
1. Create a new folder called `week-4-game`.
2. Inside the Portfolio folder, create the following:
  + `index.html`, `composer.json`, and `index.php`
  + Put the appropriate content in the composer.json and index.php files to be able to deploy your game to Heroku.
  + Make a folder called `assets`.
    + Inside the assets folder make two additional folders called `javascript`, `css` and `images`.
      + Inside the `javascript` folder, make a file called `game.js`.
      + Inside the css folder make a file called `style.css`.
      + Inside the css folder make a file called `reset.css` and include the code found from the Meyerweb Reset.css located [here](http://meyerweb.com/eric/tools/css/reset/reset.css)
      + Inside the images folder you can save the images you plan on using.
3. Push the above changes to Github (Make sure to `git add .` and `git commit -m "initial site files"` then type `git push origin master` to push your changes to your Github repo.
4. Choose which game you want to make. The CrystalsCollector game is easier than making the RPG.

### Option One: CrystalsCollector Game (easier than RPG)

CrystalsCollector!

Watch the demo

* This is a guessing game using numbers, similar to the game hangman, but instead of letters the player will guess with numbers. There will be four crystals displayed as buttons on the page.
* The player will be shown a random number at the start of the game.
* When the player clicks on a crystal it will add a specific amount of points to the player's total score.
* The player wins the game if their total score matches the random number and the player loses the game if their total score goes above the random number.
* The amount of points each crystal adds is not shown to the player, but their total score is displayed and updated after each crystal is clicked.
* The number of games won and lost will be displayed.
* If the player successfully matches their total score to the random number they get 1 win, if the player's total score is above the random number the player get 1 loss, either way the game restarts.
* When the game is restarted, the player will be shown a new random number, all the crystals will now have 4 different hidden values, and the player's total score is reset to 0.

##### Game design note:
###### The random number shown at the start of the game should be between 19 - 120
###### Each crystal should have a random hidden value between 1 - 12

### Option Two: Pick Your Own Theme RPG Game (Ours was Star Wars)

Watch the demo

* This is a combat based RPG Game, the player will fight with a character of their choice against the computer.
* At the start of the game the player will choose a character by clicking on the character's picture. The player will play as that character for the rest of the game.
* Every character that was not picked is now an enemy that the player must defeat. Enemies should be moved to a different area of the screen.
* The player chooses which enemy they will attack by clicking on that enemy's picture.
* Once the player picks an enemy to fight, that enemy is moved to a "defender area" to do battle with the player.
* The player will now be able to hit the attack button to fight against that defender.
* Whenever the attack button is hit, the player character is going to attack the defender character once. The defender character will now counter attack the player character once.
* When the player character "attacks", the defender will lose "Health Points" displayed at the bottom of the defender's picture.
* When the defender "counter attacks", the player character will lose hp displayed at the bottom of the player character's picture.
* Keep hitting the attack to try and defeat the defender
* When the defender's "Health Points" are reduced to 0 or below, they are removed from the "defender area". The player character can now pick a new enemy to attack.
* The player wins the game by defeating all enemy characters, and loses the game the game if the player character's "Health Points" are 0 or below.

##### Game design notes:
###### Each character in the game has 3 attributes: `Health Points`, `Attack Power`, and `Counter Attack Power`.
###### Each time the player attacks, their character's Attack Power increases by its base Attack Power. So if the base Attack Power is 6, each attack will increase the Attack Power by 6. (12, 18, 24, 30 etc...)
###### The enemy character only has `Counter Attack Power` and their `Counter Attack Power` never changes.
###### The `Health Points`, `Attack Power`, and `Counter Attack Power` of each character will be different.
###### None of the characters in the game can heal or recover Health Points, so the point of the game is to pick a character and fight an enemy that has low `Counter Attack Power` first and build up your own `Attack Power` before you lose all your `Health Points`.
###### Depending on game play, you can win or lose with any of the characters in the game.

# Copyright
Coding Boot Camp (C) 2016. All Rights Reserved.
