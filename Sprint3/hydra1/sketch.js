var hydra = new Hydra({
  canvas: document.getElementById("myCanvas")
})



let mic;
//let micLevel;

// let value1;
// let value2;


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


  let value2 = spectrum[1];
console.log(value2)

s0.initCam()
src(s0)
.saturate(2)
.contrast(1.3)
.layer(src(o0)
.mask(shape(value2/80, 2)
.scale(0.5, 0.7)
.scrollX(0.25))
.scrollX(micLevel))
.modulate(o0, 0.001)
.out(o0)


}


// src(o0)
// .saturate(1.01)
// .scale(.999)
// .color(value1, 1.01, 1.01)
// .hue(.01)
// .modulateHue(src(o1).hue(.3).posterize(-1).contrast(.7), 2)
// .layer(src(o1)
//   .luma()
//   .mult(gradient(1)
//     .saturate(.9)))
// .out(o0)

// noise(1, .2)
// .rotate(2, .5)
// .layer(src(o0)
//   .scrollX(.2))
// .out(o1)

// render(o0)