//.csv Tabelle
let table;

//Liste für Folgewörter
let dict = {};

let currentWord = "";

//Generierter Text
let markovText;

let bkg = 0;
let fontColor = 255;

let schriften = [];

function preload() {
    //Dateipfad zur .csv Datei
    table = loadTable(`Schlagzeilen.csv`, 'ssv');
    schriften[0] = loadFont('assets/gildent.otf'); 
    schriften[1] = loadFont('assets/Gridova.otf'); 
    schriften[2] = loadFont('assets/TaborSinfonia.otf'); 
    schriften[3] = loadFont('assets/Bugaki-Regular.otf');
    schriften[4] = loadFont('assets/Bugaki-Regular.otf');

}

function setup() {

    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 255);

    //Liste mit Folgewörter erstellen
    createMarkov();
    generateFirstWordWithQuotationMark();

    //Kondition, dass die Generation aufhört
    while (!currentWord.endsWith("»")) {
        generateNextWord();
    }
}



function draw() {
    background(bkg);
    text(markovText, 15, 30, windowWidth - 20, windowHeight - 20);
    textSize(80);
    textAlign(CENTER, CENTER);
    fill(fontColor);
    
   // console.log(textFont);
}   

function mousePressed() {
    let randomFont = floor(random(schriften.length));

    bkg = color(random(360), random(360), random(360));
    fontColor = color(random(360), random(360), random(360));
    generateNextWord();
    textFont(schriften[randomFont]);

}

//Möglichkeit Kommas ebenfalls abzutrennen, aber ist momentan nicht so nötig und nur kompliziert
function createMarkov() {
    let temp = [];
    table.rows.forEach(row => temp = [...temp, ...row.arr[0].split(" ")]);


    temp.forEach((word, i) => {

        if (i === temp.length) return;

        if (word in dict) {
            dict[word].push(temp[i + 1])

        } else {
            dict[word] = [temp[i + 1]];
        }
    })
}


function generateFirstWordWithQuotationMark() {

    let wordsThatStartWithQuote = Object.keys(dict).filter(key => key.startsWith("«"));
    print(wordsThatStartWithQuote);

    let randomWordsThatStartWithQuote = wordsThatStartWithQuote[getRandomInt(wordsThatStartWithQuote.length)];

    currentWord = markovText = randomWordsThatStartWithQuote;
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateNextWord() {
    let nextWord = dict[currentWord][getRandomInt(dict[currentWord].length)];
    currentWord = nextWord;
    markovText += ` ${nextWord}`;
}



