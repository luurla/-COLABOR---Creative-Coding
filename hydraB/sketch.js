var hydra = new Hydra({
  canvas: document.getElementById("myCanvas"),
})



function setup() {
  let back = createCanvas(windowWidth, windowHeight);
  let canvas = document.getElementById("myCanvas");
  back.parent('Sprint4Background');
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';

}

function draw() {
  //background(220,2);
}


function mousePressed() {
  clear();
}

osc(20, 0.01, 1.1)
.kaleid(5)
.color(2.83,0.91,0.39)
.rotate(0, 0.1)
.modulate(o0, () => mouse.x * 0.0003)
.scale(1.01)
  .out(o0)