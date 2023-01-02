let isHover = false;
let mole = [];
let hole = [];
let i = 0;
let naik = false;

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
	let strWidth = textWidth(text);
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
	cursor(ARROW);
	rectMode(CENTER);
	let d = dist(xPos, yPos, mouseX, mouseY);
	if (
		d < wSize &&
		d < hSize &&
		mouseY > yPos - hSize / 2 &&
		mouseY < yPos + hSize / 2
	) {
		fill(hoverColor);
		wSize += scaleSize;
		hSize += scaleSize;
		isHover = true;
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

	this.transisiMuncul = function () {
		if (i == this.transisiUp) {
			naik = true;
			i = 0;
			tint(255, 255);
		} else {
			this.yPos -= numberOfLevel;
		}
		i += numberOfLevel;
		this.show();
	};

	this.transisiDown = function () {
		tint(255, 255 - i * 20);
		if (i == this.transisiUp) {
			naik = false;
			i = 0;
			this.xPos = this.tmpX;
			this.yPos = this.tmpY;
			tint(255, 0);
			randomPosition();
		} else {
			this.yPos += numberOfLevel;
		}
		this.show();
		// console.log(i);
		i += numberOfLevel;
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
