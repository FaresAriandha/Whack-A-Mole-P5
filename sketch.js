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
	// mainPlay();
}
