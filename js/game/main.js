let txtIsHover;
let namePage = "mainHome";
let xCenter, yCenter;
let theme = "dark",
	bgColor = 128;
let tikus, tanah;
let ukuranTikus = 100;

function preload() {
	tanah = loadImage("../../img/tanah.png");
	tikus = loadImage("../../img/tikus.png");
}

function setup() {
	createCanvas(900, 600);
	imageMode(CENTER);
	changeTheme();
	xCenter = width / 2;
	yCenter = height / 2;
	makeMole();
}

function draw() {
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

