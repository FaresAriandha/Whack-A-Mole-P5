float strKalimat, strWidth, padding = 10, wLapangan, hLapangan;
String music, level = "normal";
int tikusPositionX = 170;
int tanahPositionX = tikusPositionX;
int tikusPositionY = 90; 
int tanahPositionY = tikusPositionY;
int randomNumberBefore, timePlay = 10;
Boolean finish = false, a, isClick = false;
int skor = 0, waktuMain = 10000, waktuTunggu;
color shapeColor = #fccc47,
  shapeHoverColor = #ffc117,
  TxtColor = #808080,
  txtHoverColor = 0;
Tikus mRandom; 

void mainHome() {
  background(bgColor);
  componentButton(xCenter - 100,yCenter,150,60,5,shapeColor,shapeHoverColor,15);
  componentText("Play", xCenter - 100, yCenter + 15, TxtColor, txtHoverColor, 28, 5);
  componentButton(xCenter + 100,yCenter,150,60,5,shapeColor,shapeHoverColor,15);
  componentText("Settings",xCenter + 100,yCenter + 15,TxtColor,txtHoverColor,28,5);
}

void mainSetting() {
  background(bgColor);
  
  // Set Level
  componentButton(xCenter - 120, yCenter - 30,180,60,5, shapeColor, shapeHoverColor, 18);
  componentText("Change Level",xCenter - 120,yCenter - 15,TxtColor,txtHoverColor,28,4);
  fill(255);
  rect(xCenter - 120, yCenter - 90, 100, 30, 7);
  componentText(level, xCenter - 120, yCenter - 75, 0, 0, 20, 4);
  
  // Set Sound
  componentButton(xCenter + 120,yCenter - 30,180,60,5,shapeColor,shapeHoverColor,18);
  componentText("Music SFX",xCenter + 120,yCenter - 15,TxtColor,txtHoverColor,28,4);
  fill(255);
  rect(xCenter + 120, yCenter - 90, 100, 30, 7);
  componentText(music, xCenter + 120, yCenter - 75, 0, 0, 20, 4);
  
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
  componentText(str(timePlay), xCenter, height - 55, 0, 0, 28, 5);
  
  if (!finish) {
    upAndDownShow();
  }
  renderHole();
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

void renderHole() {
  tint(255, 255);
  for(int h = 0; h < hole.size(); h++){
    hole.get(h).show();
  }
}

void randomPosition() {
  int r = floor(random(mole.size()));
  if (randomNumberBefore == r) {
    randomPosition();
  }
  randomNumberBefore = r;
  mRandom = mole.get(r);
  print(mRandom);
}

int randomTime(int min, int max) {
  return floor(random(min, max));
}

void upAndDownShow() {
  if (naik) {
    mRandom.transisiDown();
  } else {
    if (
      mouseX >= mRandom.xPos - mRandom.wSize / 2 &&
      mouseX <= mRandom.xPos + mRandom.wSize / 2 &&
      mouseY >= mRandom.yPos - mRandom.hSize / 2 &&
      mouseY <= mRandom.yPos + mRandom.hSize / 2
    ) {
      naik = true;
      skor++;
      bsPukul.play();
    } else {
      mRandom.transisiMuncul();
      bsPukul.stop();
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
    level = "normal";
  } else if (isClick) {
    if (level == "normal") {
      level = "medium";
    } else if (level == "medium") {
      level = "hard";
    } else if (level == "hard") {
      level = "normal";
    }
  }
  
if (level == "normal") {
    numberOfLevel = 1;
  } else if (level == "medium") {
    numberOfLevel = 2;
  } else if (level == "hard") {
    numberOfLevel = 3;
  }
  isClick = false;
}


void mouseClicked() {
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
    default:
      txtIsHover = "";
      break;
  }
  txtIsHover = "";
}

void gamePlay() {
  if (waktuTunggu > -1) {
    rundownBeforePlay();
    if (waktuTunggu == 0) {
      timePlay = 11;
      //playingTime();
    }
  } else {
    if (a) {
      skor = 0;
      randomPosition();
      a = false;
    }
    cursor(ARROW);
    mainPlay();
    if (skor == 10) {
      winOrLose();
      finish = true;
      //clearInterval(intervalTime);
    } else {
      changeCursor();
    }
  }
}

void rundownBeforePlay() {
  noStroke();
  rectMode(CENTER);
  fill(0, 0, 255);
  rect(xCenter, yCenter, width, height);
  fill(0);
  //textStyle(BOLD);
  componentText(str(waktuTunggu), xCenter, yCenter, #000000, #000000, 40, 5);
  waktuTunggu = int(waktuTunggu);
  waktuTunggu--;
  // console.log(waktuTunggu);
  delay(1000);
}

//void playingTime() {
//  intervalTime = setInterval(() => {
//    timePlay--;
//  }, 1000);
//}

void winOrLose() {
  // overlay
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

void changeCursor() {
  if (
    mouseX >= xCenter - wLapangan / 2 &&
    mouseX <= xCenter + wLapangan / 2 &&
    mouseY >= yCenter - hLapangan / 2 &&
    mouseY <= yCenter + hLapangan / 2
  ) {
    image(palu, mouseX, mouseY, 65, 65);
  }
}

// Sleep Function
//void delaySleep(milliseconds) {
//  var start = new Date().getTime();
//  for (var i = 0; i < 1e7; i++) {
//    if (new Date().getTime() - start > milliseconds) {
//      break;
//    }
//  }
//}
