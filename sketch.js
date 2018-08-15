var cols = 40;
var rows = cols;

var rectSize = 15;

var cells;
var next;

//course = new Object();
var alive;

var paused = false;

var cellCount = 0;
var genCount = 0;
var bornCount = 0;
var deathCount = 0;

function Cell(alive) {
  this.alive = 0;
}

function setup() {
  createCanvas(rows * rectSize + 1, cols * rectSize + 1 + 100);
  //createCanvas(1000, 1000);

  cells = make2DArray();
  next = make2DArray();
  drawGrid();
}

function mouseClicked() {
  if (cells[floor(map(mouseY, 100, height, 0, rows))][floor(map(mouseX, 0, width, 0, cols))].alive == 0) {
    cells[floor(map(mouseY, 100, height, 0, rows))][floor(map(mouseX, 0, width, 0, cols))].alive = 1;
    bornCount++;
  }
}

function mouseDragged() {
  if (cells[floor(map(mouseY, 100, height, 0, rows))][floor(map(mouseX, 0, width, 0, cols))].alive == 0) {
    cells[floor(map(mouseY, 100, height, 0, rows))][floor(map(mouseX, 0, width, 0, cols))].alive = 1;
    bornCount++;
  }
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    print("test");
  }
}

setInterval(function() {
  if (!paused) {
    checkStates();
    genCount++;
  }
}, 500);

function checkStates() {
  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {

      var neighbors = 0;

      for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {

          var col = (x + i + cols) % cols;
          var row = (y + j + rows) % rows;

          //neighbors += cells[x + i][y + j].alive;
          neighbors += cells[col][row].alive;
        }
      }

      neighbors -= cells[x][y].alive;

      if ((cells[x][y].alive == 1) && (neighbors < 2)) {
        next[x][y].alive = 0;
        deathCount++;
      } else if ((cells[x][y].alive == 1) && (neighbors > 3)) {
        next[x][y].alive = 0;
        deathCount++;
      } else if ((cells[x][y].alive == 0) && (neighbors == 3)) {
        next[x][y].alive = 1;
        bornCount++;
      } else {
        next[x][y].alive = cells[x][y].alive;
      }

    }
  }

  var temp = cells;
  cells = next;
  next = temp;
}

function drawGrid() {
  var x = 0;
  var y = 100;
  cellCount = 0;
  for (var j = 0; j < rows; j++) {
    for (var z = 0; z < cols; z++) {

      if (cells[j][z].alive) {
        cellCount++;
        fill(0);
      } else {
        fill(255);
      }

      rect(x, y, rectSize, rectSize);
      x += rectSize;
    }
    x = 0;
    y += rectSize;
  }

}

function make2DArray() {
  var arr = new Array(cols);

  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }

  for (var j = 0; j < cols; j++) {
    for (var z = 0; z < rows; z++) {
      if (i == 0 || z == 0 || i == cols - 1 || z == rows - 1) {
        arr[j][z] = new Cell(0);
      } else {
        arr[j][z] = new Cell(0);
      }
    }
  }

  return arr;
}

function keyPressed() {
  if (keyCode === ENTER && !paused) {
    paused = true;
  } else {
    paused = false;
  }
}

function draw() {
  background(255);
  drawGrid();

  textSize(32);
  fill(0, 102, 153);

  if (paused) {
    text('Paused', width / 2 - 60, 80);
  }

  textSize(16);
  text('Cells: ' + cellCount, 10, 20);
  text('Generation: ' + genCount, 10, 40);

  text('Cells born: ' + bornCount, 150, 20);
  text('Cells died: ' + deathCount, 150, 40);
}