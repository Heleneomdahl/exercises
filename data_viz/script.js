document.addEventListener("DOMContentLoaded", () => {
  const url = "https://kea-alt-del.dk/kata-distortion/";

  // Hent data fra serveren
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Data fra fetch:", data);
      console.log("Name:", data.name);
      console.log("Personel:", data.personel.join(", "));
    });

  const number = document.getElementById("number");

  // Startværdier
  let lastHigh = getRandomInt(25, 35);
  let lastLow = getRandomInt(15, 25);
  let currentValue = lastHigh;
  let goingHigh = false;

  number.textContent = currentValue;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getNextValue(min, max, exclude) {
    const range = [];
    for (let i = min; i <= max; i++) {
      if (i !== exclude) range.push(i);
    }
    if (range.length === 0) return exclude;
    return range[Math.floor(Math.random() * range.length)];
  }

  function changeNumber() {
    number.classList.add("grow");

    let newValue;
    if (goingHigh) {
      newValue = getNextValue(lastHigh, 50, lastHigh);
      lastHigh = newValue;
    } else {
      newValue = getNextValue(0, lastLow, lastLow);
      lastLow = newValue;
    }

    currentValue = newValue;
    number.textContent = currentValue;

    goingHigh = !goingHigh;
  }

  number.addEventListener("transitionend", () => {
    number.classList.remove("grow");
  });

  setInterval(changeNumber, 1000);
});
