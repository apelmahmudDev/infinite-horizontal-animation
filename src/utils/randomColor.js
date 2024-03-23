export function getRandomColor() {
	// Random between 0 and 255
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	// RGB format
	const color = "rgb(" + red + ", " + green + ", " + blue + ")";

	return color;
}
