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

// eerste alle autoplaatjse aanmaken en inladen
var blauweAutoN, blauweAutoNO, blauweAutoO, blauweAutoZ;
var groenAutoN, groenAutoNO, groenAutoO, groenAutoZ;

function preload() {
    // alle 8 plaatjes per auto inladen
    blauweAutoO = loadImage('afbeeldingen/blauwe_auto_O.png');
    blauweAutoZ = loadImage('afbeeldingen/blauwe_auto_Z.png');


    groenAutoZ = loadImage('afbeeldingen/groene_auto.png'); // afbeelding van groene auto
}


const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

const AUTORICHTING_N =  0;
const AUTORICHTING_NO = 1;
const AUTORICHTING_O =  2;
const AUTORICHTING_ZO = 3;
const AUTORICHTING_Z =  4;
const AUTORICHTING_ZW = 5;
const AUTORICHTING_W =  6;
const AUTORICHTING_NW = 7;

var blauwX = 200; // x-positie van blauwe auto
var blauwY = 100; // y-positie van blauwe auto


var blauwRichting = AUTORICHTING_Z;
var groenRichting = AUTORICHTING_Z;

var groenBreedte = 60;
var blauwBreedte = 65;
var groenLengte = 85;
var blauwLengte = 87;


var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var groenX = 300;   // x-positie van groene auto
var groenY = 100;   // y-positie van groene auto

var score = 0; // aantal behaalde punten







/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("purple");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {   
    image(groenAutoZ, x, y, groenBreedte, groenLengte);
};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */





var tekenSpeler = function(x, y) {
    var teGebruikenImage;
    if (blauwRichting === AUTORICHTING_N) {
        teGebruikenImage = blauweAutoZ;
    }
    else if (blauwRichting === AUTORICHTING_NW) {
        teGebruikenImage = blauweAutoZ;
    }
    else if (blauwRichting === AUTORICHTING_W) {
        teGebruikenImage = blauweAutoZ;
    }
    else if (blauwRichting === AUTORICHTING_ZW) {
        teGebruikenImage = blauweAutoZ;
    }
    else if (blauwRichting === AUTORICHTING_Z) {
        teGebruikenImage = blauweAutoZ;
    }
    else if (blauwRichting === AUTORICHTING_ZO) {
        teGebruikenImage = blauweAutoZ;
    }
    else if (blauwRichting === AUTORICHTING_O) {
        teGebruikenImage = blauweAutoO;
    }
    else if (blauwRichting === AUTORICHTING_NO) {
        teGebruikenImage = blauweAutoZ;
    }
    image(teGebruikenImage, x, y, blauwBreedte, blauwLengte);
};













/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
     if (keyIsDown(65)) {
        if (groenX > 0) {
      groenX -= 5;
  }
}
  if (keyIsDown(68)) {
       if (groenX < 1280) {
    groenX += 5;
  }
  }
  if (keyIsDown(87)) {
      if (groenY > 0) {
    groenY -= 5;
  }
}

  if (keyIsDown(83)) {
      if (groenY < 720) {
    groenY += 5;
  }
}
}
   



/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};



/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele blauwX en blauwY
 */
var beweegSpeler = function(){
    var futureX = blauwX;
    var futureY = blauwY;

    if (keyIsDown(LEFT_ARROW) && keyIsDown(UP_ARROW)) {
        blauwRichting = AUTORICHTING_NW;
        futureX = blauwX - 2.5;
        futureY = blauwY - 2.5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        blauwRichting = AUTORICHTING_O;
        futureX = blauwX + 5;
    }

    if (keyIsDown(UP_ARROW)) {
        blauwRichting = AUTORICHTING_N
        futureY = blauwY - 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
       // zelfde soort trucje als bij UP 
    }


    // check of er een botsing is,
    // zo NIET, dan positie updaten
    if (!collideRectRect(futureX, futureY, blauwBreedte, blauwLengte,
                        groenX, groenY, groenBreedte, groenLengte)) {
        blauwX = futureX;
        blauwY = futureY;
    }

}


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {

  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();

      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }

      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(groenX, groenY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(blauwX, blauwY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}