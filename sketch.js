var database;
var lines = [];
var dbLines = [];

function setup(){
    createCanvas(displayWidth, displayHeight);

    background(255);

    database = firebase.database();

    readData();
}

function mouseDragged(){
    var point = {
        x: mouseX,
        y: mouseY,
        x1: pmouseX,
        y1: pmouseY
    }
    lines.push(point);
    var drawingRef = database.ref("drawing");
    drawingRef.set({
        d: lines,
    });
}

function draw(){
    for (var i of dbLines) {
        //stroke(i.stroke_color);
        //strokeWeight(i.stroke_weight);
        line(i.x, i.y, i.x1, i.y1);
    }
}


function readData() {
    var query = database.ref("drawing/").on("value", (data) => {
      dbLines = data.val().d;
    });
  }
