let txtIsHover;
let namePage = "mainHome";
let xCenter, yCenter;
let theme = "dark",
	bgColor = "#c6e6fb";
let tikus, tanah, palu, bsGame, bsPukul, bsClick;
let ukuranTikus = 100;
let numberOfLevel = 1;
let naik;
// let canvasElement;

function preload() {
	tanah = loadImage("./assets/tanah.png");
	tikus = loadImage("./assets/tikus.png");
	palu = loadImage("./assets/palu2.png");
	soundFormats("mp3", "ogg");
	bsGame = loadSound("./assets/BGM");
	bsPukul = loadSound("./assets/Pukul2");
	bsClick = loadSound("./assets/Tick");
	// bsPukul.speed(2.0);
}

function setup() {
	createCanvas(900, 600);
	imageMode(CENTER);
	bsGame.loop();
	setLevel();
	setMusic();
	xCenter = width / 2;
	yCenter = height / 2;
	makeMole();
}

function draw() {
	// finish = false;
	// winOrLose();
	switch (namePage) {
		case "mainHome":
			mainHome();
			break;
		case "gamePlay":
			gamePLay();
			break;
		case "mainSetting":
			mainSetting();
		default:
			break;
	}
	// aboutUS();
	// mainPlay();
}
