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
  componentButton(xCenter,yCenter - 20,100,50,5,shapeColor,shapeHoverColor,15);
  componentText("Play", xCenter, yCenter - 20, TxtColor, txtHoverColor, 20, 5);
  componentButton(xCenter,yCenter + 60,100,50,5,shapeColor,shapeHoverColor,15);
  componentText("Settings",xCenter,yCenter + 60,TxtColor,txtHoverColor,20,5);
}

void mainSetting() {
  background(bgColor);
  componentButton(xCenter,yCenter - 20,150,50,5,shapeColor,shapeHoverColor,18);
  componentText("Change Color",xCenter,yCenter - 20,txtColor,txtHoverColor,20,4);
  componentButton(xCenter,yCenter + 60,100,50,5,shapeColor,shapeHoverColor,15);
  componentText("Back", xCenter, yCenter + 60, txtColor, txtHoverColor, 20, 5);
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

  // Title Game
  componentText("Whack A Mole Game", xCenter + 2, 52, 255, 255, 50, 0);
  componentText("Whack A Mole Game", xCenter, 50, 0, 0, 50, 0);

  // Lahan Tanahnya
  stroke(0);
  rectMode(CENTER);
  fill(#964B00);
  rect(xCenter, yCenter, wLapangan, hLapangan);

  // Button Back
  noStroke();
  componentButton(xCenter + 150,height - 50,100,50,5,shapeColor,shapeHoverColor,10);
  componentText("Exit",xCenter + 150,height - 50,txtColor,txtHoverColor,20,5);
  componentButton(xCenter - 150,height - 50,100,50,5,shapeColor,shapeHoverColor,10);
  componentText("Reset",xCenter - 150,height - 50,txtColor,txtHoverColor,20,5);
  componentButton(xCenter,height - 50,100,50,5,shapeColor,shapeHoverColor,10);
  componentText("Main", xCenter, height - 50, txtColor, txtHoverColor, 20, 5);

  // Komponen skor dan waktu
  componentText("Skor " + skor, xCenter - 50, yCenter - 200, 255, 255, 30, 5);

  renderMoleAndHole();
  // noLoop();
  if (finish) {
    showMole();
  }
  // noLoop();
  // Gambar Tanahnya
  
}

void makeMole() {
  int jumlahTikus = 6;
  Tikus a;
  Tanah b;
  for (int t = 0; t < jumlahTikus; t++) {
    if (t > 2) {
      a = new Tikus(tikus,xCenter - tikusPositionX + (t - 3) * tikusPositionX, yCenter + tikusPositionY, 150, 80);
      b = new Tanah(tanah,xCenter - tanahPositionX + (t - 3) * tanahPositionX, yCenter + tanahPositionY, 150, 80);
    } else {
      a = new Tikus(tikus,xCenter - tikusPositionX + t * tikusPositionX, yCenter - tikusPositionY, 150, 80);
      b = new Tanah(tanah,xCenter - tanahPositionX + t * tanahPositionX,yCenter - tanahPositionY,150,80);
    }
  }
}

void renderMoleAndHole() {
  tint(255, 255);
  for(int h = 0; h < hole.size(); h++){
    hole.get(h).show();
  }
}

int randomPosition() {
  int r = floor(random(mole.size()));
  if (randomNumberBefore == r) {
    randomPosition();
  }
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
  delay(wRandom);
  mRandom.transisiDown();
  mRandom.show();
  
  noLoop();
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
      shapeHoverColor = "skyblue";
      txtColor = "#d4593d";
      txtHoverColor = "green";
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
