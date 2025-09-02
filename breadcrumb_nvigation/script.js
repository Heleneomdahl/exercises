const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", klik);

function klik() {
  let str = "";
  bc.forEach((elm, i) => {
    if (i < bc.length - 1) {
      str += `<span><a href="${elm.link}">${elm.name}</a></span> <span>/</span> `;
    } else {
      str += `<span>${elm.name}</span>`;
    }
  });
  document.querySelector("ul").innerHTML = str;
}
