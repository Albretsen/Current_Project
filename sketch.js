var data;

var estInc;

var canvasX = 640;
var canvasY = 360;

function preload(){
  data = loadTable("report.csv","csv","header");
}

function setup() {
  createCanvas(canvasX,canvasY);
  background(50);
  
  print("test");
  
  DisplayText();
  EstimatedIncome();
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
    
    strokeWeight(3);
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
  text('Income', 10, 50);
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