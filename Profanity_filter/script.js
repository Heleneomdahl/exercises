const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

const btn = document.getElementById("replaceBtn");
const textElem = document.getElementById("text");

// Tilføj dialog til DOM'en
let dialog = document.createElement("dialog");
dialog.textContent = "Teksten er allerede opdateret!";
document.body.appendChild(dialog);

function profanityFilter() {
  let text = textElem.textContent;
  let foundBadWord = false;

  curseWords.forEach((word) => {
    const regex = new RegExp(word.bad, "g");
    if (regex.test(text)) {
      foundBadWord = true;
      // Her wrappes det gode ord i et span med klassen 'good-word'
      text = text.replace(regex, `<span class="good-word">${word.good}</span>`);
    }
  });

  if (foundBadWord) {
    textElem.innerHTML = text;
  } else {
    dialog.showModal();
    setTimeout(() => dialog.close(), 2000); // Her lukker dialogen efter 2 sekunder
  }
}

btn.addEventListener("click", profanityFilter);
