export function getDotPosition(deg: number, radius = 250) {
	const rad = (deg * Math.PI) / 180;
	const x = Math.cos(rad) * radius;
	const y = -Math.sin(rad) * radius;

	return { x, y };
}

export function getPositions(amountDots: number) {
	const degrees = 360 / amountDots;
	return Array.from({ length: amountDots }, (_, i) => i * degrees + 60);
}