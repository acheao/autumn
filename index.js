//取得cancas
var c = document.getElementById("tetrisCanvas");
var canvas = c.getContext("2d");
c.height = 600;
c.width = 400;
$("#tetris").width();
$("#tetris").height();
drawingBackgroud();

var blackRectArea = new Array();


var moveRectArea = produceShape(coordinate(3,-1));


$(document).keyup(function (event) {
    switch (event.keyCode){
        case 32:
            if(checkBoundary(moveRectArea)){
                changeShape(moveRectArea);
            }
            break;
        case 37:
            if(!judgeLeftBorder(moveRectArea)){
                moveRect(moveRectArea,"left");
            }
            break;
        case 38:
            moveRect(moveRectArea,"up");
            break;
        case 39:
            if(!judgeRightBorder(moveRectArea)){
                moveRect(moveRectArea,"right");
            }
            break;
        case 40:
            if(checkBoundary(moveRectArea)){
                moveRect(moveRectArea,"down");
            }
            break;
    }
})



var i = 0;
var Timer = setInterval(function () {
    i = i+1;

    moveRect(moveRectArea,"down");
    if(!checkBoundary(moveRectArea)){
        clearInterval(Timer);
    }

},1000);
