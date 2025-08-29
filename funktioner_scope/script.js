"use strict";

function greeting(firstName) {
  return `Hello ${firstName}`;
}
//her er et eksempel på undefined med tomme parenteser ()
// const result = greeting();
// console.log(result);

//her er det med string
// const result = greeting("Helene");
// console.log(result);

const result = `Greeting is, ${greeting("Helene")}`;
console.log(result);

//nyt eksempel

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}
const myRandomNum = getRandomNum(100);
console.log("Mit random nummer fra 0-100:", myRandomNum);
