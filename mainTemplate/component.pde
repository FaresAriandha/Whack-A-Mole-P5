Boolean isHover = false;
ArrayList<Tikus> mole = new ArrayList<Tikus>();
ArrayList<Tanah> hole = new ArrayList<Tanah>();
String str; 
color hoverColor, txtColor;
float xPos, yPos, txtSize, scaleSize;
int rounded = 0;


class Tikus {
    PImage img;
    float xPos, yPos,hSize,wSize, transisiUp = 20;
    
    Tikus(PImage img, float xPos, float yPos, float hSize, float wSize){ 
      this.img = img;
      this.xPos = xPos;
      this.yPos = yPos;
      this.hSize = hSize;
      this.wSize = wSize;
      //println("test");
      //mole.add(this);
    }
    

    void show() {
      image(this.img, this.xPos, this.yPos, this.hSize, this.wSize);
    };
    
    void transisiMuncul() {
      tint(255,255);
      translate(0, -this.transisiUp);
    }
    
    void transisiDown() {
      tint(255,0);
      translate(0, this.transisiUp);
    }
    
    
}

class Tanah {
    PImage img;
    float xPos, yPos,hSize,wSize;
    
    Tanah(PImage img, float xPos, float yPos, float hSize, float wSize){ 
      this.img = img;
      this.xPos = xPos;
      this.yPos = yPos;
      this.hSize = hSize;
      this.wSize = wSize;
      //hole.add(this);
    }
  

  void show() {
      image(this.img, this.xPos, this.yPos, this.hSize, this.wSize);
    };
}


void componentText(String str, float xPos, float yPos, color txtColor, color hoverColor, float txtSize, float scaleSize) {
  noStroke();
  if (isHover) {
    textSize(scaleSize + txtSize);
    fill(hoverColor);
    if (mousePressed == true && mouseButton == LEFT) {
      txtIsHover = str;
    }
    isHover = false;
  } else {
    textSize(txtSize);
    fill(txtColor);
  }
  //int strWidth = textWidth(text);
  textAlign(CENTER, BOTTOM);

  text(str, xPos, yPos);
}

void componentButton(float xPos, float yPos, float wSize, float hSize, int rounded, color sColor, color hoverColor, int scaleSize) {
  cursor(ARROW);
  rectMode(CENTER);
  float d = dist(xPos, yPos, mouseX, mouseY);
  
  // Event Hover
  if (d < wSize && d < hSize && mouseY > yPos - hSize / 2 && mouseY < yPos + hSize / 2) {
    fill(hoverColor);
    wSize += scaleSize;
    hSize += scaleSize;
    isHover = true;
  } else {
    fill(sColor);
  }
  rect(xPos, yPos, wSize, hSize, rounded);
}
