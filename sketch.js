var wordLength = 5;
var word = new Array(wordLength);

var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

var wordAmount = 10;
var wordList = new Array(wordAmount);
var sentence = "";

//VOICE
var voice = new p5.Speech();

function setup() {
  createCanvas(640,360);
  voice.setLang("nb-NO");
  
  for(var i = 0; i < wordList.length; i++){
    wordList[i] = generator();
    word = new Array(floor(random(2,11)));
  }
  wordAssembler();
  sentenceAssembler();
  voice.speak(sentence);
  textSize(16);
  text(sentence, 10, 30);
}

function sentenceAssembler(){
  for(var i = 0; i < wordList.length; i++){
    if(i === 0){
      sentence = wordList[i];
    }else{
      sentence = sentence + ", " + wordList[i];  
    }
  }
}

function wordAssembler(){
  var word;
  
  for(var i = 0; i < wordList.length; i++){
    for(var j = 0; j < wordList[i].length; j++){
      word = word + wordList[i][j];
    }
    wordList[i] = word;
    word = "";
  }
  wordList[0] = wordList[0].substring(9);
}

function randLet(val) {
  var lett = "";
  if (val === 0) {
    lett = vowels[floor(random(5))];
  } else if (val == 1) {
    lett = consonants[floor(random(21))];
  } else if (val == 2) {
    if(floor(random(2)) == 1){
      lett = vowels[floor(random(5))];
    }else{
      lett = consonants[floor(random(21))];
    }
  }
  return lett;
}

function generator() {
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      word[i] = randLet(2);
    } else {
      if (vAc(i-1) === 0) {
        //IF VOWEL
        word[i] = randLet(1);
      } else {
        //IF CONSONANT
        word[i] = randLet(0);
      }
    }
  }
  return word;
}

function vAc(i) {
  if (checkIfVowel(word[i])) {
    return 0;
  } else if (checkIfConsonant(word[i])) {
    return 1;
  }
}

function checkIfConsonant(l) {
  switch (l) {
    case "b":
      return true;
      break;
    case "B":
      return true;
      break;
    case "c":
      return true;
      break;
    case "C":
      return true;
      break;
    case "d":
      return true;
      break;
    case "D":
      return true;
      break;
    case "f":
      return true;
      break;
    case "F":
      return true;
      break;
    case "g":
      return true;
      break;
    case "G":
      return true;
      break;
    case "h":
      return true;
      break;
    case "H":
      return true;
      break;
    case "j":
      return true;
      break;
    case "J":
      return true;
      break;
    case "k":
      return true;
      break;
    case "K":
      return true;
      break;
    case "l":
      return true;
      break;
    case "L":
      return true;
      break;
    case "m":
      return true;
      break;
    case "M":
      return true;
      break;
    case "n":
      return true;
      break;
    case "N":
      return true;
      break;
    case "p":
      return true;
      break;
    case "P":
      return true;
      break;
    case "q":
      return true;
      break;
    case "Q":
      return true;
      break;
    case "r":
      return true;
      break;
    case "R":
      return true;
      break;
    case "s":
      return true;
      break;
    case "S":
      return true;
      break;
    case "t":
      return true;
      break;
    case "T":
      return true;
      break;
    case "v":
      return true;
      break;
    case "V":
      return true;
      break;
    case "w":
      return true;
      break;
    case "W":
      return true;
      break;
    case "x":
      return true;
      break;
    case "X":
      return true;
      break;
    case "y":
      return true;
      break;
    case "Y":
      return true;
      break;
    case "z":
      return true;
      break;
    case "Z":
      return true;
      break;
  }
  return false;
}

function checkIfVowel(l) {
  switch (l) {
    case "a":
      return true;
      break;
    case "A":
      return true;
      break;
    case "e":
      return true;
      break;
    case "E":
      return true;
      break;
    case "i":
      return true;
      break;
    case "I":
      return true;
      break;
    case "o":
      return true;
      break;
    case "O":
      return true;
      break;
    case "u":
      return true;
      break;
    case "U":
      return true;
      break;
  }
  return false;
}

function draw() {
  
}
