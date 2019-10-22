let painttime = false
//let brush = "default"
let brush = ""
let heft = 10
let vigor = 255
function setup() {

	let canvas = createCanvas(800, 600)
	canvas.parent("p5")

	rect(0, 0, width, height)
	background(0)
}

function draw() {

	push()
		stroke(0)
		strokeWeight(1)
		noFill()
		rect(0, 0, width, height)
	pop()

	if (painttime == true) {
		if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {

			if (brush == "default") {
				line(mouseX, mouseY, pmouseX, pmouseY)
			}

			if (brush == "seaUrchin") {
				line(mouseX, mouseY, (width/2), (height/2))
			}

			if (brush == "wackyLine") {
				line(mouseX, mouseY, (mouseY/2), (mouseX/2))
			}

			if (brush == "quill") {
				line(mouseX, mouseY, mouseX + 10, mouseY + 10)
			}

			if (brush == "barbs") {
				strokeWeight(1)
				line (mouseX, mouseY, mouseX + (random(-heft, heft)), mouseY + (random(-heft, heft)))
			}

			if (brush == "crazy") {
				translate(crazyX, crazyY)
				line(mouseX, mouseY, pmouseX, pmouseY)
			}

			if (brush == "dribbles") {
				strokeWeight(random(1, 5))
				point(mouseX + random(-heft, heft), mouseY + random(-heft, heft))
			}

			if (brush == "duster") {
				strokeWeight(1)
				point(mouseX + random(-heft, heft), mouseY + random(-heft, heft))
			}
		}	
	}
}




//painttime
	function mousePressed() {
		painttime = true

		//crazytime brush
			if (brush == "crazy") {
				crazyX = (random(-width, width))/2
				crazyY = (random(-height, height))/2
			}
	}

	function mouseReleased() {
		painttime = false
	}

	function mouseClicked() {
	}

//settings
		function clearScreen() {
			background(0)
		}
	//colors
		function colorBlue() {
			fill(0, 0, 255, vigor)
			stroke(0, 0, 255, vigor)
		}

		function colorMajenta() {
			fill(255, 0, 255, vigor)
			stroke(255, 0, 255, vigor)
		}

		function colorRed() {
			fill(255, 0, 0, vigor)
			stroke(255, 0, 0, vigor)
		}

		function colorYellow() {
			fill(255, 255, 0, vigor)
			stroke(255, 255, 0, vigor)
		}

		function colorGreen() {
			fill(0, 255, 0, vigor)
			stroke(0, 255, 0, vigor)
		}

		function colorCyan() {
			fill(0, 255, 255, vigor)
			stroke(0, 255, 255, vigor)
		}

		function colorBlack() {
			fill(0, 0, 0, vigor)
			stroke(0, 0, 0, vigor)
		}

		function colorWhite() {
			fill(255, 255, 255, vigor)
			stroke(255, 255, 255, vigor)
		}


	//heft
		function heftier() {
				
				heft += 1
				strokeWeight(heft)
		}

		function lessHefty() {
			if (heft >= 2) {
				heft -= 1
				strokeWeight(heft)
			}
		}


	//vigor
		function stronger() {
			if (vigor <= 239) {
				vigor += 16
			}
		}

		function weaker() {
			if (vigor >= 16) {
				vigor -= 16
			}
		}


	//brushes
		function seaUrchin() {
			brush = "seaUrchin"
		}

		function normal() {
			brush = "default"
		}

		function crazy() {
			brush = "crazy"
		}

		function dribbles() {
			brush = "dribbles"
		}

		function barbs() {
			brush = "barbs"
		}

		function quill() {
			brush = "quill"
		}

		function wackyLine() {
			brush = "wackyLine"
		}

		function duster() {
			brush = "duster"
		}