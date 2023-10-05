class Pemain {
  constructor(x,y, pemain){
    this.x = x
    this.y = y
    this.pemain = pemain
    this.loncat = 5
  }
  tampilkan(){
    if(this.pemain === 'pemain')
      image(pemain, this.x, this.y)
    
  }
  maju(){
    this.x += this.loncat
  }
  cekFinish(){
    if(this.x > width-330){
      textSize(50)
      fill('white')
      textAlign(CENTER)
      text('WINNER!!', width/2, height-120)
      noLoop()
      backsound.stop()
      clap.play()
      jump.stop()
    }
  }
}