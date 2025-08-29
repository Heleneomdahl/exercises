// Opgave:
// Nu skal vi lave en “Gæt et tal” igen, men med rollerne byttet rundt:
//Det er nu computeren der skal gætte det tal mellem 0 og 100 du tænker på.
//Når du herefter klikker på en knap skal computeren komme med et kvalificeret gæt og det gæt skal vises på siden.

//Der skal så være tre knapper hvor brugeren kan fortælle computeren om dens gæt er for højt, for lavt eller om den har gættet rigtigt.
//Der kan også være en knap til at starte det hele
//Computeren skal gætte tallet hurtigst muligt.
//Sørg for at man ikke kan klikke på knapper man ikke skal kunne klikke på.
//For at få inspiration til løsningen af opgaven kan i sætte jer sammen i grupper af to og analysere hvad der foregår når man leger gæt et tal.
//Hvordan gætter man tallet hurtigst og mest rationelt?
//Her er et link til hvordan opgaven kunne se ud ustylet, jeres skal være stylet og med animationer, giv den gas med UI/UX.
//Ekstra: Når tallet er gættet skal computeren skrive til siden hvor mange gæt den har brugt.

"use strict";

let computerChoise;

const h2 = document.querySelector("#title");
const btnLow = document.querySelector("#button_low");
const btnHigh = document.querySelector("#button_high");
const btnRight = document.querySelector("#button_right");
const btnStart = document.querySelector("#button_start");

const tekst = document.querySelector("title");

let min = 0;
let max = 100;
// let guess;

startGame();

function startGame() {
  min = 0;
  max = 100;
  btnStart.addEventListener("click", computerGuess);
  btnStart.disabled = false;
  btnRight.disabled = true;
  btnHigh.disabled = true;
  btnLow.disabled = true;
}

function computerGuess() {
  computerChoise = Math.floor((min + max) / 2);
  console.log(computerChoise);
  h2.textContent = `Jeg gætter på ${computerChoise}`;
  btnStart.disabled = true;
  btnRight.disabled = false;
  btnHigh.disabled = false;
  btnLow.disabled = false;
}

btnLow.addEventListener("click", toLow);
btnHigh.addEventListener("click", toHigh);
btnRight.addEventListener("click", correctAnswer);

function toLow() {
  min = computerChoise;
  computerGuess();
}

function toHigh() {
  max = computerChoise;
  computerGuess();
}

function correctAnswer() {
  h2.textContent = `Tillykke, ${computerChoise} er helt korrekt! Skal vi prøve igen?`;
  reset();
}
function reset() {
  startGame();
}
