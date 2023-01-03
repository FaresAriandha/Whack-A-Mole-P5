Boolean isHover = false, naik = false;
ArrayList<Tikus> mole = new ArrayList<Tikus>();
ArrayList<Tanah> hole = new ArrayList<Tanah>();
String str; 
color hoverColor, txtColor;
float xPos, yPos, txtSize, scaleSize;
int rounded = 0;
int i = 0;


class Tikus {
    PImage img;
    float xPos, yPos,hSize,wSize, transisiUp = 36, tmpX, tmpY;
    
    Tikus(PImage img, float xPos, float yPos, float hSize, float wSize){ 
      this.img = img;
      this.xPos = xPos;
      this.tmpX = xPos;
      this.yPos = yPos;
      this.tmpY = yPos;
      this.hSize = hSize;
      this.wSize = wSize;
    }
    

    void show() {
      image(this.img, this.xPos, this.yPos, this.hSize, this.wSize);
    };
    
    void transisiMuncul(int numberOfLevel) {
      if (i == this.transisiUp) {
        naik = true;
        i = 0;
        tint(255, 255);
      } else {
        this.yPos -= numberOfLevel;
      }
      i += numberOfLevel;
      this.show();
    }
    
    void transisiDown(int numberOfLevel) {
      tint(255, 255 - i * 20);
      if (i == this.transisiUp) {
        naik = false;
        i = 0;
        this.xPos = this.tmpX;
        this.yPos = this.tmpY;
        tint(255, 0);
        randomPosition();
      } else {
        this.yPos += numberOfLevel;
      }
      this.show();
      i += numberOfLevel;
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
    yPos += 2;
    fill(hoverColor);
    if (mousePressed && mouseButton == LEFT) {
      txtIsHover = str;
    }
    isHover = false;
  } else {
    textSize(txtSize);
    fill(txtColor);
  }

  textAlign(CENTER, BOTTOM);

  text(str, xPos, yPos);
  
}

void componentButton(float xPos, float yPos, float wSize, float hSize, int rounded, color sColor, color hoverColor, int scaleSize) {
  
  rectMode(CENTER);
  float d = dist(xPos, yPos, mouseX, mouseY);
  
  // Event Hover
  if (d < wSize && d < hSize && mouseY > yPos - hSize / 2 && mouseY < yPos + hSize / 2) {
    fill(hoverColor);
    wSize += scaleSize;
    hSize += scaleSize;
    isHover = true;
    cursor(HAND);
  } else {
    fill(sColor);
  }
  rect(xPos, yPos, wSize, hSize, rounded + 5, rounded + 15, rounded + 5, rounded + 15);
}
