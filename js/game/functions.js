let str,
	strWidth,
	padding = 10;
let chTheme = theme;
let tikusPositionX = tanahPositionX = 170;
let	tikusPositionY = tanahPositionY = 80;
let randomNumberBefore, finish = false, skor = 0, waktuMain = 10000;

// function bounceBall() {
// 	background(255);
// 	fill(255);
// 	stroke(0);
// 	ellipseMode(RADIUS);
// 	ellipse(circleX, circleY, 50, 50);

// 	if (circleX + 50 > width || circleX - 50 < 0) {
// 		xSpeed = -xSpeed;
// 	}

// 	if (circleY + 50 > height || circleY - 50 < 0) {
// 		ySpeed = -ySpeed;
// 	}

// 	circleX += xSpeed;
// 	circleY += ySpeed;
// }

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
		xCenter,
		yCenter - 20,
		150,
		50,
		5,
		shapeColor,
		shapeHoverColor,
		18
	);
	componentText(
		`Change Color`,
		xCenter,
		yCenter - 20,
		txtColor,
		txtHoverColor,
		20,
		4
	);
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
	componentText("Back", xCenter, yCenter + 60, txtColor, txtHoverColor, 20, 5);
}

function mainPlay() {
	let wLapangan = width * 0.6;
	let hLapangan = height * 0.6;
	// Game Background
	noStroke();
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
	componentButton(xCenter + 150, height - 50, 100,50,5,shapeColor,shapeHoverColor,10);
	componentText("Exit",xCenter + 150,height - 50,txtColor,txtHoverColor,20,5);
	componentButton(xCenter - 150,height - 50,100,50,5,shapeColor,shapeHoverColor,10);
	componentText("Reset",xCenter - 150,height - 50,txtColor,txtHoverColor,20,5);
	componentButton(xCenter,height - 50,100,50,5,shapeColor,shapeHoverColor,10);
	componentText("Main",xCenter,height - 50,txtColor,txtHoverColor,20,5);
	
	// Komponen skor dan waktu
	componentText("Skor",xCenter- 50,yCenter - 200,"dark","dark",30,5);
	componentText(skor,xCenter,yCenter - 200,"dark","dark",30,5);
	
	renderMoleAndHole();
	// noLoop();
	if(finish){
		showMole();
	}
	// Gambar Tanahnya
	// noLoop();
	
}


function makeMole(){
	let jumlahTikus = 6
	for (let t = 0; t < jumlahTikus; t++) {
		if (t > 2) {
			new Tikus(tikus, xCenter - tikusPositionX + ((t - 3) * tikusPositionX), yCenter + tikusPositionY, 150, 80);
			new Tanah(tanah, xCenter - tanahPositionX + ((t - 3) * tanahPositionX), yCenter + tanahPositionY, 150, 80);
		}else{
			new Tikus(tikus, xCenter - tikusPositionX + (t * tikusPositionX), yCenter - tikusPositionY, 150, 80);
			new Tanah(tanah, xCenter - tanahPositionX + (t * tanahPositionX), yCenter - tanahPositionY, 150, 80);
		}
	}
}

function renderMoleAndHole() {
	tint(255,255);
	hole.forEach(h=>{
		h.show();
	});
}

function randomPosition(){
	const r = floor(random(mole.length));
	if (randomNumberBefore == r) {
		randomPosition();
	}
	randomNumberBefore = r;
	return r;
}

function randomTime(min, max){
	return floor(random(min, max));
}

function showMole(){
	const mRandom = mole[randomPosition()];
	const wRandom = randomTime(500, 1000);
	mRandom.transisiMuncul();
	mRandom.show();
	noLoop();
	
	setTimeout(() => {
		// console.log(wRandom);
		loop();
		mRandom.transisiDown();
		mRandom.show();
		// setTimeout(() => {
			
			// }, waktuMain);
	}, wRandom);
}


function changeTheme() {
	if (theme == "dark") {
		theme = "light";
	} else {
		theme = "dark";
	}
	switch (theme) {
		case "light":
			bgColor = 128;
			(shapeColor = "#fccc47"),
				(shapeHoverColor = "#ffc117"),
				(txtColor = "grey"),
				(txtHoverColor = "dark");
			break;
		case "dark":
			bgColor = 0;
			(shapeColor = "#1e50f7"),
				(shapeHoverColor = "skyblue"),
				(txtColor = "#d4593d"),
				(txtHoverColor = "green");
		default:
			break;
	}
}

function resetWhenChangePage() {
	cursor(ARROW);
}

function mouseClicked() {
	switch (txtIsHover) {
		case "Play":
			namePage = "mainPlay";
			break;
		case "Settings":
			namePage = "mainSetting";
			break;
		case "Back":
		case "Exit":
			namePage = "mainHome";
			break;
		case `Change Color`:
			changeTheme();
			// console.log("test");
			break;
		case `Main`:
			finish = true;
			break;
		case `Reset`:
			finish = false;
			break;
		default:
			break;
	}
}
