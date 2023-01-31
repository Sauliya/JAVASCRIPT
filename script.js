const ctx = canvas.getContext("2d");
let LeftpaddleX = 10;
let LeftpaddleY = 20;
let RightpaddleX = 600 - 20
let RightpaddleY = 400
const RightpaddleWidth = 10;
const RightpaddleHeight = 150;
const ySpeed = 20;
function drawLeft(){
    ctx.fillStyle = "white";
    ctx.fillRect(LeftpaddleX,LeftpaddleY,RightpaddleWidth,RightpaddleHeight)
    ctx.stroke();
}
function drawRight(){
    ctx.fillStyle = "white";
    ctx.fillRect(RightpaddleX,RightpaddleY,RightpaddleWidth,RightpaddleHeight)
    ctx.stroke();
}
function draw(){
    ctx.fillStyle = "rgb(114, 21, 236)";
    ctx.fillRect(0,0,600,600)
    drawLeft();
    drawRight();
    requestAnimationFrame(draw)
 }
requestAnimationFrame(draw)

window.addEventListener("keydown", ev =>{
    switch(ev.key) {
        case "w":
            LeftpaddleY -=  ySpeed;
            if(LeftpaddleY < 0){
                LeftpaddleY = 0;
            }
            break; 
        case "s":
            LeftpaddleY += ySpeed;
            if(LeftpaddleY > 600 - 150){
                LeftpaddleY = 600 - 150;
            }
            break;
        case "ArrowUp":
            RightpaddleY -= ySpeed
            if(RightpaddleY < 125 - 150){
                RightpaddleY = 0;
            }
            break;
        case "ArrowDown":
            RightpaddleY += ySpeed
            if(RightpaddleY > 600 - 150){
                RightpaddleY = 600 - 150;
            }
            break;
    }
});
