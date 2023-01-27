//const size = 300;
//const size1 = 200;
//const ctx = canvas.getContext("2d");
//ctx1.save();
//ctx1.translate(example1.width/2, example1.height/2);
//ctx1.fillRect(-size/2,-size/2,size,size);
//ctx1.fillStyle = "white";
//ctx1.fillRect(-size1/2,-size1/2,size1,size1);
//ctx1.restore();
//ctx1.fillRect(10,150,40,40);
//ctx1.fillRect(100,0,300,300);

//const ctx2 = example2.getContext("2d");
//ctx2.moveTo(10,10);
//ctx2.lineTo(290,90);
//ctx2.lineTo(290,10);
//ctx2.lineTo(10,90);
//ctx2.lineTo(10,10);

//ctx2.strokeStyle = "red";

//ctx2.moveTo(20,20)
//ctx2.lineTo(125,50);
//ctx2.lineTo(20,80);
//ctx2.closePath();
//ctx2.stroke();

//rotating box
//let angle = 0;
//const size = 300;
//const rotationSpeed = 0.01;

//function frame() {
  //  angle += rotationSpeed;

    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    //ctx.save();
    //ctx.beginPath();
    //ctx.translate(canvas.width / 2, canvas.height / 2);
    //ctx.rotate(angle);
    //ctx.rect(-size/2, -size/2, size, size);
    //ctx.stroke();
    //ctx.restore();

    //requestAnimationFrame(frame);
//}

//requestAnimationFrame(frame);
const ctx = canvas.getContext("2d");
let p;
let x = 0;
let path = new Path2D();
ctx.font = "1em monospace";
ctx.textAlign = "right";
ctx.textBaseline = "bottom";
ctx.lineWidth = 0.5;
ctx.strokeStyle = "red";
function frameFPS(ts) {
    const elapsed = ts - p || 0;
    p = ts
    const fps = 1 / (elapsed / 1000);
    x += elapsed * 0.1;
    if(x > canvas.width) {
        x = 0;
        path = new Path2D();
    }
    const y = canvas.height - (canvas.height / 120) * fps; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(`${fps.toFixed(2)} fps`, canvas.width, canvas.height);
    path.lineTo(x, y);
    ctx.stroke(path);
    requestAnimationFrame(frameFPS)
}
requestAnimationFrame(frameFPS)
 
