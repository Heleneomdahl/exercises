const list = document.querySelector("ul");
const soejleArray = [];

setInterval(genererSoejle, 500);

function genererSoejle() {
  const li = document.createElement("li");
  li.style.setProperty("--height", Math.floor(Math.random() * 101));
  list.appendChild(li);
  soejleArray.push(li);

  if (soejleArray.length >= 20) {
    const fjernet = soejleArray.shift();
    list.removeChild(fjernet);
  }
}
