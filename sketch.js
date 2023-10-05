let pemain1, pemain2
let lapang, pemain,backsound, jump, clap

function preload(){
  lapang = loadImage('lapang.jpg')
  pemain = loadImage('pemain.png')
  backsound = loadSound('backsound.mp3')
  jump = loadSound('jump.mp3')
  clap = loadSound('clap.mp3')
}

function setup() {
  createCanvas(600, 400);
  
  pemain1 = new Pemain(-255, 70, 'pemain')
  pemain2 = new Pemain(-255, height-450, 'pemain')
  backsound.play()
  
}

function draw() {
  image(lapang,0,0,width,height)
  
  pemain2.tampilkan()
  pemain1.tampilkan()
  
  pemain1.cekFinish()
  pemain2.cekFinish()
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    pemain1.maju()
    jump.play()
  }
  else if(keyCode === RIGHT_ARROW){
    pemain2.maju()
    jump.play()
    
  }
}