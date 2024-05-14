function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let abstand = 20;

  let gridX = 20;
  let gridY = 50;

  let abstandX = height / gridX;
  let abstandY = width / gridY;

  let anzahl = gridX * gridY;

  for (let i = 0; i < anzahl; i++) {


    let yreihe = i % gridY;

    let xreihe = (i - yreihe) / gridY;

    let xpos = xreihe * abstandX;
    let ypos = yreihe * abstandY;

    // let strickdicke = noise((i / 40 + frameCount/-80) - 2) * 6 + noise((i / 40 + frameCount/80) + 0.5) * 7;
    let strickdicke = noise((sin(i / 40) + frameCount / -80) - 2) * 6 + noise((i / 40 + sin(frameCount / 80) + 0.5)) * 7;

    if (strickdicke < 5.5) {
      strickdicke = sin(strickdicke * 10);
    }


    strokeWeight(strickdicke);

    line(xpos, ypos, xpos + gridX, ypos);
  }


}
