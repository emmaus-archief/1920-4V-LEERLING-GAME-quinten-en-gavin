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
var spelStatus = SPELEN;

var blauwX = 200; // x-positie van speler
var blauwY = 100; // y-positie van speler

var blauwAuto;
var groenAuto;
var groenBreedte = 60;
var blauwBreedte = 65;
var groenLengte = 85;
var blauwLengte = 87;


var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var groenX = 300;   // x-positie van vijand
var groenY = 100;   // y-positie van vijand

var score = 0; // aantal behaalde punten


function preload() {
 blauwAuto = loadImage('afbeeldingen/blauwe_auto.png');
 groenAuto = loadImage('afbeeldingen/groene_auto.png');
}




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
    image(groenAuto, x, y, groenBreedte, groenLengte);
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
  fill("green");
    image(blauwAuto, x, y, blauwBreedte, blauwLengte);
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

    if (keyIsDown(LEFT_ARROW)) {
        if (blauwX > 0) {
            blauwX -= 5;
        }
    }

  if (keyIsDown(RIGHT_ARROW)) {
        if (blauwX < 1280) {
            blauwX += 5;
        }
    }

  if (keyIsDown(UP_ARROW)) {
        if (blauwY > 0) {
        blauwY -= 5;
  }
  }

  if (keyIsDown(DOWN_ARROW)) {
       if (blauwY < 720) {
    blauwY += 5;
  }
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