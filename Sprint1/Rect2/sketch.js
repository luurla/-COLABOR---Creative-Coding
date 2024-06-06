

let colorA, colorB;
let colorC;

function setup() {
  createCanvas(windowWidth, windowHeight);

  colorA = color(102, 150, 255, 110);
  colorB = color(255, 17, 56, 110);

}

function draw() {
  background(255);
  noStroke();


  let gridX = 20;
  let gridY = windowHeight;

  let abstandX = height / gridX;
  let abstandY = width / gridY;

  let anzahl = gridX * gridY * 2;


  for (let i = 0; i < anzahl; i++) {

    let yreihe = i % gridY;

    let xreihe = (i - yreihe) / gridY;

    let xpos = xreihe * abstandX;
    let ypos = yreihe * abstandY;


    let breite = sin(noise((i / 40 + frameCount / -180) + 1) - noise((i / 40 + frameCount / 500) + 1)) * 7;
    let hoehe = noise((breite * 2 + frameCount / 200) + 1) * 6;

    let mischWert = map(i, 0, -breite, -2, 1 * 2);

    let colorC = lerpColor(colorA, colorB, mischWert);
    fill(colorC);

    // X rect(mischWert/2, ypos, mischWert/2,breite);
    // X rect(xpos, ypos, xpos + gridX, breite+5);

    // 1 rect(xpos, ypos, 20, breite);
    rect(xpos, ypos, breite * 13, sin((breite * 5 + frameCount / 180) + 1) * 13);
    // 3 rect(xpos, ypos, hoehe *10, hoehe);
    // 4 rect(xpos+hoehe, ypos+hoehe, breite * 13, breite + hoehe);
    // 5 rect(xpos, ypos,breite*15, breite+5);    
    // B rect(xpos, ypos, breite * 13, breite);




  }




}
