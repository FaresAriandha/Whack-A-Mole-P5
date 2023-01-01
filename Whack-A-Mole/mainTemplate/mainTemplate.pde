String txtIsHover;
String namePage = "mainHome";
float xCenter, yCenter;
String theme = "dark";
float bgColor = 128;
PImage tikus, tanah;
float ukuranTikus = 100;

void preload() {
  tanah = loadImage("assets/tanah.png");
  tikus = loadImage("assets/tikus.png");
}

void setup() {
  size(900, 600);
  imageMode(CENTER);
  changeTheme();
  xCenter = width / 2;
  yCenter = height / 2;
  makeMole();
}

void draw() {
  switch (namePage) {
    case "mainHome":
      mainHome();
      break;
    case "mainPlay":
      mainPlay();
      break;
    case "mainSetting":
      mainSetting();
    default:
      break;
  }
}
