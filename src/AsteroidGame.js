var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ballRadius = 15;
var recheight = 10;
var recwidth = 43;
var recX = (canvas.width-recwidth)/2;
var recY = (canvas.height-recheight)/2;
var x = canvas.width/2;
var y = canvas.height-30;
var dx =2;
var dy =-2;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 38) {
      upPressed = true;
    }
    else if(e.keyCode ==  40) {
      downPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode == 38) {
      upPressed = false;
    }
    else if(e.keyCode ==  40) {
      downPressed = false;
    }
}


function objectBall(posX,posY) {
  ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}




function objectRectangle() {
ctx.beginPath();
ctx.rect(recX,recY,recwidth,recheight);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();
}



function objectMove() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  objectBall();
  objectBall();
  objectRectangle();


  // for (objectBall = 1; objectBall< 10; objectBall++) {
  //   return objectBall;
  // }


  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
  if(y + dy < ballRadius) {
      dy = -dy;
    }  else if(y + dy > canvas.height-ballRadius) {
      if(x > recX && x < recX + recwidth) {
        dy = -dy;
      if(y > recY && y < recY + recheight) {
        dx = -dx;
      }
      
    
     
    }
    }
    //   // }
    //   // if(y > recY && y < recY + recheight) {
    //   //   dx = -dx;
    //   // }
      

    // if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    //     dy = -dy;
    // }

    // if(x + dx > canvas.width-recwidth || x + dx < recwidth) {
    //     dx = -dx;
    // }
   

 if(rightPressed && recX < canvas.width-recwidth) {
   recX += 10;
 }
  else if(leftPressed && recX > 0) {
    recX -= 10;
  }
 if(upPressed && recY < canvas.width-recheight) {
   recY -= 10;
 }
  else if(downPressed && recY > 0) {
    recY += 10;
  }

  x +=dx;
  y +=dy;

}


setInterval(objectMove, 10);

// function startGame() {
//   myGameArea.start();
//   myGamePiece = new component(32,45,"blue",10,120);


// }

// var myGameArea = {
//   canvas : document.createElement("canvas"),
//   start: function() {
//     this.canvas.width=1700;
//     this.canvas.height =850;
//     this.context = this.canvas.getContext("2d");
//     document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//   }
// }

// function component (width, height, color, x,y) {
// this.width = width;
// this.height = height;
// this.x = x;
// this.y = y;
// ctx = myGameArea.context;
// ctx.fillStyle = color;
// ctx.fillRect(this.x, this.y, this.width, this.height);
// ctx.restore();
// ctx.drawImage(playerImage.posX.posY);

// }

