var tableVar;
var temps;

function preload(){
  tableVar = loadTable('PRSA-adapted-aparrish.csv', 'csv', 'header');
}

function setup() {
  createCanvas(640,480);
  background(50);
  stroke(255);
  
  temps = tableVar.getColumn("TEMP");
  
  var minTemp = min(temps);
  var maxTemp = max(temps);
  
  for(var i = 0; i < tableVar.getRowCount(); i++){
    var val = tableVar.getNum(i,"TEMP");
    
    var xpos = map(i, 0, tableVar.getRowCount(), 0, width);
    
    var ypos =  map(val, minTemp, maxTemp, height, 0);
    
    point(xpos,ypos);
  }
  
  stroke(255, 0, 0);
  var zeroVal = map(0, minTemp, maxTemp, height, 0);
  line(0, zeroVal, width, zeroVal);
}

function draw(){
  
}