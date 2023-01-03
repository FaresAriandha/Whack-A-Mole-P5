import processing.sound.*;
SoundFile bsGame;
SoundFile bsPukul;
SoundFile bsClick;
String txtIsHover;
String namePage = "mainHome";
float xCenter, yCenter;
float bgColor = 128;
PImage tikus, tanah, palu;
float ukuranTikus = 100;
int numberOfLevel = 1;

void setup() {
  size(1080, 720);
  imageMode(CENTER);
  //String path = ""
  tanah = loadImage("assets/tanah.png");
  tikus = loadImage("assets/tikus.png");
  palu = loadImage("assets/palu.png");
  bsGame = new SoundFile(this, "assets/BGM.mp3");
  bsPukul = new SoundFile(this, "assets/Pukul.mp3");
  bsClick = new SoundFile(this, "assets/Tick.mp3");
  setLevel();
  setMusic();
  xCenter = width / 2;
  yCenter = height / 2;
  makeMole();
}

void draw() {
  switch (namePage) {
    case "mainHome":
      mainHome();
      break;
    case "gamePlay":
      gamePlay();
      break;
    case "mainSetting":
      mainSetting();
    default:
      break;
  }
  //playingTime();
  //image(tanah, 200, 200);
}
