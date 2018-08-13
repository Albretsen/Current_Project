//Edit "cols" to change board size
var cols = 50;
var rows = cols;

//Alive chance is the likelyhood of a cell being alive when the game is first loaded
//Refresh the game to load a new board
var aliveChance = 0.1;

//"rectSize" is the size of the cells
var rectSize = 15;

//"framerate" is how often the game updates per second. It can also be a decimal number
var framerate = 10;
var paused = false;

//This is a 2 dimensional array. Every cells state is stored in this array.
var grid;

function setup() {
  createCanvas(cols * rectSize + 1, rows * rectSize + 1);
  frameRate(framerate);

  grid = make2DArray();
  populate();
  drawGrid();
}

function draw() {
  print("test");
}

function make2DArray() {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function populate() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (random(1) <= aliveChance) {
        grid[i][j] = 1;
      } else {
        grid[i][j] = 0;
      }
    }
  }
}

function changeState() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (i - 1 < 0 || i + 1 >= cols || j - 1 < 0 || j + 1 >= rows) {

      } else {
        var sum = 0;
        for (var x = -1; x < 2; x++) {
          for (var z = -1; z < 2; z++) {

            var col = (x + i + cols) % cols;
            var row = (z + j + rows) % rows;

            sum += grid[col][row];
            //sum += grid[i+x][j+z];
          }
        }
        sum -= grid[i][j];
        var state = grid[i][j];

        if (state == 0 && sum == 3) {
          grid[i][j] = 1;
        } else if (state == 1 && (sum < 2 || sum > 3)) {
          grid[i][j] = 0;
        } else {
          grid[i][j] = state;
        }
      }
    }
  }
}

function drawGrid() {
  fill(255);
  stroke(0);

  var x = 0;
  var y = 0;

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (grid[i][j] == 1) {
        fill(0);
      }
      rect(x, y, rectSize, rectSize);
      fill(255);
      x += rectSize;
    }
    x = 0;
    y += rectSize;
  }

  changeState();
}

function keyPressed() {
  if (keyCode === ENTER && !paused) {
    paused = true;
  }else{
    paused = false;
  }
}

function draw() {
  if (!paused) {
    drawGrid();
  }
}