/*
=========================================================
BATTLESHIP GAME
=========================================================
*/

/*
==========================================================
TODO disallow getting repeat hits at same location (ie 1,1,1)
    maybe push guess onto array of hits
    and add second conditional for hit that guess not in array
    iterate thru array to check:
    function inArray(guess, alreadyHit){
        for (var i=0; i<alreadyHit.length; i++){
            if (alreadyHit(i) === guess ) { return: true; }
        }
        return false;
    }
    if ( inArray(guess, alreadyHit) == false .... then ...
        proceed with hits++ etc...

TODO consider turning into an NVC therapeutic game
    where someone is not meeting a need
    you identify the need and the feeling
    you choose to practice punch... or practice nvc
        build your i statement using x, y, z, a
        select the feeling as y, the need as z
        to complete the statement

TODO REPLACE PROMPT to fire WITH FORM input
    ask fire by 0-6 input form and button
    submit button runs checkAndNotify code
TODO add bang sound for hit and freesound.org sound for miss.

==========================================================+
*/

/*
=============================
Variables and subroutines
=============================
*/

// global variables to track guesses and game stats
var guess;
var guesses = 0;
var hits = 0;
var isSunk = false;
var engage = false;
var hitOrMiss;

// global variables for battleship location.
var location1;
var location2;
var location3;

// global variables for setInterval slideshow
var imageArea = document.getElementById('ship-slideshow');
var imageArray = [ "media/otherworld_battleship.jpg", "media/alien_battleship.png", "media/italian_battleship.jpg" ];
var imageIndex = 0;

// note: use clearInterval with event handler ie onclick to stop
setInterval(changeImage, 5000);

// runs on interval to change image src to next item in imageArray
function changeImage() {
    imageArea.setAttribute('src', imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

// generate 3 adjacent locations randomly
function randomLocationGenerate() {
    location1 = Math.floor(Math.random() * 7); // 0-6
    if (location1 === 0 || location1 == 1 || location1 == 2 || location1 == 3 || location1 == 4) {
      location2 = location1 + 1; // ie if 0, 1
      location3 = location1 + 2;
    }
    else if (location1 == 5) {
      location2 = 4;
      location3 = 6;
    }
    else if (location1 == 6){
      location2 = 5;
      location3 = 4;
    }
    console.log(location1, location2, location3);

    // tell user ship is in the water!
    // but leave fire invites to other functions
    // get element from html and put in a variables
    var messageElement = document.getElementById("message"); // h3
    // create textnode shipt in water, wish to engage?
    var shipInTheWaterText = document.createTextNode("Enemy ship in the water! Scanning horizon but location unknown....");
    // append/insert html into element
    messageElement.appendChild(shipInTheWaterText);
    engagementDecision();
}


function engagementDecision() {
    //question
    var engagementQuestionText = document.createTextNode("Think carefully. Do you wish to engage?");
    // button, onclick sets engage to true
    var engagementButton = document.createElement("button");
    // setAttribute(s) for onclick engage=true
    engagementButton.setAttribute("onclick", "fireHitMissRepeat()");
    // create and append textNode to button
    var buttonText = document.createTextNode("Attack");
    engagementButton.appendChild(buttonText);
    // append text and button
    var messageElement = document.getElementById("message"); // h3
    var attackButton = document.getElementById("attack-button");
    messageElement.appendChild(engagementQuestionText);
    attackButton.appendChild(engagementButton);
}

function addHitOrMiss(numberGuessed, hitOrMiss) {
    // append hit or miss text to guess location in table
    // get id string by td + guess (0-6)... td0, td1, td2...
    var tdId = "td" + numberGuessed.toString();
    console.log(tdId); // number conversion into string variable?
    var gameSquareElement = document.getElementById(tdId);
    var hitOrMiss = hitOrMiss;
    console.log(hitOrMiss);
    console.log(gameSquareElement);
    gameSquareElement.innerHTML = hitOrMiss;
}

function gameOver(guesses){
    // tell user stats and ask if wants to play again using button
    // var stats = "<h1>Nice game</h1><h5>You fired " + guesses + " times, hit my battleship 3 times and sunk it. Shooting percentage: " + (3/guesses) + "."</h5><button name="playAgainButton" onclick="startGame()">Play Again</button>;
    var stats = "Nice game. You fired " + guesses + " times, hit my battleship 3 times and sunk it. Shooting percentage: " + (3/guesses);
    alert("You sunk my battleship!");
    alert(stats);
}

function fireHitMissRepeat() {
    // The game logic: loop while ship not sunk
    while (isSunk === false) {
        guess = prompt("Ready, Aim, Fire! (Enter number 0-6)");
        // invalid guess
        if ( guess < 0 || guess > 6 ) {
            guess = prompt("Please enter a number 0 - 6");
        }
        // valid guess
        else {
            guesses = guesses + 1;
            // if hit
            if (guess == location1 || guess == location2 || guess == location3) {
                hits = hits + 1;
                // alert("HIT!");
                hitOrMiss = "HIT!";
                addHitOrMiss(guess, hitOrMiss);
                if (hits == 3) {
                    isSunk = true;
                    gameOver(guesses);
                }
            }
            else {
                hitOrMiss = "MISS!";
                addHitOrMiss(guess, hitOrMiss);
            }
        } // end valid guess
    } // end while loop

} // end fireHitMissRepeat()
