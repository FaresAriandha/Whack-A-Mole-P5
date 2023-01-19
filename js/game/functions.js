let str,
	strWidth,
	padding = 10;
let tikusPositionX = (tanahPositionX = 170);
let tikusPositionY = 70;
let tanahPositionY = 80;
let randomNumberBefore,
	finish,
	skor = 0,
	waktuMain = 10000;
let wLapangan, hLapangan;
let a, mRandom, waktuTunggu;
let shapeColor = "#D3A384",
	shapeHoverColor = "#BA8B6D",
	txtColor = "#e3e1e1",
	txtHoverColor = "255";
let level, isClick, music, timePlay;
let intervalTime, aboutUs;

function mainHome() {
	background(bgColor);
	cursor(ARROW);
	componentText("Whack A Mole Game", xCenter + 2, 204, 0, 0, 50, 0);
	componentText("Whack A Mole Game", xCenter, 200, "#EDBC9B", "#EDBC9B", 50, 0);
	componentButton(
		xCenter - 100,
		yCenter,
		150,
		60,
		5,
		shapeColor,
		shapeHoverColor,
		15
	);
	componentText("Play", xCenter - 100, yCenter, txtColor, txtHoverColor, 22, 4);
	componentButton(
		xCenter + 100,
		yCenter,
		150,
		60,
		5,
		shapeColor,
		shapeHoverColor,
		15
	);
	componentText(
		"Settings",
		xCenter + 100,
		yCenter,
		txtColor,
		txtHoverColor,
		22,
		4
	);
	componentButton(
		xCenter,
		yCenter + 100,
		150,
		60,
		5,
		shapeColor,
		shapeHoverColor,
		15
	);
	componentText(
		"About Us",
		xCenter,
		yCenter + 100,
		txtColor,
		txtHoverColor,
		22,
		4
	);
	if (aboutUs == true) {
		aboutUS();
	}
}

function mainSetting() {
	background(bgColor);
	cursor(ARROW);
	componentText("Settings", xCenter + 2, 154, 0, 0, 50, 0);
	componentText("Settings", xCenter, 150, "#EDBC9B", "#EDBC9B", 50, 0);

	// Button Change Level
	componentButton(
		xCenter - 100,
		yCenter + 20,
		150,
		50,
		5,
		shapeColor,
		shapeHoverColor,
		18
	);
	componentText(
		"Change Level",
		xCenter - 100,
		yCenter + 20,
		txtColor,
		txtHoverColor,
		20,
		4
	);
	fill(255);
	rect(xCenter - 100, yCenter - 60, 150, 50, 7);
	textStyle(BOLD);
	componentText(level, xCenter - 100, yCenter - 60, 0, 0, 20, 4);

	// Button Sound
	textStyle(NORMAL);
	componentButton(
		xCenter + 100,
		yCenter + 20,
		150,
		50,
		5,
		shapeColor,
		shapeHoverColor,
		18
	);
	componentText(
		"Music SFX",
		xCenter + 100,
		yCenter + 20,
		txtColor,
		txtHoverColor,
		20,
		4
	);
	fill(255);
	rect(xCenter + 100, yCenter - 60, 150, 50, 7);
	textStyle(BOLD);
	componentText(music, xCenter + 100, yCenter - 60, 0, 0, 23, 4);

	// Button Back
	textStyle(NORMAL);
	componentButton(
		xCenter,
		yCenter + 120,
		100,
		50,
		5,
		shapeColor,
		shapeHoverColor,
		15
	);
	componentText("Back", xCenter, yCenter + 120, txtColor, txtHoverColor, 23, 5);
}

function mainPlay() {
	wLapangan = width * 0.6;
	hLapangan = height * 0.6;

	// Game Background
	noStroke();
	imageMode(CENTER);
	rectMode(CORNER);
	fill("#00bd2f");
	rect(0, 0, width, height / 2);
	fill("#089e2d");
	rect(0, yCenter, width, height / 2);

	// Title Game
	componentText("Whack A Mole Game", xCenter + 2, 52, "white", "white", 50, 0);
	componentText("Whack A Mole Game", xCenter, 50, "black", "black", 50, 0);

	// Lahan Tanahnya
	stroke(0);
	rectMode(CENTER);
	fill("#964B00");
	rect(xCenter, yCenter, wLapangan, hLapangan);

	// Komponen skor
	noStroke();
	fill(255);
	rect(xCenter - 140, height - 70, 130, 50, 10, 50, 10, 50);
	componentText("Skor", xCenter - 160, height - 70, 0, 0, 28, 5);
	componentText(skor, xCenter - 105, height - 69, 0, 0, 28, 5);

	// Komponen level
	fill(255);
	rect(xCenter + 140, height - 70, 130, 50, 10, 50, 10, 50);
	componentText(level, xCenter + 140, height - 70, 0, 0, 28, 5);

	// Komponen waktu
	fill(255);
	rect(xCenter, height - 70, 80, 50, 10, 50, 10, 50);
	componentText(timePlay, xCenter, height - 70, 0, 0, 28, 5);

	if (!finish) {
		upAndDownShow();
	}
	renderHole();
}

function makeMole() {
	let jumlahTikus = 6;
	for (let t = 0; t < jumlahTikus; t++) {
		if (t > 2) {
			new Tikus(
				tikus,
				xCenter - tikusPositionX + (t - 3) * tikusPositionX,
				yCenter + tikusPositionY,
				150,
				80
			);
			new Tanah(
				tanah,
				xCenter - tanahPositionX + (t - 3) * tanahPositionX,
				yCenter + tanahPositionY,
				150,
				80
			);
		} else {
			new Tikus(
				tikus,
				xCenter - tikusPositionX + t * tikusPositionX,
				yCenter - tikusPositionY - 10,
				150,
				80
			);
			new Tanah(
				tanah,
				xCenter - tanahPositionX + t * tanahPositionX,
				yCenter - tanahPositionY,
				150,
				80
			);
		}
	}
}

function changeCursor() {
	if (
		mouseX >= xCenter - wLapangan / 2 &&
		mouseX <= xCenter + wLapangan / 2 &&
		mouseY >= yCenter - hLapangan / 2 &&
		mouseY <= yCenter + hLapangan / 2 &&
		mouseIsPressed
	) {
		rotate((PI / 180) * 1.3);
		image(palu, mouseX, mouseY, 80, 80);
	} else {
		rotate(0);
		image(palu, mouseX, mouseY, 80, 80);
	}
}

function renderHole() {
	tint(255, 255);
	hole.forEach((h) => {
		h.show();
	});
}

function randomPosition() {
	const r = floor(random(mole.length));
	if (randomNumberBefore == r) {
		randomPosition();
	}
	randomNumberBefore = r;
	mRandom = mole[r];
}

function randomTime(min, max) {
	return floor(random(min, max));
}

function upAndDownShow() {
	if (naik) {
		mRandom.transisiDown(numberOfLevel);
	} else {
		if (
			mouseX >= mRandom.xPos - mRandom.width / 2 &&
			mouseX <= mRandom.xPos + mRandom.width / 2 &&
			mouseY >= mRandom.yPos - mRandom.height / 2 &&
			mouseY <= mRandom.yPos + mRandom.height / 2 &&
			mouseIsPressed
		) {
			naik = true;
			bsPukul.play();
			skor++;
		} else {
			mRandom.transisiMuncul(numberOfLevel);
		}
	}
}

function setMusic() {
	music = localStorage.getItem("music");

	if (!music) {
		localStorage.setItem("music", "Off");
	} else if (isClick) {
		if (music == "Off") {
			music = "On";
		} else if (music == "On") {
			music = "Off";
		}
		localStorage.setItem("music", music);
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

function setLevel() {
	level = localStorage.getItem("level");

	if (!level) {
		localStorage.setItem("level", "easy");
	} else if (isClick) {
		if (level == "easy") {
			level = "medium";
		} else if (level == "medium") {
			level = "hard";
		} else if (level == "hard") {
			level = "easy";
		}
		localStorage.setItem("level", level);
	}

	if (level == "easy") {
		numberOfLevel = 1;
	} else if (level == "medium") {
		numberOfLevel = 2;
	} else if (level == "hard") {
		numberOfLevel = 3;
	}

	// console.log(numberOfLevel);
	isClick = false;
}

function aboutUS() {
	fill(255);
	stroke(0);
	strokeWeight(5);
	rect(xCenter, yCenter, 700, 500, 20);
	componentText("About Game", xCenter, 122, 0, 0, 40, 0);
	componentText("About Game", xCenter, 120, "#EDBC9B", "#EDBC9B", 40, 0);
	componentText(
		"Whack A Mole adalah game yang dimainkan dengan cara",
		xCenter,
		172,
		0,
		0,
		18,
		0
	);
	componentText(
		"memukul tikus tanah yang muncul dari lubang tertentu.",
		xCenter,
		192,
		0,
		0,
		18,
		0
	);
	componentText(
		"Game ini dibuat dengan menggunakan processing dan p5.js",
		xCenter,
		222,
		0,
		0,
		18,
		0
	);
	// My Team
	componentText("Kelompok 7", xCenter, 272, 0, 0, 25, 0);
	componentText(
		"Alfares Ariandha Nurdin (2107411020)",
		xCenter,
		322,
		0,
		0,
		25,
		0
	);
	componentText("Chaesa Adella Rahma (2107411003)", xCenter, 352, 0, 0, 25, 0);
	componentText("Lisna Agustin (2107411017)", xCenter, 382, 0, 0, 25, 0);
	componentText("Gilang Rianto Utomo (2107411029)", xCenter, 412, 0, 0, 25, 0);

	componentButton(xCenter + 300, 112, 50, 50, 5, 240, 240, 15);
	componentText("❌", xCenter + 300, 112, txtColor, txtHoverColor, 22, 4);
}

function mouseClicked() {
	if (txtIsHover != "") {
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
		case "❌":
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

function gamePLay() {
	cursor(ARROW);
	if (waktuTunggu > -1) {
		rundownBeforePlay();
		naik = false;
		if (waktuTunggu == 0) {
			timePlay = 11;
			playingTime();
		}
	} else {
		if (a) {
			skor = 0;
			randomPosition();
			a = false;
		}
		cursor(ARROW);
		mainPlay();
		if (timePlay == 0) {
			finishGame();
			finish = true;
			clearInterval(intervalTime);
		} else {
			changeCursor();
		}
	}
}

// Komponen sebelum mulai setelah klik play
function rundownBeforePlay() {
	noStroke();
	rectMode(CENTER);
	fill(bgColor);
	rect(xCenter, yCenter, width, height);
	fill(0);
	textStyle(BOLD);
	componentText(waktuTunggu, xCenter, yCenter, "#000000", "#000000", 60, 5);
	waktuTunggu--;
	// console.log(waktuTunggu);
	sleep(1000);
}

function playingTime() {
	intervalTime = setInterval(() => {
		timePlay--;
	}, 1000);
}

function finishGame() {
	// overlay
	rectMode(CENTER);
	stroke(0);
	strokeWeight(5);
	fill(127);
	rect(xCenter, yCenter, 600, 300, 10, 50, 10, 50);
	stroke(0);
	fill(255);
	rect(xCenter, yCenter - 150, 300, 50, 10, 50, 10, 50);
	componentText("Hasil Permainan", xCenter, yCenter - 150, 0, 0, 28, 5);
	fill(255);
	rect(xCenter, yCenter - 30, 200, 100, 10, 50, 10, 50);
	componentText("Skor Akhir", xCenter, yCenter - 50, 0, 0, 28, 5);
	componentText(skor, xCenter, yCenter - 10, 0, 0, 28, 5);
	noStroke();

	// Komponen Tombol
	componentButton(
		xCenter - 100,
		yCenter + 100,
		150,
		60,
		5,
		shapeColor,
		shapeHoverColor,
		15
	);
	componentText(
		"Main Lagi",
		xCenter - 100,
		yCenter + 100,
		txtColor,
		txtHoverColor,
		28,
		5
	);
	componentButton(
		xCenter + 100,
		yCenter + 100,
		150,
		60,
		5,
		shapeColor,
		shapeHoverColor,
		15
	);
	componentText(
		"Exit",
		xCenter + 100,
		yCenter + 100,
		txtColor,
		txtHoverColor,
		28,
		5
	);
}

// Sleep Function
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if (new Date().getTime() - start > milliseconds) {
			break;
		}
	}
}
