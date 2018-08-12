var cols = 10;
var rows = 10;

var y = 0;
var x = 0;
var y1 = 0;
var x1 = 0;

var grid;

var currPos;

function setup() {
  createCanvas(600, 300);

  grid = create2DArray();
  
  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j] = 0;
    }
  }
  grid[0][3] = 1;
}

function create2DArray() {
  var arr = new Array(cols);

  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  return arr;
}

function drawEachSquare(){
  fill(255);
  stroke(0);
  
  x = 0;
  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      if(grid[i][j] != 0){
        fill(0);
      } else{
        fill(255);
      }
      rect(x,y,10,10);
      y += 10;
    }
    y = 0;
    x += 10;
  }
}

function findCurrPos(){
  
  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      if(grid[i][j] == 1){
        return[i,j];
      }
    }
  }
  return[0,0];
  
}

function move(x1,y1){
  currPos = findCurrPos();
  
  grid[currPos[0]][currPos[1]] = 0;
  
  if(currPos[0] + x1 <= -1 || currPos[0] + x1 >= cols || currPos[1] + y1 <= -1 || currPos[1] + y1 >= rows){
    print("wall");
  }
  else{
    currPos[0] = currPos[0] + x1;
    currPos[1] = currPos[1] + y1;
  }
  
  grid[currPos[0]][currPos[1]] = 1;
 
  
}

function keyPressed(){
  if(keyCode == LEFT_ARROW){
    move(-1,0);
  } else if(keyCode == RIGHT_ARROW){
    move(1,0);
  } else if(keyCode == DOWN_ARROW){
    move(0,1);;
  } else if(keyCode == UP_ARROW){
    move(0,-1);
  }
}

function draw() {
  background(0);
  
  drawEachSquare();
}