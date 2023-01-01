float strKalimat, strWidth, padding = 10;
String chTheme = theme;
int tikusPositionX = 170;
int tanahPositionX = tikusPositionX;
int tikusPositionY = 80; 
int tanahPositionY = tikusPositionY;
int randomNumberBefore;
Boolean finish = false;
int skor = 0, waktuMain = 10000;
color shapeColor, shapeHoverColor, TxtColor, txtHoverColor;

void mainHome() {
  background(bgColor);
  componentButton(xCenter - 100,yCenter,150,60,5,shapeColor,shapeHoverColor,15);
  componentText("Play", xCenter - 100, yCenter + 15, txtColor, txtHoverColor, 28, 5);
  componentButton(xCenter + 100,yCenter,150,60,5,shapeColor,shapeHoverColor,15);
  componentText("Settings",xCenter + 100,yCenter + 15,txtColor,txtHoverColor,28,5);
}

void mainSetting() {
  background(bgColor);
  componentButton(xCenter,yCenter - 20,180,60,5,shapeColor,shapeHoverColor,18);
  componentText("Change Color",xCenter,yCenter,txtColor,txtHoverColor,28,4);
  componentButton(xCenter,yCenter + 60,100,60,5,shapeColor,shapeHoverColor,15);
  componentText("Back", xCenter, yCenter + 80, txtColor, txtHoverColor, 28, 5);
}

void mainPlay() {
  float wLapangan = width * 0.6;
  float hLapangan = height * 0.6;
  // Game Background
  noStroke();
  rectMode(CORNER);
  fill(#00bd2f);
  rect(0, 0, width, height / 2);
  fill(#089e2d);
  rect(0, yCenter, width, height / 2);

  // Lahan Tanahnya
  stroke(0);
  rectMode(CENTER);
  fill(#964B00);
  rect(xCenter, yCenter, wLapangan, hLapangan);
  
  
  pushMatrix();
  // Title Game
  componentText("Whack A Mole Game", xCenter + 2, 102, 255, 255, 50, 0);
  componentText("Whack A Mole Game", xCenter, 100, 0, 0, 50, 0);
  
  

  // Button Back
  noStroke();
  componentButton(xCenter + 180,height - 50,150,60,5,shapeColor,shapeHoverColor,10);
  componentText("Exit",xCenter + 180,height - 30,txtColor,txtHoverColor,28,5);
  componentButton(xCenter - 180,height - 50,150,60,5,shapeColor,shapeHoverColor,10);
  componentText("Main",xCenter - 180,height - 30,txtColor,txtHoverColor,28,5);
  componentButton(xCenter,height - 50,150,60,5,shapeColor,shapeHoverColor,10);
  componentText("Reset", xCenter, height - 30, txtColor, txtHoverColor, 28, 5);

  // Komponen skor dan waktu
  componentText("Skor " + skor, xCenter - 50, yCenter - 200, 255, 255, 30, 5);
  popMatrix();
  
  pushMatrix();
  renderHole();
  // noLoop();
  popMatrix();
  // noLoop();
  // Gambar Tanahnya
  pushMatrix();
  if (finish) {
    showMole();
  }
  popMatrix();
}

void makeMole() {
  int jumlahTikus = 6;
  for (int t = 0; t < jumlahTikus; t++) {
    if (t > 2) {
      mole.add(new Tikus(tikus, xCenter - tikusPositionX + (t - 3) * tikusPositionX, yCenter + tikusPositionY, 150, 80));
      hole.add(new Tanah(tanah, xCenter - tanahPositionX + (t - 3) * tanahPositionX, yCenter + tanahPositionY, 150, 80));
    } else {
      mole.add(new Tikus(tikus, xCenter - tikusPositionX + t * tikusPositionX, yCenter - tikusPositionY, 150, 80));
      hole.add(new Tanah(tanah, xCenter - tanahPositionX + t * tanahPositionX,yCenter - tanahPositionY,150,80));
    }
    
  }
}

void renderHole() {
  tint(255, 255);
  for(int h = 0; h < hole.size(); h++){
    hole.get(h).show();
  }
}

int randomPosition() {
  int r = floor(random(mole.size()));
  //println(r);
  if (randomNumberBefore == r) {
    //println("sama");
    randomPosition();
  }
  //println(r);
  randomNumberBefore = r;
  return r;
}

int randomTime(int min, int max) {
  return floor(random(min, max));
}

void showMole() {
  Tikus mRandom = mole.get(randomPosition());
  int wRandom = randomTime(500, 1000);
  mRandom.transisiMuncul();
  mRandom.show();
  //noLoop();
  //delay(wRandom);  
  //loop();
  mRandom.transisiDown();
  mRandom.show();
}

void changeTheme() {
  if (theme == "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  switch (theme) {
    case "light":
      bgColor = 128;
      shapeColor = #fccc47;
      shapeHoverColor = #ffc117;
      txtColor = 128;
      txtHoverColor = 0;
      break;
    case "dark":
      bgColor = 0;
      shapeColor = #1e50f7;
      shapeHoverColor = #87CEEB;
      txtColor = #d4593d;
      txtHoverColor = #00FF00;
    default:
      break;
  }
}

void resetWhenChangePage() {
  cursor(ARROW);
}

void mouseClicked() {
  switch (txtIsHover) {
    case "Play":
      namePage = "mainPlay";
      break;
    case "Settings":
      namePage = "mainSetting";
      break;
    case "Back":
    case "Exit":
      namePage = "mainHome";
      break;
    case "Change Color":
      changeTheme();
      break;
    case "Main":
      finish = true;
      break;
    case "Reset":
      finish = false;
      break;
    default:
      break;
  }
}
