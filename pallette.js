const PALLET_CELL_SIZE = 100;

let palletX, palletY;
let blueBegX, blueEndX, blueBegY, blueEndY, greenBegX, greenEndX, greenBegY, greenEndY, cyanBegX, cyanEndX, cyanBegY, cyanEndY,
	redBegX, redEndX, redBegY, redEndY, yellowBegX, yellowEndX, yellowBegY, yellowEndY, brownBegX, brownEndX, brownBegY, brownEndY,
	whiteBegX, whiteEndX, whiteBegY, whiteEndY, grayBegX, grayEndX, grayBegY, grayEndY, blackBegX, blackEndX, blackBegY, blackEndY;

function drawPallet() {
	palletX = gridSize * cellSize + 300;
	palletY = 100;
	chosenColorRepY = 650;
	let thisColor = "black"
	
	for (i = 1; i <= 10; i++) {
		switch (i) {
			case 1:
				thisColor="blue";
				blueBegX = palletX;
				blueEndX = palletX + PALLET_CELL_SIZE;
				blueBegY = palletY;
				blueEndY = palletY + PALLET_CELL_SIZE;
				break;
			case 2:
				thisColor="green";
				greenBegX = palletX;
				greenEndX = palletX + PALLET_CELL_SIZE;
				greenBegY = palletY;
				greenEndY = palletY + PALLET_CELL_SIZE;
				break;
			case 3:
				thisColor="cyan";
				cyanBegX = palletX;
				cyanEndX = palletX + PALLET_CELL_SIZE;
				cyanBegY = palletY;
				cyanEndY = palletY + PALLET_CELL_SIZE;
				break;
			case 4:
				thisColor="red";
				redBegX = palletX;
				redEndX = palletX + PALLET_CELL_SIZE;
				redBegY = palletY;
				redEndY = palletY + PALLET_CELL_SIZE;
				break;
			case 5:
				thisColor="yellow";
				yellowBegX = palletX;
				yellowEndX = palletX + PALLET_CELL_SIZE;
				yellowBegY = palletY;
				yellowEndY = palletY + PALLET_CELL_SIZE;
				break;
			case 6:
				thisColor="brown";
				brownBegX = palletX;
				brownEndX = palletX + PALLET_CELL_SIZE;
				brownBegY = palletY;
				brownEndY = palletY + PALLET_CELL_SIZE;
				break;
			case 7:
				thisColor="white";
				whiteBegX = palletX;
				whiteEndX = palletX + PALLET_CELL_SIZE;
				whiteBegY = palletY;
				whiteEndY = palletY + PALLET_CELL_SIZE;
				break;
			case 8:
				thisColor="gray";
				grayBegX = palletX;
				grayEndX = palletX + PALLET_CELL_SIZE;
				grayBegY = palletY;
				grayEndY = palletY + PALLET_CELL_SIZE;
				break;
			case 9:
				thisColor="black";
				blackBegX = palletX;
				blackEndX = palletX + PALLET_CELL_SIZE;
				blackBegY = palletY;
				blackEndY = palletY + PALLET_CELL_SIZE;
				break;
			case 10:
				thisColor="nothing";
				clearBegX = palletX;
				clearEndX = palletX + PALLET_CELL_SIZE;
				clearBegY = palletY;
				clearEndY = palletY + PALLET_CELL_SIZE;
				break;
			default:
		}
		
		if (thisColor == "nothing") {
			drawSquare(palletX, palletY, PALLET_CELL_SIZE, PALLET_CELL_SIZE, false, thisColor, "white");
		} else {
			drawSquare(palletX, palletY, PALLET_CELL_SIZE, PALLET_CELL_SIZE, false, thisColor, thisColor);
		}
		
		if (i % 2 == 0) {
			palletX = gridSize * cellSize + 300;
			palletY += PALLET_CELL_SIZE + 1;
		} else {
			palletX += PALLET_CELL_SIZE + 1;
		}
		
	}
	
	drawSquare(gridSize * cellSize + 300, chosenColorRepY, 200, 50, false, "black", chosenColor);
}

function colorChange() {
	palletBegX = gridSize * cellSize + 300;
	palletEndX = palletBegX + 202;
	palletBegY = 100;
	palletEndY = palletBegY + 505;
	
	if ((mouseX >= palletBegX && mouseX <= palletEndX) && (mouseY >= palletBegY && mouseY <= palletEndY)) {
		if ((mouseX >= blueBegX && mouseX <= blueEndX) && (mouseY >= blueBegY && mouseY <= blueEndY)) { chosenColor = "blue"; }
		else if ((mouseX >= greenBegX && mouseX <= greenEndX) && (mouseY >= greenBegY && mouseY <= greenEndY)) { chosenColor = "green"; }
		else if ((mouseX >= cyanBegX && mouseX <= cyanEndX) && (mouseY >= cyanBegY && mouseY <= cyanEndY)) { chosenColor = "cyan"; }
		else if ((mouseX >= redBegX && mouseX <= redEndX) && (mouseY >= redBegY && mouseY <= redEndY)) { chosenColor = "red"; }
		else if ((mouseX >= yellowBegX && mouseX <= yellowEndX) && (mouseY >= yellowBegY && mouseY <= yellowEndY)) { chosenColor = "yellow"; }
		else if ((mouseX >= brownBegX && mouseX <= brownEndX) && (mouseY >= brownBegY && mouseY <= brownEndY)) { chosenColor = "brown"; }
		else if ((mouseX >= whiteBegX && mouseX <= whiteEndX) && (mouseY >= whiteBegY && mouseY <= whiteEndY)) { chosenColor = "white"; }
		else if ((mouseX >= grayBegX && mouseX <= grayEndX) && (mouseY >= grayBegY && mouseY <= grayEndY)) { chosenColor = "gray"; }
		else if ((mouseX >= blackBegX && mouseX <= blackEndX) && (mouseY >= blackBegY && mouseY <= blackEndY)) { chosenColor = "black"; }
		else if ((mouseX >= clearBegX && mouseX <= clearEndX) && (mouseY >= clearBegY && mouseY <= clearEndY)) { chosenColor = "nothing"; }
	} else {
		if ((mouseX >=0 && mouseX <= gridSize * cellSize + gridSize) && (mouseY >= 0 && mouseY <= gridSize * cellSize + gridSize)) {
			gridSpacersX = mouseX / cellSize - 1;
			gridSpacersY = mouseY / cellSize - 1;
			mouseOnGridX = Math.floor((mouseX - gridSpacersX) / cellSize) + 1;
			mouseOnGridY = Math.floor((mouseY - gridSpacersY) / cellSize);
			mouseOnCell = mouseOnGridX + (mouseOnGridY * gridSize) - 1;
			addColorToGridArray(mouseOnCell);
			updateOutputBox();
			// drawText("Inside Grid's Boundaries", 900, 800, "32pt UbuntuRegular", "CadetBlue");	
		}
	}
}