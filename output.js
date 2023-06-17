function updateOutputBox() {
	gridArrayOutput.value = "grid = [ ";
	for (i = 0; i < grid.length; i++) {
		if (i % gridSize == 0) {
			gridArrayOutput.value = gridArrayOutput.value + "\r\n";
			gridArrayOutput.value = gridArrayOutput.value + grid[i] + ", ";
		} else {
			if (i < grid.length - 1)
				gridArrayOutput.value = gridArrayOutput.value + grid[i] + ", ";
			else
				gridArrayOutput.value = gridArrayOutput.value + grid[i] + " ];";
		}
	}
}