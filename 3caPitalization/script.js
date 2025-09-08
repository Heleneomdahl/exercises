// const theName = "hElene";
// const threeCapitalised1 = theName.substring(0, 2).toLowerCase();
// const threeCapitalised2 = theName.substring(2, 3).toUpperCase();
// const threeCapitalised3 = theName.substring(3).toLowerCase();

console.log(theNameCapitalised("vAldeMAR")); // "Heleene"
function theNameCapitalised(theName) {
  return theName.substring(0, 2).toLowerCase() + theName.substring(2, 3).toUpperCase() + theName.substring(3).toLowerCase();
}

console.log(realCapitalised("vAldeMAR")); // "Heleene"
function realCapitalised(thisName) {
  return thisName.substring(0, 1).toUpperCase() + thisName.substring(1).toLowerCase();
}
