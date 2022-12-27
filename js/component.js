let isHover = false;

function componentText(str, xPos, yPos, txtColor, hoverColor, txtSize, scaleSize) {
	noStroke();
	if (isHover) {
		textStyle(BOLD);
		textSize(scaleSize + txtSize);
		fill(hoverColor);
		if (mouseClicked) {
			txtIsHover = str;
		}
		isHover = false;
	}else{
		textStyle(NORMAL);
		textSize(txtSize);
		fill(txtColor);
	}
	let strWidth = textWidth(text);
	textAlign(CENTER, CENTER);

	text(str, xPos, yPos);
}

function componentButton(xPos, yPos, wSize, hSize, rounded = 0, sColor, hoverColor, scaleSize){
	rectMode(CENTER);
	let d = dist(xPos, yPos, mouseX, mouseY);
	if (d < wSize && d < hSize 
		&& mouseY > yPos - (hSize / 2) && mouseY < yPos + (hSize / 2)) {
			// cursor(HAND);
			fill(hoverColor);
			wSize += scaleSize;
			hSize += scaleSize;
			isHover = true;
	}else{
		// resetWhenChangePage();
		// cursor(ARROW);
		fill(sColor);
	}
	rect(xPos, yPos, wSize, hSize, rounded);
}