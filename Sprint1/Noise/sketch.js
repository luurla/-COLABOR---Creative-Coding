function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let abstand = 20;

  let gridX = 30;
  let gridY = 180;

  let abstandX = height / gridX;
  let abstandY = width / gridY;

  let anzahl = gridX * gridY*2;

  for (let i = 0; i < anzahl; i++) {


    let yreihe = i % gridY;

    let xreihe = (i - yreihe) / gridY;

    let xpos = xreihe * abstandX;
    let ypos = yreihe * abstandY;

    // let strickdicke = noise((i / 40 + frameCount/-80) - 2) * 6 + noise((i / 40 + frameCount/80) + 0.5) * 7;
    let strickdicke = noise((sin(i / 40) + frameCount / -90) - 2) * 9 + noise((i / 40 + sin(frameCount / 80) + 0.5)) * 7;

    if (strickdicke < 5.5) {
      strickdicke = sin(strickdicke * 10);
    }


    strokeWeight(strickdicke);
    strokeCap(SQUARE);


    line(xpos, ypos, xpos + gridX, ypos);
  }


}
