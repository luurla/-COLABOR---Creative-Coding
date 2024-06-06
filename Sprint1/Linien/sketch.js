function setup() {
 var myCanvas = createCanvas(windowWidth, windowHeight);
  //myCanvas.parent('Sprint1Teil2');

  //windowResized()
}

function draw() {
  background(220);

  let gridX = 29.5;
  let gridY = 140;

  let abstandX = height / gridX;
  let abstandY = width / gridY;

  let anzahl = gridX * gridY*2;

  for (let i = 0; i < anzahl; i++) {
    
    let yreihe = i % gridY;

    let xreihe = (i - yreihe) / gridY;

    let xpos = xreihe * abstandX;
    let ypos = yreihe * abstandY;
 
    let strickdicke = (sin(i / 20 + frameCount/20) + 1) * 4;
   //let strickdicke = noise(sin(i / 20 + frameCount/80) + 1) * 4;
   // let strickdicke = sin(noise((i / 40 + frameCount/-80) + 4) + noise((i / 40 + frameCount/80)+1)) * 6;
    //console.log(strickdicke);

    if (strickdicke < 4) {
      strickdicke = strickdicke *2;
    }
    strokeWeight(strickdicke*2) ;
    strokeCap(SQUARE);

    line(xpos, ypos, xpos + gridX,ypos);
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}