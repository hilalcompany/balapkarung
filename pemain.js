class pemain {
  constructor(x, y, warna) {
    this.d = 50;
    this.x = x;
    this.y = y;
    this.warna = color(warna);
    this.loncat = 7;
  }

  tampilkan() {
    image(img1, this.x, this.y);
    image(img2, this.x, this.y);
  }

  maju() {
    this.x += this.loncat;
  }
  finish() {
    if (this.x > width) {
      fill(255);
      stroke(0);
      strokeWeight(5);
      textFont("Comic Sans MS");
      textSize(150);
      textAlign(CENTER);
      text("finish", width / 2, height / 2);
      noLoop()
      bs.stop()
      bf.play()
    }
  }
}
 