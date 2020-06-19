  
/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library
   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */



/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = UITLEG;

const AUTORICHTING_N =  0;
const AUTORICHTING_NO = 1;
const AUTORICHTING_O =  2;
const AUTORICHTING_ZO = 3;
const AUTORICHTING_Z =  4;
const AUTORICHTING_ZW = 5;
const AUTORICHTING_W =  6;
const AUTORICHTING_NW = 7;

// plaatjes variabelen
var blauweAutoO = 0;
var blauweAutoZ = 0;
var blauweAutoN = 0;
var blauweAutoW = 0;
var blauweAutoNO = 0;
var blauweAutoNW = 0;
var blauweAutoZO = 0;
var blauweAutoZW = 0;
var groeneAutoO = 0;
var groeneAutoZ = 0;
var groeneAutoN = 0;
var groeneAutoW = 0;
var groeneAutoNO = 0;
var groeneAutoNW = 0;
var groeneAutoZO = 0;
var groeneAutoZW = 0;
var finishline = 0;
var startscherm = 0;
var eindscherm = 0;

var blauwRichting = AUTORICHTING_Z;
var groenRichting = AUTORICHTING_Z;



var blauwX = 180; // x-positie van blauwe auto
var blauwY = 260; // y-positie van blauwe auto

var blauwLengte = 87; // Breedte van blauwe auto
var blauwBreedte = 65; // Breedte van blauwe auto

var groenX = 80; // x-positie van groene auto
var groenY = 260; // y-positie van groene auto

var groenBreedte = 60; // Breedte van groene auto
var groenLengte = 85; // Lengte van groene auto

var finishlineX = 36; // x-positie  van finishline 
var finishlineY = 280; // y-positie  van finishline 

var finishlineBreedte = 234; // Breedte van finishline 
var finishlineLengte = 100; // Lengte van finishline 

var kleineCirkelLengte = 310; // Lengte van kleine cirkel 
var kleineCirkelBreedte = 740; // Breedte van kleine cirkel

var groteCirkelBreedte = 1210; // Breedte van grote cirkel 
var groteCirkelLengte = 680; // Lengte van grote cirkel

var cirkelPositieX = 640; // x-positie  van cirkel
var cirkelPositieY = 360; // y-positie  van cirkel

var score1 = 0; // aantal behaalde punten van blauwe auto
var score2 = 0; // aantal behaalde punten van groene auto



/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */

function preload() {
    console.log("preload start");

  

    // blauwe auto's plaatjes alle posities
    blauweAutoO = loadImage('afbeeldingen/blauwe_auto_O.png');
    blauweAutoZ = loadImage('afbeeldingen/blauwe_auto_Z.png');
    blauweAutoN = loadImage('afbeeldingen/blauwe_auto_N.png');
    blauweAutoW = loadImage('afbeeldingen/blauwe_auto_W.png');
    blauweAutoNO = loadImage('afbeeldingen/blauwe_auto_NO.png');
    blauweAutoNW = loadImage('afbeeldingen/blauwe_auto_NW.png');
    blauweAutoZO = loadImage('afbeeldingen/blauwe_auto_ZO.png');
    blauweAutoZW = loadImage('afbeeldingen/blauwe_auto_ZW.png');

    // groene auto's plaatjes alle posities
    groeneAutoZ = loadImage('afbeeldingen/groene_auto_Z.png');
    groeneAutoW = loadImage('afbeeldingen/groene_auto_W.png'); 
    groeneAutoO = loadImage('afbeeldingen/groene_auto_O.png'); 
    groeneAutoN = loadImage('afbeeldingen/groene_auto_N.png'); 
    groeneAutoNW = loadImage('afbeeldingen/groene_auto_NW.png'); 
    groeneAutoNO = loadImage('afbeeldingen/groene_auto_NO.png');
    groeneAutoZO = loadImage('afbeeldingen/groene_auto_ZO.png');  
    groeneAutoZW = loadImage('afbeeldingen/groene_auto_ZW.png');

    // finishline plaatje
    finishline = loadImage('afbeeldingen/finishline.png');

    // beginscherm en eindscherm plaatje
    startscherm = loadImage('afbeeldingen/startscherm.jpg');
    eindscherm = loadImage('afbeeldingen/eindscherm.png');
}


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("green");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
  fill("grey");
  ellipse(cirkelPositieX, cirkelPositieY, groteCirkelBreedte, groteCirkelLengte) // buitrand van het circuit
  fill("green");
  ellipse(cirkelPositieX, cirkelPositieY, kleineCirkelBreedte, kleineCirkelLengte) // binnenrand van het circuit
  image(finishline, 36, 280, 234, 100) // finishline
  line(1010,360, 1245, 360) // lijn voor halverwege de circuit
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenGroenAuto = function(x, y) {  
     switch (groenRichting) {

      case AUTORICHTING_N:
       image(groeneAutoN, x, y, groenBreedte, groenLengte);
      break;

      case AUTORICHTING_Z:
        image(groeneAutoZ, x, y, groenBreedte, groenLengte);
      break;

      case AUTORICHTING_O:
        image(groeneAutoO, x, y, groenLengte, groenBreedte);
      break; 

      case AUTORICHTING_W:
        image(groeneAutoW, x, y, groenLengte, groenBreedte);
      break;

      case AUTORICHTING_NW:
        image(groeneAutoNW, x, y, groenBreedte, groenLengte);
      break;

      case AUTORICHTING_NO:
        image(groeneAutoNO, x, y, groenBreedte, groenLengte);
      break;

      case AUTORICHTING_ZW:
        image(groeneAutoZW, x, y, groenBreedte, groenLengte);
      break;

      case AUTORICHTING_ZO:
        image(groeneAutoZO, x, y, groenBreedte, groenLengte);
      break;  
    }   
};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenBlauwAuto = function(x, y) {
    switch (blauwRichting) {

        case AUTORICHTING_N:
            image(blauweAutoN, x, y, blauwBreedte, blauwLengte);
        break;

        case AUTORICHTING_Z:
            image(blauweAutoZ, x, y, blauwBreedte, blauwLengte);
        break;

        case AUTORICHTING_O:
            image(blauweAutoO, x, y, blauwLengte, blauwBreedte);
        break;

        case AUTORICHTING_NW:
            image(blauweAutoNW, x, y, blauwBreedte, blauwLengte);
        break;

        case AUTORICHTING_NO:
            image(blauweAutoNO, x, y, blauwBreedte, blauwLengte);
        break;

        case AUTORICHTING_ZW:
            image(blauweAutoZW, x, y, blauwBreedte, blauwLengte);
        break;

        case AUTORICHTING_ZO:
            image(blauweAutoZO, x, y, blauwBreedte, blauwLengte);
        break;

        case AUTORICHTING_W:
            image(blauweAutoW, x, y, blauwLengte, blauwBreedte);
        break;       
    } 
};


/**
 * Groene auto bewegen
 */
var beweegGroenAuto = function() {
      var futureX = groenX;
      var futureY = groenY;

    if (keyIsDown(65)) {
        if (groenX > 0) {
            groenRichting = AUTORICHTING_W;
            futureX = groenX -5;
        }
    }

    if (keyIsDown(68)) {
        if (groenX < 1280) {
            groenRichting = AUTORICHTING_O;
            futureX = groenX + 5;
        }
    }

    if (keyIsDown(87)) {
        if (groenY > 0) {
            groenRichting = AUTORICHTING_N
            futureY = groenY - 5;
        }
    }

    if (keyIsDown(83)) {
        if (groenY < 720) {
            groenRichting = AUTORICHTING_Z
            futureY = groenY + 5;
        }
    }

    if (keyIsDown(65) && keyIsDown(87)) {
        groenRichting = AUTORICHTING_NW;
        futureX = groenX - 2.5;
        futureY = groenY - 2.5;
    }

    if (keyIsDown(68) && keyIsDown(87)) {
        groenRichting = AUTORICHTING_NO;
        futureX = groenX + 2.5;
        futureY = groenY - 2.5;
    }

    if (keyIsDown(68) && keyIsDown(83)) {
        groenRichting = AUTORICHTING_ZO;
        futureX = groenX + 2.5;
        futureY = groenY + 2.5;
    }

    if (keyIsDown(65) && keyIsDown(83)) {
        groenRichting = AUTORICHTING_ZW;
        futureX = groenX - 2.5;
        futureY = groenY + 2.5;
    }

    // check of er een botsing is,
    // zo NIET, dan positie updaten
    if (!collideRectRect(futureX, futureY, groenBreedte, groenLengte, blauwX, blauwY, blauwBreedte, blauwLengte) &&
        !collidePointEllipse(futureX, futureY, cirkelPositieX, cirkelPositieY, kleineCirkelBreedte, kleineCirkelLengte) ||
        !collidePointEllipse(futureX, futureY, cirkelPositieX, cirkelPositieY, groteCirkelBreedte, groteCirkelLengte)) {

       if (gaatFinishOver(groenY, futureY)) {
                score2++;
        }
        
        groenX = futureX;
        groenY = futureY;
    } 
}

/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};

/**
 * Blauwe auto bewegen
 * 
 */
var beweegBlauwAuto = function() {
    var futureX = blauwX;
    var futureY = blauwY;

    if (keyIsDown(LEFT_ARROW)) {
        if (blauwX > 0) {
            blauwRichting = AUTORICHTING_W;
            futureX = blauwX -5;
        }
    }

    if (keyIsDown(RIGHT_ARROW)) {
        if (blauwX < 1280) {
            blauwRichting = AUTORICHTING_O;
            futureX = blauwX + 5;
        }
    }

    if (keyIsDown(UP_ARROW)) {
        if (blauwY > 0) {
            blauwRichting = AUTORICHTING_N;
            futureY = blauwY - 5;
        }
    }

    if (keyIsDown(DOWN_ARROW)) {
        if (blauwY < 720) {
            blauwRichting = AUTORICHTING_Z
            futureY = blauwY + 5;
        }
    }

    if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
        blauwRichting = AUTORICHTING_NW;
        futureX = blauwX - 2.5;
        futureY = blauwY - 2.5;
    }

    if (keyIsDown(RIGHT_ARROW) && keyIsDown(UP_ARROW)) {
        blauwRichting = AUTORICHTING_NO;
        futureX = blauwX + 2.5;
        futureY = blauwY - 2.5;
    }

    if (keyIsDown(RIGHT_ARROW) && keyIsDown(DOWN_ARROW)) {
        blauwRichting = AUTORICHTING_ZO;
        futureX = blauwX + 2.5;
        futureY = blauwY + 2.5;
    }

    if (keyIsDown(LEFT_ARROW) && keyIsDown(DOWN_ARROW)) {
        blauwRichting = AUTORICHTING_ZW;
        futureX = blauwX - 2.5;
        futureY = blauwY + 2.5;
    }

    // ALS er geen botsing is met groene auto EN
    // geen botsing met midden,
    // dan positie updaten
    if (!collideRectRect(futureX, futureY, blauwBreedte, blauwLengte, groenX, groenY, groenBreedte, groenLengte) &&
        !collidePointEllipse(futureX, futureY, cirkelPositieX, cirkelPositieY, kleineCirkelBreedte, kleineCirkelLengte) ||
        !collidePointEllipse(futureX, futureY, cirkelPositieX, cirkelPositieY, groteCirkelBreedte, groteCirkelLengte)) {
            
            // zoek uit of de auto in de goede richting de
            // finish over gaat
            if (gaatFinishOver(blauwY, futureY)) {
                score1++;
            }

        blauwX = futureX;
        blauwY = futureY;
    }
}

// scorebord van blauwe auto
var tekenScore1 = function() {
    textSize(24);
    console.log("Score: ", score1);
    fill("blue");
    text("Lap: "+score1, 620, 350);
    text("/5", 690, 350);
}

// scorebord van groene auto
var tekenScore2 = function() {
    textSize(24);
    console.log("Score: ", score2);
    fill("white");
    text("Lap: "+score2, 620, 390);
    text("/5", 690, 390);
}
 
/**
 * Zoekt uit of de groene auto de finishline heeft geraakt
 * @returns {boolean} true als vijand is geraakt
 */
  
var gaatFinishOver = function(huidigeY, toekomstY) {
    var finishLineY = 360;
    if (huidigeY < finishLineY && toekomstY >= finishLineY) {
        return true;
    }
    return false;
}

/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    if (score1 >= 5 || score2 >= 5 ) {
        return true;
    }   else {
        return false;
    }   
}


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('green');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case UITLEG:
    background(startscherm)
    if (mouseIsPressed) {
        spelStatus = SPELEN;
    }
    break;
    case SPELEN:
    beweegGroenAuto();
    beweegBlauwAuto();
    tekenVeld();
    tekenGroenAuto(groenX, groenY);
    tekenBlauwAuto(blauwX, blauwY);
    tekenScore1();
    tekenScore2();

    if (checkGameOver()) {
        spelStatus = GAMEOVER;
        background(eindscherm);
    }
    case GAMEOVER:
    break;
  }
}