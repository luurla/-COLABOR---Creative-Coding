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

  fft = new p5.FFT(0.8, 64);
  fft.setInput(mic);

  //64, 128, 256, 512, 1024

}

function draw() {
  //background(220);
  micLevel = mic.getLevel();

  let spectrum = fft.analyze();
  let value1 = spectrum[0];
  let value2 = spectrum[1];

  console.log(value2);

  osc(10,0.3,value2/20)
  .modulateScale(osc(9,0,5).kaleid(8))
  .repeat(3,2)
  .modulate(o0,0.1)
  .modulateKaleid(shape(3,value2/20,5))
  .out(o0)
  

}  

