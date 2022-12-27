let str, strWidth, padding = 10;
let chTheme = theme;

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
	componentButton(xCenter, yCenter - 20, 100, 50, 5, shapeColor, shapeHoverColor, 15);
	componentText("Play", xCenter, yCenter - 20, txtColor, txtHoverColor, 20, 5);
  componentButton(xCenter, yCenter + 60, 100, 50, 5, shapeColor, shapeHoverColor, 15);
	componentText("Settings", xCenter, yCenter + 60, txtColor, txtHoverColor, 20, 5);
}

function mainSetting(){
  background(bgColor);
	componentButton(xCenter, yCenter - 20, 150, 50, 5, shapeColor, shapeHoverColor, 18);
	componentText(`Change Color`, xCenter, yCenter - 20, txtColor, txtHoverColor, 20, 4);
  componentButton(xCenter, yCenter + 60, 100, 50, 5, shapeColor, shapeHoverColor, 15);
	componentText("Back", xCenter, yCenter + 60, txtColor, txtHoverColor, 20, 5);
}

function playWhackAMole() {
	// Game Background
	noStroke();
	rectMode(CORNER);
	fill("#00bd2f");
	rect(0,0, width, height/2);
	fill("#089e2d");
	rect(0,yCenter, width, height/2);

	// Title Game
	componentText("Whack A Mole Game", xCenter + 2, 52, "white", "white", 50, 0);
	componentText("Whack A Mole Game", xCenter, 50, "black", "black", 50, 0);

	// Lahan Tanahnya
	stroke(0)
	rectMode(CENTER);
	fill("#964B00");
	rect(xCenter,yCenter, width*.6, height*.6);

	// Button Back
	noStroke();
	componentButton(xCenter + 100, height - 50, 100, 50, 5, shapeColor, shapeHoverColor, 15);
	componentText("Exit", xCenter + 100, height - 50, txtColor, txtHoverColor, 20, 5);
	componentButton(xCenter - 100, height - 50, 100, 50, 5, shapeColor, shapeHoverColor, 15);
	componentText("Reset", xCenter - 100, height - 50, txtColor, txtHoverColor, 20, 5);

	// Gambar Tanahnya
	
}


function changeTheme(){
	if (theme == "dark") {
		theme = "light"
	}else{
		theme = "dark"
	}
	switch (theme) {
		case "light":
			bgColor = 128;
			shapeColor = "#fccc47", 
			shapeHoverColor = "#ffc117", 
			txtColor = "grey", 
			txtHoverColor = "dark"
			break;
		case "dark":
			bgColor = 0;
			shapeColor = "#1e50f7", 
			shapeHoverColor = "skyblue", 
			txtColor = "#d4593d", 
			txtHoverColor = "green"
		default:
			break;
	}
}

function resetWhenChangePage() {
  cursor(ARROW);
}


function mouseClicked(){
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
			console.log("test");
			break;
    default:
      break;
  }
}