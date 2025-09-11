document.addEventListener("mousemove", function (event) {
  //musens position i x-positionen
  const x = event.clientX;
  //vindues bredde
  const width = window.innerWidth;
  //procentdel af x i forhold til vinduets bredde
  const percent = x / width;

  // Beregning af RGB-værdierne baseret på procentdelen
  let r, g, b;
  // Farveovergang: sort (0,0,0) -> blå (0,0,255) -> hvid (255,255,255)
  if (percent < 0.5) {
    // Fra sort til blå (venstre halvdel)
    r = 0;
    g = 0;
    b = Math.round(percent * 2 * 255);
  } else {
    // Fra blå til hvid (højre halvdel)
    r = Math.round((percent - 0.5) * 2 * 255);
    g = Math.round((percent - 0.5) * 2 * 255);
    b = 255;
  }
  // Opdatering af baggrundsfarven
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
