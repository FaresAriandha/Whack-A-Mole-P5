let txtIsHover;
let namePage = "mainHome";
let xCenter, yCenter;
let theme = "dark",
	bgColor = 128;
let tikus, tanah, palu, bsGame, bsPukul;
let ukuranTikus = 100;
let numberOfLevel = 1;
// let canvasElement;

function preload() {
	tanah = loadImage("../../assets/tanah.png");
	tikus = loadImage("../../assets/tikus.png");
	palu = loadImage("../../assets/palu.png");
	bsGame = loadSound("../../assets/BGM.mp3");
	bsPukul = loadSound("../../assets/Pukul.mp3");
}

function setup() {
	createCanvas(900, 600);
	imageMode(CENTER);
	setLevel();
	setMusic();
	xCenter = width / 2;
	yCenter = height / 2;
	makeMole();
}

function draw() {
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
}
