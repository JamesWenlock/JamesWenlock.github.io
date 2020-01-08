var triangleCanvas = document.getElementById("triangle");
var ctx = triangleCanvas.getContext("2d");
var frameRate = 20;

function TriangleManager(maxNumTriangles, minWidth, maxWidth) {
  this.maxNumTriangles = maxNumTriangles;
  this.minWidth = minWidth;
  this.maxWidth = maxWidth;
  this.arr = [];
  this.update = function() {
    this.clearCanvas();
    for (var i = 0; i < this.arr.length; i++) {
      var thisTri = this.arr[i];
      thisTri.goal = document.body.clientHeight;
      if (thisTri.yPos > thisTri.goal) {
        thisTri.yPos = -thisTri.height * 2;
        thisTri.curReps = thisTri.curReps + 1;
        if (thisTri.curReps == thisTri.maxReps) {
           this.arr[i] = null;
           thisTri = null;
           this.arr[i] = this.generateTriangle();
           thisTri = this.arr[i];
        }
      }
      thisTri.yPos = thisTri.yPos + thisTri.speed;
      thisTri.draw();       
    }
  }
  this.generateTriangle = function() {
    var xPos = Math.random() * 0.95;
    var width = 100;
    var height = 100;
    var scale = (Math.random() * (this.maxWidth - this.minWidth)) + this.minWidth;    
    var yPos = -height * 2;    
    var maxReps = Math.round(Math.random() * 4 + 1);
    var goal = document.body.clientHeight;
    return new Triangle(xPos, yPos, width, height, scale, maxReps, goal);      
  }
  this.clearCanvas = function() {
    ctx.clearRect(0, 0, triangleCanvas.width, triangleCanvas.height);     
    triangleCanvas.width = document.body.clientWidth;
    triangleCanvas.height = document.body.clientHeight * 1.1;    
  }
  this.makeTriangles = function() {
    for (var i = 0; i < this.maxNumTriangles; i++) {
      this.arr.push(this.generateTriangle());   
    } 
    console.log("triangles made")
  }
}

function Triangle(xPos, yPos, width, height, scale, maxReps, goal) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.width = width;
  this.height = height;
  this.scale = scale;
  this.curReps = 0;
  this.maxReps = maxReps;
  this.speed = 0.1 / scale;
  this.goal = goal;
  this.draw = function() {
    var xStart = Number(document.body.clientWidth * this.xPos);
    var yStart = (goal - this.yPos);
    var width = this.width * scale;
    var height = this.height * scale;  
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStart + (width * 0.5), yStart - height);
    ctx.lineTo(xStart + width, yStart);
    ctx.lineTo(xStart, yStart);
    ctx.closePath();
    ctx.strokeStyle = "#ffff00";
    ctx.stroke();      
  }
}

window.onload = function() {
  var triangleManager = new TriangleManager(10, 0.2, 0.6);
  triangleManager.makeTriangles();

  window.setInterval(
    function() {
      triangleManager.update();
    },
    frameRate
  )
};
