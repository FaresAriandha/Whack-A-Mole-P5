float strKalimat, strWidth, padding = 10, wLapangan, hLapangan;
String music, level = "easy";
int tikusPositionX = 170;
int tanahPositionX = tikusPositionX;
int tikusPositionY = 90; 
int tanahPositionY = tikusPositionY;
int randomNumberBefore, timePlay = 11;
Boolean finish = false, a, isClick = false, aboutUs = false;
int skor = 0, waktuMain = 10000, waktuTunggu, countDown, startTime;
color shapeColor = #D3A384,
  shapeHoverColor = #BA8B6D,
  TxtColor = #e3e1e1,
  txtHoverColor = 255;
Tikus mRandom; 

void mainHome() {
  background(bgColor);
  cursor(ARROW);
  componentText("Whack A Mole Game", xCenter + 2, 254, 0, 0, 50, 0);
  componentText("Whack A Mole Game", xCenter, 250, #cf900a, #cf900a, 50, 0);

  componentButton(xCenter - 100,yCenter,150,60,5,shapeColor,shapeHoverColor,15);
  componentText("Play", xCenter - 100, yCenter + 15, TxtColor, txtHoverColor, 28, 5);
  componentButton(xCenter + 100,yCenter,150,60,5,shapeColor,shapeHoverColor,15);
  componentText("Settings",xCenter + 100,yCenter + 15,TxtColor,txtHoverColor,28,5);
  componentButton(xCenter,yCenter + 100,150,60,5,shapeColor,shapeHoverColor,15);
  componentText("About Us",xCenter,yCenter + 115,TxtColor,txtHoverColor,28,5);
  if (aboutUs == true) {
    aboutUS();
  }
}

void mainSetting() {
  background(bgColor);
  cursor(ARROW);
  componentText("Settings", xCenter + 2, 184, 0, 0, 50, 0);
  componentText("Settings", xCenter, 180, #cf900a, #cf900a, 50, 0);

  // Set Level
  componentButton(xCenter - 120, yCenter - 30,180,60,5, shapeColor, shapeHoverColor, 18);
  componentText("Change Level",xCenter - 120,yCenter - 15,TxtColor,txtHoverColor,28,4);
  fill(255);
  rect(xCenter - 120, yCenter - 110, 180, 50, 7);
  componentText(level, xCenter - 120, yCenter - 95, 0, 0, 25, 4);
  
  // Set Sound
  componentButton(xCenter + 120,yCenter - 30,180,60,5,shapeColor,shapeHoverColor,18);
  componentText("Music SFX",xCenter + 120,yCenter - 15,TxtColor,txtHoverColor,28,4);
  fill(255);
  rect(xCenter + 120, yCenter - 110, 180, 50, 7);
  componentText(music, xCenter + 120, yCenter - 95, 0, 0, 25, 4);
  
  // Set button back
  componentButton(xCenter,yCenter + 70,180,60,5,shapeColor,shapeHoverColor,18);
  componentText("Back", xCenter, yCenter + 85, TxtColor, txtHoverColor, 28, 4);
  
}

void mainPlay() {
  wLapangan = width * 0.6;
  hLapangan = height * 0.6;
  // Game Background
  noStroke();
  imageMode(CENTER);
  rectMode(CORNER);
  fill(#00bd2f);
  rect(0, 0, width, height / 2);
  fill(#089e2d);
  rect(0, yCenter, width, height / 2);
  
  // Title Game
  componentText("Whack A Mole Game", xCenter + 2, 102, 255, 255, 50, 0);
  componentText("Whack A Mole Game", xCenter, 100, 0, 0, 50, 0);

  // Lahan Tanahnya
  stroke(0);
  strokeWeight(5);
  rectMode(CENTER);
  fill(#964B00);
  rect(xCenter, yCenter, wLapangan, hLapangan);
  

  // Komponen skor
  noStroke();
  fill(255);
  rect(xCenter - 140, height - 70, 130, 50, 10, 50, 10, 50);
  componentText("Skor", xCenter - 160, height - 55, 0, 0, 28, 5);
  componentText(str(skor), xCenter - 105, height - 54, 0, 0, 28, 5);
  
  // Komponen level
  fill(255);
  rect(xCenter + 140, height - 70, 130, 50, 10, 50, 10, 50);
  componentText(level, xCenter + 140, height - 55, 0, 0, 28, 5);
  
  // Komponen waktu
  fill(255);
  rect(xCenter, height - 70, 80, 50, 10, 50, 10, 50);
  componentText(str(countDown), xCenter, height - 55, 0, 0, 28, 5);
  
  if (!finish) {
    upAndDownShow();
  }
  renderHole();
}

void aboutUS() {
  fill(255);
  stroke(0);
  strokeWeight(5);
  rect(xCenter, yCenter, 700, 500, 20);
  componentText("About Game", xCenter, 202, 0, 0, 40, 0);
  componentText("About Game", xCenter, 200, #EDBC9B, #EDBC9B, 40, 0);
  componentText(
    "Whack A Mole adalah game yang dimainkan dengan cara",
    xCenter,
    252,
    0,
    0,
    18,
    0
  );
  componentText(
    "memukul tikus tanah yang muncul dari lubang tertentu.",
    xCenter,
    272,
    0,
    0,
    18,
    0
  );
  componentText(
    "Game ini dibuat dengan menggunakan processing dan p5.js",
    xCenter,
    302,
    0,
    0,
    18,
    0
  );
  // My Team
  componentText("Kelompok 7", xCenter, 362, 0, 0, 30, 0);
  componentText(
    "Alfares Ariandha Nurdin (2107411020)",
    xCenter,
    402,
    0,
    0,
    25,
    0
  );
  componentText("Chaesa Adella Rahma (2107411003)", xCenter, 432, 0, 0, 25, 0);
  componentText("Lisna Agustin (2107411017)", xCenter, 462, 0, 0, 25, 0);
  componentText("Gilang Rianto Utomo (2107411029)", xCenter, 492, 0, 0, 25, 0);

  componentButton(xCenter + 300, 162, 50, 50, 5, 240, 240, 15);
  componentText("X", xCenter + 300, 177, #FF0000, #FF0000, 22, 4);
}

void renderHole() {
  tint(255, 255);
  for(int h = 0; h < hole.size(); h++){
    hole.get(h).show();
  }
}


void changeCursor() {
    if (
    mouseX >= xCenter - wLapangan / 2 &&
    mouseX <= xCenter + wLapangan / 2 &&
    mouseY >= yCenter - hLapangan / 2 &&
    mouseY <= yCenter + hLapangan / 2 &&
    mousePressed
  ) {
    rotate((PI / 180) * 1.3);
    image(palu, mouseX, mouseY, 80, 80);
  } else {
    rotate(0);
    image(palu, mouseX, mouseY, 80, 80);
  }
}


void makeMole() {
  int jumlahTikus = 6;
  for (int t = 0; t < jumlahTikus; t++) {
    if (t > 2) {
      mole.add(new Tikus(tikus, xCenter - tikusPositionX + (t - 3) * tikusPositionX, yCenter + tikusPositionY, 150, 80));
      hole.add(new Tanah(tanah, xCenter - tanahPositionX + (t - 3) * tanahPositionX, yCenter + tanahPositionY, 150, 80));
    } else {
      mole.add(new Tikus(tikus, xCenter - tikusPositionX + t * tikusPositionX, yCenter - tikusPositionY - 10, 150, 80));
      hole.add(new Tanah(tanah, xCenter - tanahPositionX + t * tanahPositionX,yCenter - tanahPositionY,150,80));
    }
    
  }
}

void randomPosition() {
  int r = floor(random(mole.size()));
  if (randomNumberBefore == r) {
    randomPosition();
  }
  randomNumberBefore = r;
  mRandom = mole.get(r);
}

int randomTime(int min, int max) {
  return floor(random(min, max));
}



void upAndDownShow() {
  if (naik) {
    mRandom.transisiDown(numberOfLevel);
  } else {
    if (
      mouseX >= mRandom.xPos - mRandom.wSize / 2 &&
      mouseX <= mRandom.xPos + mRandom.wSize / 2 &&
      mouseY >= mRandom.yPos - mRandom.hSize / 2 &&
      mouseY <= mRandom.yPos + mRandom.hSize / 2 &&
      mousePressed
    ) {
      naik = true;
      bsPukul.play();
      skor++;
    } else {
      mRandom.transisiMuncul(numberOfLevel);
    }
  }
}

void setMusic() {
  if (music == null) {
    music = "On";
  } else if (isClick) {
    if (music == "Off") {
      music = "On";
    } else if (music == "On") {
      music = "Off";
    }
  }
  
  if (music == "On") {
    // Set Play
    bsGame.play();
  } else if (music == "Off") {
    // Set Mute
    bsGame.stop();
  }
  isClick = false;
}

void setLevel(){
  if (level == null) {
    level = "easy";
  } else if (isClick) {
    if (level == "easy") {
      level = "medium";
    } else if (level == "medium") {
      level = "hard";
    } else if (level == "hard") {
      level = "easy";
    }
  }
  
if (level == "easy") {
    numberOfLevel = 1;
  } else if (level == "medium") {
    numberOfLevel = 2;
  } else if (level == "hard") {
    numberOfLevel = 3;
  }
  isClick = false;
}


void mouseClicked() {
  if(txtIsHover != ""){
    bsClick.play();
  }
   switch (txtIsHover) {
    case "Play":
    case "Main Lagi":
      a = true;
      finish = !a;
      namePage = "gamePlay";
      waktuTunggu = 3;
      break;
    case "Settings":
      namePage = "mainSetting";
      break;
    case "Back":
    case "Exit":
    case "X":
      aboutUs = false;
      namePage = "mainHome";
      break;
    case "Change Level":
      isClick = true;
      setLevel();
      break;
    case "Music SFX":
      isClick = true;
      setMusic();
      break;
    case "About Us":
      isClick = true;
      aboutUs = true;
      break;
    default:
      txtIsHover = "";
      break;
  }
  txtIsHover = "";
}

void gamePlay() {
  cursor(ARROW);
  if (waktuTunggu > -1) {
    rundownBeforePlay();
    if (waktuTunggu == 0) {
      countDown = 0;
      startTime = millis()/1000;
      playingTime();
    }
  } else {
    if (a) {
      skor = 0;
      randomPosition();
      a = false;
    }
    if(countDown > 0){
      playingTime();
    }
    mainPlay();
    if (countDown <= 0) {
      finishGame();
      finish = true;
    } else {
      changeCursor();
    }
  }
}

void rundownBeforePlay() {
  noStroke();
  rectMode(CENTER);
  fill(bgColor);
  rect(xCenter, yCenter, width, height);
  fill(0);
  componentText(str(waktuTunggu), xCenter, yCenter, #000000, #000000, 40, 5);
  waktuTunggu = int(waktuTunggu);
  waktuTunggu--;
  delay(1000);
}

void playingTime() {
  int ms = millis()/1000;
  countDown = timePlay - (ms - startTime); 
}

void finishGame() {
  
  // Overlay
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);
  fill(127);
  rect(xCenter, yCenter, 600, 300, 10, 50, 10, 50);
  stroke(0);
  fill(255);
  rect(xCenter, yCenter - 150, 300, 50, 10, 50, 10, 50);
  componentText("Hasil Permainan", xCenter, yCenter - 135, 0, 0, 28, 5);
  fill(255);
  rect(xCenter, yCenter - 30, 200, 100, 10, 50, 10, 50);
  componentText("Skor Akhir", xCenter, yCenter - 35, 0, 0, 28, 5);
  componentText(str(skor), xCenter, yCenter + 5, 0, 0, 28, 5);
  noStroke();

  // Komponen Tombol
  componentButton(xCenter - 100,yCenter + 100,150,60,5,shapeColor,shapeHoverColor,15);
  componentText("Main Lagi",xCenter - 100,yCenter + 115,TxtColor,txtHoverColor,28,5);
  componentButton(xCenter + 100,yCenter + 100,150,60,5,shapeColor,shapeHoverColor,15);
  componentText("Exit",xCenter + 100,yCenter + 115,TxtColor,txtHoverColor,28,5);
}
