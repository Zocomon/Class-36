var ball,database,position1;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
var ballPosition = database.ref('Ball/Position');
ballPosition.on("value",readPosition);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}


function readPosition(ballPosInDb){
    position1 = ballPosInDb.val();
    console.log(position1);
    ball.x = position1.A;
ball.y = position1.B;
}

function writePosition(x,y){
    database.ref('Ball/Position').set(
        {
        'A':position1.A + x,
        'B':position1.B + y
        }
        )
}






































          