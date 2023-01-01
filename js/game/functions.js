let str,
	strWidth,
	padding = 10;
let chTheme = theme;
let tikusPositionX = (tanahPositionX = 170);
let tikusPositionY = 80;
let tanahPositionY = 80;
let randomNumberBefore,
	finish,
	skor = 0,
	waktuMain = 10000;
let wLapangan, hLapangan;
let a, mRandom, waktuTunggu;
let shapeColor = "#fccc47",
	shapeHoverColor = "#ffc117",
	txtColor = "grey",
	txtHoverColor = "dark";
let level, isClick, music, timePlay;
let intervalTime;

function mainHome() {
	background(bgColor);
	componentButton(
		xCenter,
		yCenter - 20,
		100,
		50,
		5,
		shapeColor,
		shapeHoverColor,
		15
	);
	componentText("Play", xCenter, yCenter - 20, txtColor, txtHoverColor, 20, 5);
	componentButton(
		xCenter,
		yCenter + 60,
		100,
		50,
		5,
		shapeColor,
		shapeHoverColor,
		15
	);
	componentText(
		"Settings",
		xCenter,
		yCenter + 60,
		txtColor,
		txtHoverColor,
		20,
		5
	);
}

function mainSetting() {
	background(bgColor);
	componentButton(
		xCenter - 100,
		yCenter - 30,
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
		yCenter - 30,
		txtColor,
		txtHoverColor,
		20,
		4
	);
	fill(255);
	rect(xCenter - 100, yCenter - 90, 100, 30, 7);
	componentText(level, xCenter - 100, yCenter - 90, 0, 0, 20, 4);

	// Add Sound
	componentButton(
		xCenter + 100,
		yCenter - 30,
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
		yCenter - 30,
		txtColor,
		txtHoverColor,
		20,
		4
	);
	fill(255);
	rect(xCenter + 100, yCenter - 90, 100, 30, 7);
	componentText(music, xCenter + 100, yCenter - 90, 0, 0, 20, 4);
	componentButton(
		xCenter,
		yCenter + 70,
		100,
		50,
		5,
		shapeColor,
		shapeHoverColor,
		15
	);
	componentText("Back", xCenter, yCenter + 70, txtColor, txtHoverColor, 20, 5);
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
	
	// Button Back
	noStroke();
	
	// Komponen skor
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

function changeCursor() {
	if (
		mouseX >= xCenter - wLapangan / 2 &&
		mouseX <= xCenter + wLapangan / 2 &&
		mouseY >= yCenter - hLapangan / 2 &&
		mouseY <= yCenter + hLapangan / 2
	) {
		// if (mouseIsPressed) {
		// }
		rotate((PI / 180) * 1.3);
		image(palu, mouseX, mouseY, 65, 65);
		rotate(0);
		image(palu, mouseX, mouseY, 65, 65);
	}
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
				yCenter - tikusPositionY,
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
		mRandom.transisiDown();
	} else {
		if (
			mouseX >= mRandom.xPos - mRandom.width / 2 &&
			mouseX <= mRandom.xPos + mRandom.width / 2 &&
			mouseY >= mRandom.yPos - mRandom.height / 2 &&
			mouseY <= mRandom.yPos + mRandom.height / 2
		) {
			naik = true;
			skor++;
			console.log("test");
			bsPukul.play();
		} else {
			mRandom.transisiMuncul();
			bsPukul.stop();
		}
	}
}

function setMusic() {
	music = localStorage.getItem("music");

	if (!music) {
		localStorage.setItem("music", "Off");
	} else if (isClick){
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
	return music;
}

function setLevel() {
	level = localStorage.getItem("level");

	if (!level) {
		localStorage.setItem("level", "normal");
	} else if (isClick){
		if (level == "normal") {
			level = "medium";
		} else if (level == "medium") {
			level = "hard";
		} else if (level == "hard") {
			level = "normal";
		}
		localStorage.setItem("level", level);
	}

	if (level == "normal") {			
		numberOfLevel = 1;
	} else if (level == "medium") {
		numberOfLevel = 2;
	} else if (level == "hard") {
		numberOfLevel = 3;
	}

	console.log(numberOfLevel);
	isClick = false;
}

function mouseClicked() {
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
			break;
	}
	txtIsHover = "";
}

function gamePLay() {
	if (waktuTunggu > -1) {
		rundownBeforePlay();
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
			winOrLose();
			finish = true;
			clearInterval(intervalTime);
		} else {
			changeCursor();
		}
	}
}

function rundownBeforePlay() {
	noStroke();
	rectMode(CENTER);
	fill(0, 0, 255);
	rect(xCenter, yCenter, width, height);
	fill(0);
	textStyle(BOLD);
	componentText(waktuTunggu, xCenter, yCenter, "#000000", "#000000", 40, 5);
	waktuTunggu--;
	console.log(waktuTunggu);
	sleep(1000);
}

function playingTime() {
	intervalTime = setInterval(() => {
		timePlay--;
	}, 1000);
}

function winOrLose() {
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
