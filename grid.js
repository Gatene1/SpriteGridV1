function fillGridArray() {	
	grid = [0];
	
	for (i = 1; i < gridSize * gridSize; i++) {
		grid.push(0);
	}
}

function addColorToGridArray(elementNumber) {
	let colorToAdd = 0;
	switch (chosenColor) {
		case "blue":
			colorToAdd = 1;
			break;
		case "green":
			colorToAdd = 2;
			break;
		case "cyan":
			colorToAdd = 3;
			break;
		case "red":
			colorToAdd = 4;
			break;
		case "yellow":
			colorToAdd = 5;
			break;
		case "brown":
			colorToAdd = 6;
			break;
		case "white":
			colorToAdd = 7;
			break;
		case "gray":
			colorToAdd = 8;
			break;
		case "black":
			colorToAdd = 9;
			break;
		default:
	}
	
	grid[elementNumber] = colorToAdd;
}

function drawGrid() {
	let row = 0;
	let col = 0;
	let fillColor;
	for (i = 0; i < gridSize * gridSize; i++) {
		switch (grid[i]) {
			case 0:
				fillColor = "whitesmoke";
				break;
			case 1:
				fillColor = "blue";
				break;
			case 2:
				fillColor = "green";
				break;
			case 3:
				fillColor = "cyan";
				break;
			case 4:
				fillColor = "red";
				break;
			case 5:
				fillColor = "yellow";
				break;
			case 6:
				fillColor = "brown";
				break;
			case 7:
				fillColor = "white";
				break;
			case 8:
				fillColor = "gray";
				break;
			case 9:
				fillColor = "black";
				break;
		}
		drawSquare(col, row, cellSize, cellSize, false, gridColor, fillColor);
		col += cellSize + 1;
		if ((i + 1) % gridSize == 0) {
			col = 0;
			row += cellSize + 1;
		}
	}
}

function eraseGrid() {
	fillGridArray();
	updateOutputBox();
}

function makeCellEmpty(evt) {
	evt.preventDefault();
	if ((mouseX >=0 && mouseX <= gridSize * cellSize + gridSize) && (mouseY >= 0 && mouseY <= gridSize * cellSize + gridSize)) {
		gridSpacersX = mouseX / cellSize - 1;
		gridSpacersY = mouseY / cellSize - 1;
		mouseOnGridX = Math.floor((mouseX - gridSpacersX) / cellSize) + 1;
		mouseOnGridY = Math.floor((mouseY - gridSpacersY) / cellSize);
		mouseOnCell = mouseOnGridX + (mouseOnGridY * gridSize) - 1;
		grid[mouseOnCell] = 0;
	}
	updateOutputBox();
	return false;
}

