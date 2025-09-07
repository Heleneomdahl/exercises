"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

function updateTexts(locale) {
  texts[locale].texts.forEach((item) => {
    document.querySelector(item.location).textContent = item.text;
  });
}

// Sæt standard sprog
let currentLocale = "da";
updateTexts(currentLocale);

// Lyt efter ændringer i dropdown
document.getElementById("language-select").addEventListener("change", function (e) {
  currentLocale = e.target.value;
  updateTexts(currentLocale);
});
