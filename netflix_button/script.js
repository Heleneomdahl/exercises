// Funktionalitet:

// 1. Når knappen vises, starter en animation (fx en progress-bar eller en cirkel, der fyldes ud inde i knappen).
const btn = document.querySelector("#startBtn");
let mouseMoved = false;

// Viser knappen efter 1 sekund
setTimeout(() => {
  btn.classList.remove("hidden");
  btn.classList.add("show"); // starter fyld-animationen
}, 1500);

// 2. Når animationen er færdig, sker der en tydelig handling (fx: siden skifter farve, der linkes til en ny side, eller noget andet synligt).
btn.addEventListener("transitionend", () => {
  if (!mouseMoved) {
    document.body.style.background = "pink"; // automatisk skift hvis musen ikke er bevæget
  }
});

// 3. Hvis man bevæger musen et hvilket som helst sted på siden, hopper animationen straks til slut – men der sker ikke noget (ingen handling udføres).
window.addEventListener("mousemove", () => {
  if (btn.classList.contains("show") && !btn.classList.contains("full")) {
    btn.classList.add("full");
    mouseMoved = true;
  }
});

// baggrundsfarven skifter farver hvis man klikker på knappen, efter at musen er bevæget
btn.addEventListener("click", () => {
  if (mouseMoved) {
    document.body.style.background = "pink";
  }
});
