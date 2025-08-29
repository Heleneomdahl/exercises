//Lav en funktion der modtager to argumenter, beloeb og moms.
//Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
//Lav moms som et default parameter sat til 25

"use strict";
function beregnMoms(beloeb, moms = 25) {
  const total = beloeb + (beloeb * moms) / 100;
  console.log(total);
}
// med argumenter
beregnMoms(100);

//med konstanter
const pris = 500;
const medMoms = 25;

beregnMoms(pris, medMoms);

//Klaus metode:

function momsBeregner(beloeb, moms) {
  console.log(beloeb + (beloeb * moms) / 100);
}
momsBeregner(100, 25);

//eller
function momsBeregner(beloeb, moms = 25) {
  console.log(beloeb + (beloeb * moms) / 100);
}

momsBeregner(100);
