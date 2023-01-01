String txtIsHover;
String namePage = "mainHome";
float xCenter, yCenter;
String theme = "dark";
float bgColor = 128;
PImage tikus, tanah, palu;
float ukuranTikus = 100;

void setup() {
  size(1080, 720);
  imageMode(CENTER);
  //String path = ""
  tanah = loadImage("assets/tanah.png");
  tikus = loadImage("assets/tikus.png");
  palu = loadImage("assets/palu.png");
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
  //image(tanah, 200, 200);
}
