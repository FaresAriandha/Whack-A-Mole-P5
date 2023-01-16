let isHover = false;
let mole = [];
let hole = [];
let i = 0;

function componentText(
	str,
	xPos,
	yPos,
	txtColor = "grey",
	hoverColor = "black",
	txtSize,
	scaleSize
) {
	noStroke();
	if (isHover) {
		textStyle(BOLD);
		textSize(scaleSize + txtSize);
		fill(hoverColor);
		if (mouseIsPressed === true && mouseButton === LEFT) {
			txtIsHover = str;
		}
		isHover = false;
	} else {
		textStyle(NORMAL);
		textSize(txtSize);
		fill(txtColor);
	}
	textAlign(CENTER, CENTER);

	text(str, xPos, yPos);
}

function componentButton(
	xPos,
	yPos,
	wSize,
	hSize,
	rounded = 0,
	sColor = "#fccc47",
	hoverColor = "#ffc117",
	scaleSize
) {
	rectMode(CENTER);
	let d = dist(xPos, yPos, mouseX, mouseY);
	if (
		d < wSize &&
		d < hSize &&
		mouseY > yPos - hSize / 2 &&
		mouseY < yPos + hSize / 2
	) {
		fill(hoverColor);
		stroke(255);
		strokeWeight(3);
		wSize += scaleSize;
		hSize += scaleSize;
		isHover = true;
		cursor(HAND);
	} else {
		fill(sColor);
	}
	rect(
		xPos,
		yPos,
		wSize,
		hSize,
		rounded + 5,
		rounded + 15,
		rounded + 5,
		rounded + 15
	);
	wSize -= scaleSize;
	hSize -= scaleSize;
}

function Tikus(img, xPos, yPos, height, width) {
	(this.img = img),
		(this.xPos = xPos),
		(this.yPos = yPos),
		(this.height = height),
		(this.tmpX = xPos),
		(this.width = width),
		(this.tmpY = yPos),
		(this.transisiUp = 36);

	this.show = function () {
		image(this.img, this.xPos, this.yPos, this.height, this.width);
	};

	this.transisiMuncul = function (numberOfLevel) {
		if (i == this.transisiUp) {
			console.log("turun");
			naik = true;
			i = 0;
			tint(255, 255);
		} else {
			this.yPos -= numberOfLevel;
		}
		// console.log();
		i += numberOfLevel;
		this.show();
	};

	this.transisiDown = function (numberOfLevel) {
		tint(255, 255 - i * 20);
		this.show();
		if (i == this.transisiUp) {
			i = 0;
			console.log("naik");
			naik = false;
			this.xPos = this.tmpX;
			this.yPos = this.tmpY;
			tint(255, 0);
			randomPosition();
		} else {
			this.yPos += numberOfLevel;
			i += numberOfLevel;
		}
		// console.log(i);
		console.log(numberOfLevel);
	};

	mole.push(this);
}

function Tanah(img, xPos, yPos, height, width) {
	(this.img = img),
		(this.xPos = xPos),
		(this.yPos = yPos),
		(this.height = height),
		(this.width = width);

	this.show = function () {
		translate(0, 0);
		image(this.img, this.xPos, this.yPos, this.height, this.width);
	};

	hole.push(this);
}
