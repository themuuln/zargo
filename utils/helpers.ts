export function calculateShippingCost(
	length: number,
	width: number,
	height: number,
	weight: number,
): number {
	const volumeInCubicMeters = (length * width * height) / 1000000;
	const pricePerKg = 3000;
	const pricePerCubicMeterUnder1 = 599 * 480;
	const pricePerCubicMeterOver1 = 399 * 480;

	let volumeCost: number;
	if (volumeInCubicMeters <= 1) {
		volumeCost = volumeInCubicMeters * pricePerCubicMeterUnder1;
	} else {
		volumeCost = volumeInCubicMeters * pricePerCubicMeterOver1;
	}

	let weightCost: number;
	if (weight <= 1) {
		weightCost = 3000;
	} else {
		weightCost = 3000 + (weight - 1) * pricePerKg;
	}

	return Math.max(volumeCost, weightCost);
}
