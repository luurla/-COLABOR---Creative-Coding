function setup() {
  createCanvas(400, 400);
  //strokeWeight(noise(random(100)));

}

function draw() {
  background(220);

  let abstand = 20;


  /*for (let y = 0; y < height; y += abstand) {
    for (let x = 0 ; x < width ; x += abstand) {

      let strickdicke=(sin(y+x) + 1) * 4;
      strokeWeight(strickdicke);
       line(x, y, x+20, y);
  }
}*/

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
 
    //let strickdicke = (sin(i / 20 + frameCount/20) + 1) * 4;
   //let strickdicke = noise(sin(i / 20 + frameCount/80) + 1) * 4;
    let strickdicke = sin(noise((i / 40 + frameCount/-80) + 1) + noise((i / 40 + frameCount/80)+1)) * 6;
    //console.log(strickdicke);

    if (strickdicke < 4) {
      strickdicke = strickdicke -3;
    }
    strokeWeight(strickdicke*2) ;

    line(xpos, ypos, xpos + gridX,ypos);
  }


}
