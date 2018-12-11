//随机产生形方块
//Randomly generated shape

function produceShape(initPoint) {
    var shapeObject = new Object;
    var shapeNum = Math.floor(Math.random()*7);
    shapeNum = 0;
    switch(shapeNum){
        case 0:
            var zShape = new Array();
            zShape.push(initPoint);
            zShape.push(coordinate(initPoint.x+1,initPoint.y));
            zShape.push(coordinate(initPoint.x+1,initPoint.y+1));
            zShape.push(coordinate(initPoint.x+2,initPoint.y+1));
            shapeObject.shape = zShape;
            shapeObject.type = 0;
            shapeObject.origin = coordinate(initPoint.x+1,initPoint.y+1);
            shapeObject.status = true;
            return shapeObject;
            break;
        case 1:
            var againstZShape = new Array();
            againstZShape.push(coordinate(initPoint.x,initPoint.y+1));
            againstZShape.push(coordinate(initPoint.x+1,initPoint.y+1));
            againstZShape.push(coordinate(initPoint.x+1,initPoint.y));
            againstZShape.push(coordinate(initPoint.x+2,initPoint.y));
            shapeObject.shape = againstZShape;
            shapeObject.type = 0;
            shapeObject.origin = coordinate(initPoint.x+1,initPoint.y+1);
            shapeObject.status = true;
            return shapeObject;
            break;
        case 2:
            var mountainShape = new Array();
            mountainShape.push(coordinate(initPoint.x,initPoint.y+1));
            mountainShape.push(coordinate(initPoint.x+1,initPoint.y));
            mountainShape.push(coordinate(initPoint.x+1,initPoint.y+1));
            mountainShape.push(coordinate(initPoint.x+2,initPoint.y+1));
            shapeObject.shape = mountainShape;
            shapeObject.type = 1;
            shapeObject.origin = coordinate(initPoint.x+1,initPoint.y+1);
            shapeObject.status = true;
            return shapeObject;
            break;
        case 3:
            var squareShape = new Array();
            squareShape.push(initPoint);
            squareShape.push(coordinate(initPoint.x+1,initPoint.y));
            squareShape.push(coordinate(initPoint.x,initPoint.y+1));
            squareShape.push(coordinate(initPoint.x+1,initPoint.y+1));
            shapeObject.shape = squareShape;
            shapeObject.type = 2;
            shapeObject.origin = coordinate(0,0);
            shapeObject.status = true;
            return shapeObject;
            break;
        case 4:
            var LShape = new Array();
            LShape.push(initPoint);
            LShape.push(coordinate(initPoint.x,initPoint.y+1));
            LShape.push(coordinate(initPoint.x,initPoint.y+2));
            LShape.push(coordinate(initPoint.x+1,initPoint.y+2));
            shapeObject.shape = LShape;
            shapeObject.type = 1;
            shapeObject.origin = coordinate(initPoint.x,initPoint.y+1);
            shapeObject.status = true;
            return shapeObject;
            break;
        case 5:
            var againstLShape = new Array();
            againstLShape.push(coordinate(initPoint.x,initPoint.y+2));
            againstLShape.push(coordinate(initPoint.x+1,initPoint.y));
            againstLShape.push(coordinate(initPoint.x+1,initPoint.y+1));
            againstLShape.push(coordinate(initPoint.x+1,initPoint.y+2));
            shapeObject.shape = againstLShape;
            shapeObject.type = 1;
            shapeObject.origin = coordinate(initPoint.x+1,initPoint.y+1);
            shapeObject.status = true;
            return shapeObject;
            break;
        case 6:
            var barShape = new Array();
            barShape.push(initPoint);
            barShape.push(coordinate(initPoint.x+1,initPoint.y));
            barShape.push(coordinate(initPoint.x+2,initPoint.y));
            barShape.push(coordinate(initPoint.x+3,initPoint.y));
            shapeObject.shape = barShape;
            shapeObject.type = 0;
            shapeObject.origin = coordinate(initPoint.x+1,initPoint.y);
            shapeObject.status = true;
            return shapeObject;
            break;
    }

}
