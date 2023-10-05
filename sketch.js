let pemain1, pemain2
let img, imgpemain;
let sfx, backsound;

function preload(){
  img = 
loadImage('./img/lp.png')
 imgpemain =
img1 = loadImage('/img/1.png')
img2 = loadImage('./img/2.png')
sfx = loadSound('./sound/jump.mp3')
bs = loadSound('./sound/backsound.mp3')
bf = loadSound('./sound/finish.mp3')

}

function setup() {
  createCanvas(640, 400);
   pemain1 = new pemain(10, 220)
   pemain2 = new pemain(10, height-100)
  
   bs.play()
}

function draw() {
  image(img,0,0,width,height);
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  
  pemain1.cekfinish()
  pemain2.cekfinish()
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    pemain1.maju()
    
    sfx.play()
  }
  else if(keyCode === RIGHT_ARROW) {
    pemain2.maju()
    
    sfx.play()
  }
}