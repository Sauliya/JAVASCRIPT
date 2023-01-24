const size = 300;
const size1 = 200;
const ctx1 = example1.getContext("2d");
ctx1.save();
ctx1.translate(example1.width/2, example1.height/2);
ctx1.fillRect(-size/2,-size/2,size,size);
ctx1.fillStyle = "white";
ctx1.fillRect(-size1/2,-size1/2,size1,size1);
ctx1.restore();
ctx1.fillRect(10,150,40,40);
ctx1.fillRect(100,0,300,300);

const ctx2 = example2.getContext("2d");
ctx2.moveTo(10,10);
ctx2.lineTo(290,90);
ctx2.lineTo(290,10);
ctx2.lineTo(10,90);
ctx2.lineTo(10,10);

ctx2.strokeStyle = "red";

ctx2.moveTo(20,20)
ctx2.lineTo(125,50);
ctx2.lineTo(20,80);
ctx2.closePath();
ctx2.stroke();