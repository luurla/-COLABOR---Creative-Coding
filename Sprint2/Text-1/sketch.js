/* let liste = ['null', 'eins', 'zwei', 'drei', 'vier'];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  let rand = floor(random(5));
  background(0);

  frameRate(1);
  fill(255);
  textSize(24);
  textFont('monospace');
  textAlign(CENTER, CENTER);
  text(floor(random(rand)) + ' ich bin ' + liste[rand], 20, 30,windowWidth,windowHeight);

} */

 // Umbrüche -> "\n"



//  let liste = ['dust', 'paper', 'leaves', 'fire', 'glass'];
//  let liste2 = ['To the sea', 'From the river', 'In a forest', 'Next to the tree', 'In my room']

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {

//   let rand = floor(random(5));
  
//   background(0);

//   frameRate(0.5);
//   fill(255);
//   textSize(24);
//   textFont('helvetica');

//  // textAlign(CENTER, CENTER);


//   //text('A house of' + "\n" + liste2[rand] + ' ' + liste[rand], 20, 30,windowWidth,windowHeight);

//   let sourceAll = join(liste2, " - ")
//   text(sourceAll, 20, 100,windowWidth,windowHeight);


//   let piece = match(sourceAll, /sea/g);
//  text(piece, 20, 30,windowWidth,windowHeight);


//   let piece2 = match(sourceAll, /\b\w{4}\b/g);
//   text(piece2, 20, 200,windowWidth,windowHeight);

// } 


// /\w+/g -> Wortgrenzen

let liste0 = ['A house', 'A office', 'A place', 'A school', 'A jail'];
let liste = ['full of dust', 'cover with paper', 'cover with leaves', 'on fire', 'made of glass'];
 let liste2 = ['to the sea', 'from the river', 'in a forest', 'next to the tree', 'in my room']

function setup() {
  let back = createCanvas(windowWidth, windowHeight+150);
back.parent('Sprint2Background');
}

function draw() {

  let rand = floor(random(5));
  let gen = 50;
  background(179, 177, 181);

  frameRate(2);
  fill(255);
  textSize(gen);
  textFont('helvetica');


  for (let y = 0; y < height-gen; y+=37) {
  push();
  textAlign(LEFT);
  text(liste0[rand], 20, y,windowWidth,windowHeight);
  pop();
  
  push();
  textAlign(CENTER);
  text( liste2[rand], 20, y,windowWidth-150
    ,windowHeight);
  pop();
  
  push();
  textAlign(RIGHT);
  text(liste[rand], -20, y,windowWidth,windowHeight);
  pop();
 
  
}
} 
