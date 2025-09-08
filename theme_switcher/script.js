document.querySelector("select").addEventListener("change", changeColor);

function changeColor() {
  const colorSelect = document.querySelector("select").value;
  document.querySelector("body").dataset.filter = colorSelect;
}
