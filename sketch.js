var data;

var estInc;
var clicks;

var canvasX = 640;
var canvasY = 360; 

function preload(){
  data = loadTable("report.csv","csv","header");
  
  canvasX = windowWidth;
  canvasY = windowHeight; 
}

function setup() {
  createCanvas(canvasX,canvasY);
  background(50);
  
  DisplayText();
  EstimatedIncome();
  Clicks();                         
}

function Clicks(){
  stroke(255,255,102);
  fill(255,255,102);
  
  clicks = data.getColumn("Sidevisninger");
  
  var minVal = min(clicks);
  var maxVal = max(clicks);
  
  for(var i = 0; i < clicks.length; i++){
    var xpos = map(i,0,clicks.length,0+20,width);
    var ypos = map(clicks[i],minVal,maxVal,height-20,20);
    
    strokeWeight(1);
    point(xpos,ypos);
    
    strokeWeight(1);
    if(i != 0){
      line(lastXPos,lastYPos,xpos,ypos)
    }
    
    lastXPos = xpos;
    lastYPos = ypos;
  }
}

function EstimatedIncome(){
  stroke(0,220,0);
  fill(0,220,0);
  estInc = data.getColumn("Anslåtte inntekter (NOK)");
  
  var minVal = min(estInc);
  var maxVal = max(estInc);
  
  for(var i = 0; i < estInc.length;i++){
    var xpos = map(i,0,estInc.length,0+20,width);
    var ypos = map(estInc[i],minVal,maxVal,height-20,20);
    
    strokeWeight(1);
    point(xpos,ypos);
    
    strokeWeight(1);
    if(i != 0){
      line(lastXPos,lastYPos,xpos,ypos)
    }
    
    lastXPos = xpos;
    lastYPos = ypos;
    
  }
}

function DisplayText(){
  textSize(16);
  fill(0,220,0);
  stroke(0);
  text('Estimated income', 10, 50);
  fill(255,255,102);
  text('Page views', 10, 70)
  fill(255);
  text('Press "Any Key" and move mouse to scale graph', 10, 30);
}

function draw(){
  setup();
  
  if(keyIsPressed === true){
    canvasX = mouseX;
    canvasY = mouseY;
  }
}