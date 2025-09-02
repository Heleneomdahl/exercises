const list = document.querySelector("ul");

const barArr = [];

setInterval(generateBars, 500);

function generateBars() {
  barArr.push(Math.floor(Math.random() * 100) + 1);
  console.log(barArr);

  if (barArr.length > 6) {
    barArr.shift();
  }
  console.log(barArr);

  render();
}

function render() {
  document.querySelectorAll("li").forEach((elm, i, arr) => {
    elm.style.setProperty("--height", barArr[i]);
    console.log("elm", elm);
    console.log("i", i);
    console.log("arr", arr);
  });
}
