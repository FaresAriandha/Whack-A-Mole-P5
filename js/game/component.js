let isHover = false;
let mole = [];
let hole = [];

function componentText(
	str,
	xPos,
	yPos,
	txtColor,
	hoverColor,
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
	sColor,
	hoverColor,
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
		// cursor(HAND);
		fill(hoverColor);
		wSize += scaleSize;
		hSize += scaleSize;
		isHover = true;
	} else {
		// resetWhenChangePage();
		fill(sColor);
	}
	rect(xPos, yPos, wSize, hSize, rounded);
}

function Tikus(img, xPos, yPos, height, width) {
		this.img = img,
		this.xPos = xPos,
		this.yPos = yPos,
		this.height = height,
		this.width = width,
		this.transisiUp = 20;
		

		this.show = function () {
			image(this.img, this.xPos, this.yPos, this.height, this.width);
		};
		
		this.transisiMuncul = function () {
			tint(255,255);
			translate(0, -this.transisiUp);
		}
		
		this.transisiDown = function () {
			tint(255,0);
			translate(0, this.transisiUp);
		}
		
		mole.push(this);
}

function Tanah(img, xPos, yPos, height, width) {
	this.img = img,
	this.xPos = xPos,
	this.yPos = yPos,
	this.height = height,
	this.width = width,
	

	this.show = function () {
		translate(0,0);
		image(this.img, this.xPos, this.yPos, this.height, this.width);
	};

	hole.push(this);
}


