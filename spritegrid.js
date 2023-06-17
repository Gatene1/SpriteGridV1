const CANVAS_WIDTH = 1500;
const CANVAS_HEIGHT = 900;
const FRAMES_PER_SECOND = 30;

let canvas, ctx;
let mouseX, mouseY;
let multiplierX, multiplicandY, gridSpacersX, gridSpacersY, mouseOnGridX, mouseOnGridY, mouseOnCell;
let gridArrayOutput;

let grid;
let gridSize = 32;
let gridSizeMax = 128;
let cellSize = 25;
let cellHollowSize = 25;
let gridColor = "#a0a0a0";
let chosenColor = "black"

function updateMousePos(evt) {
	// Position of mouse on page.
	let rect = canvas.getBoundingClientRect();
	let root = document.documentElement;
	
	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;	
}

function clearCanvas() {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}

window.onload = function() {
	canvas = document.getElementById("gridPallet");
	ctx = canvas.getContext('2d');
	gridArrayOutput = document.getElementById("gridArrayOutput");
	
	fillGridArray();
	
	setInterval(drawEverything, 1000/FRAMES_PER_SECOND);
	
	canvas.addEventListener('mousemove', updateMousePos);
	canvas.addEventListener('mousedown', colorChange);
	canvas.addEventListener('contextmenu', makeCellEmpty, false);
	
}

function drawEverything() {
	clearCanvas();
	drawGrid();
	drawPallet();
	
	//drawText(mouseOnCell, mouseX, mouseY, "16pt Merchant", "black");
}

function drawSquare(x, y, width, height, justStroke, strokeColor, sqColor) {
	ctx.fillStyle = sqColor;
	ctx.strokeStyle = strokeColor;
	
	ctx.strokeRect(x, y, width, height);
	if (!justStroke) {	
		ctx.fillRect(x, y, width, height);
	}
}

function drawText(sayWhat, x, y, fontSN, fontColor) {
	ctx.font = fontSN;
	ctx.fillStyle = fontColor;
	ctx.fillText(sayWhat, x, y);
}