let txtIsHover;
let circleX, circleY;
let xSpeed, ySpeed;
let namePage = "mainHome";
let xCenter, yCenter;
let theme = "dark", bgColor = 128;



function setup() {
	createCanvas(900, 600);
	changeTheme();
	xSpeed = 10;
	ySpeed = 13;
	circleX = circleY = 50;
	xCenter = width/2;
	yCenter = height/2;
}

function draw() {
	switch (namePage) {
		case "mainHome":
			mainHome();
			break;
		case "mainPlay":
			playWhackAMole();
			break;
		case "mainSetting":
			mainSetting();
		default:
			break;
	}
}




// draw();
