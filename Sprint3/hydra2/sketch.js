var hydra = new Hydra({
  canvas: document.getElementById("myCanvas")
})

let mic;
//let micLevel;




function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();

  mic.connect();

  fft = new p5.FFT(0.8, 128);
  fft.setInput(mic)

}

function draw() {
  //background(220);
  micLevel = mic.getLevel();

  let spectrum = fft.analyze();
  let value1 = spectrum[0];
  let value2 = spectrum[1];

console.log(value1);

osc(value1/3000, 0.9, 0.7)
.kaleid([7,4,5,7,8,9,10].fast(0.015))
.color(value2/6, 0.3)
.colorama(2)
.rotate(0.009,()=>Math.sin(time)* -0.001 )
.modulateRotate(o0,()=>Math.sin(time) * 0.003)
.modulate(o0, 0.9)
.scale(0.9)
.out(o0)

}
