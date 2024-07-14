'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';

type Dimensions = 'length' | 'width' | 'height' | 'weight';

function calculateShippingCost(
	length: number,
	width: number,
	height: number,
	weight: number,
): number {
	const volumeInCubicMeters = (length * width * height) / 1000000;
	const pricePerKg = 3000;
	const pricePerCubicMeterUnder1 = 599 * 280; // Assuming 1 CNY = 280 MNT
	const pricePerCubicMeterOver1 = 399 * 280; // Assuming 1 CNY = 280 MNT

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

const Page = () => {
	const [size, setSize] = useState<Record<Dimensions, number>>({
		length: 10,
		width: 10,
		height: 10,
		weight: 1,
	});

	const [shippingCost, setShippingCost] = useState<number>(0);

	useEffect(() => {
		const cost = calculateShippingCost(
			size.length,
			size.width,
			size.height,
			size.weight,
		);

		setShippingCost(cost);
	}, [size]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		if (value === '') {
			setSize((prev) => ({ ...prev, [name]: 0 }));
			return;
		}

		const numericValue = parseFloat(value);

		if (!isNaN(numericValue)) {
			setSize((prev) => ({ ...prev, [name]: numericValue }));
		}
	};

	const inputData = [
		{ name: 'width', label: 'Өргөн', placeholder: 'Өргөн (мм)' },
		{ name: 'height', label: 'Өндөр', placeholder: 'Өндөр (мм)' },
		{ name: 'length', label: 'Урт', placeholder: 'Урт (мм)' },
		{ name: 'weight', label: 'Жин', placeholder: 'Жин (кг)' },
	] as const;

	return (
		<div className='container py-4 md:py-8'>
			<div className='flex flex-col gap-4 md:flex-row'>
				{inputData.map((item) => (
					<div key={item.name} className='space-y-2'>
						<Label>{item.label}</Label>
						<Input
							type='number'
							value={size[item.name].toString()}
							onChange={handleChange}
							name={item.name}
							placeholder={item.placeholder}
							min='0'
						/>
					</div>
				))}
			</div>
			<div className='mt-4'>
				<Label>Тээврийн зардал</Label>
				<div>
					₮
					{shippingCost
						.toLocaleString('mn-MN', { maximumFractionDigits: 0 })
						.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
				</div>
			</div>
		</div>
	);
};

export default Page;
