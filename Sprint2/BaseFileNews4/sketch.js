//.csv Tabelle
let table;

//Liste für Folgewörter
let dict = {};

let currentWord = "";

//Generierter Text
let markovText;

let bkg = 0;
let fontColor = 0;

function preload() {
    //Dateipfad zur .csv Datei
    table = loadTable(`Schlagzeilen.csv`, 'ssv');
        font = loadFont('assets/SpaceGrotesk-Bold.ttf');


}

function setup() {

    createCanvas(windowWidth, windowHeight);
    //colorMode(HSB, 255);

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
    textFont(font);
}

function mousePressed() {

    bkg = random([color('#326DFC'), color('#D3FF30'), color('#00000'), color('#0a0a0a'),color('#ffffff')]);
    fontColor = random([color('#EBC9FF'), color('#F4AD82'), color('#8850BE'), color('#FF8456'), color('#F43C01'),color('#ED8DFD'),color('#ff0000')]);
    if (currentWord.includes("»")) generateFirstWordWithQuotationMark();
    while (!currentWord.includes("»")) {
        generateNextWord()
    }
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



