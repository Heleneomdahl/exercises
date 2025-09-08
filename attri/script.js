document.querySelector("button").addEventListener("click", klik);

function klik() {
  if (document.querySelector("h1").dataset.filter === "bat") {
    document.querySelector("h1").dataset.filter = "fox";
  } else {
    document.querySelector("h1").dataset.filter = "bat";
  }

  if (document.querySelector("h2").dataset.filter === "bat") {
    document.querySelector("h2").dataset.filter = "fox";
  } else {
    document.querySelector("h2").dataset.filter = "bat";
  }
}
