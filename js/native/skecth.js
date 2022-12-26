let r, g, b;
let circleX, circleY;
let xSpeed, ySpeed;
let deg = 0;
let main = false;

function mouseClicked() {
	main = !main;
}

function bounceBall() {
	background(255);
	r = int(map(circleX, 0, width, 0, 255));
	g = int(map(circleY, 0, height, 0, 255));
	g = int(random(255));
	fill(r, g, b);
	//fill(255);
	stroke(0);
	ellipseMode(RADIUS);
	ellipse(circleX, circleY, 50, 50);

	if (circleX + 50 > width || circleX - 50 < 0) {
		xSpeed = -xSpeed;
	}

	if (circleY + 50 > height || circleY - 50 < 0) {
		ySpeed = -ySpeed;
	}

	circleX += xSpeed;
	circleY += ySpeed;
}

function startGame() {
	background(0);
	fill(255);
	rectMode(CENTER);
	rect(width / 2, height / 2, 100, 50, 7);
	fill(0);
	textSize(20);
	textAlign(CENTER, CENTER);
	text("Play", width / 2, height / 2);
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	xSpeed = 10;
	ySpeed = 13;
	circleX = circleY = 50;
}

function draw() {
	if (main) {
		bounceBall();
	} else {
		startGame();
	}
}

// draw();
