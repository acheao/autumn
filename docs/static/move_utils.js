// 以点origin坐标为中心，顺时针转90度，返回该坐标
// take origin as the origin of coordinate,rotate 90 degrees clockwise，return the coordinate
function rotate(origin,point) {
    var pointC = coordinate(point.x-origin.x,point.y-origin.y);
    var pointD = coordinate(-pointC.y,pointC.x);
    var returnPoint = coordinate(pointD.x+origin.x,pointD.y+origin.y);
    return returnPoint;
}

// 以点origin坐标为中心，逆时针转90度，返回该坐标
// take origin as the origin of coordinate,rotate 90 degrees Anti-clockwise,return the coordinate
function retateAntiClockWise(origin,point){
    var pointA = coordinate(point.x-origin.x,point.y-origin.y);
    var pointB = coordinate(pointA.y,-pointA.x);
    var returnPoint = coordinate(pointB.x+origin.x,pointB.y+origin.y);
    return returnPoint;
}

// 以origin为原点，将shape顺时针旋转90度,返回图形坐标数组
// take origin as origin of coordinate rotate 90 degrees clockwise, return the shape array
function rotateShape(origin,shape) {
    var shapeChange = new Array();

    for(var i in shape){
        drawingGreyRect(shape[i]);
    }
    for(var i in shape){
        var z = rotate(origin,shape[i]);
        drawingBlackRect(z);
        shapeChange.push(z);
    }
    return shapeChange;
}

// 以origin为原点，将shape逆时针旋转90度，返回图形坐标数组
// take origin as origin of coordinate rotate 90 degrees Anti-clockwise, return the shape array
function rotateShapeAnticlockWise(origin,shape) {
    var shapeChange = new Array();

    for(var i in shape){
        drawingGreyRect(shape[i]);
    }
    for(var i in shape){
        var z = retateAntiClockWise(origin,shape[i]);
        drawingBlackRect(z);
        shapeChange.push(z);
    }
    return shapeChange;
}


// 移动方块
// move rect
function moveRect(shapeObject,direction) {
    drawingGreyShape(shapeObject.shape);
    switch (direction) {
        case ("left"):
            for(var i in shapeObject.shape){
                shapeObject.shape[i].x = shapeObject.shape[i].x - 1;
            }
            shapeObject.origin.x = shapeObject.origin.x-1;
            break;
        case ("right"):
            for(var i in shapeObject.shape){
                shapeObject.shape[i].x = shapeObject.shape[i].x + 1;
            }
            shapeObject.origin.x = shapeObject.origin.x+1;
            break;
        case ("up"):
            for(var i in shapeObject.shape){
                shapeObject.shape[i].y = shapeObject.shape[i].y - 1;
            }
            shapeObject.origin.y = shapeObject.origin.y-1;
            break;
        case ("down"):
            for(var i in shapeObject.shape){
                shapeObject.shape[i].y = shapeObject.shape[i].y + 1;
            }
            shapeObject.origin.y = shapeObject.origin.y + 1;
            break;
    }
    drawingBLackShape(shapeObject.shape);
    return shapeObject;
}

//方块变换
//change shape
function changeShape(shapeObject) {
    if(shapeObject.type == 0){

        if(shapeObject.status){
            shapeObject.shape = rotateShape(shapeObject.origin,shapeObject.shape);
            shapeObject.status = false;
        }else {
            shapeObject.shape = rotateShapeAnticlockWise(shapeObject.origin,shapeObject.shape);
            shapeObject.status = true;
        }
        return shapeObject;

    }else if(shapeObject.type == 1){
        shapeObject.shape = rotateShape(shapeObject.origin,shapeObject.shape);
        return shapeObject;
    }else{
        return shapeObject;
    }
}
