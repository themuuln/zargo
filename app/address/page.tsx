'use client';
import RenderInput from '@/components/address/input';
import { useState } from 'react';
import { data } from './data';

const Page = () => {
	const [copiedList, setCopiedList] = useState<number[]>([]);

	return (
		<main className='container py-4 space-y-4 md:py-8'>
			<div className='space-y-1'>
				<h1>ЭРЭЭН ХОТ</h1>
				<p>Эрээн хотын агуулах хаяг</p>
			</div>
			<div className='space-y-4'>
				{data.map((item, idx) => (
					<RenderInput copiedList={copiedList} index={idx} key={idx} item={item} setCopiedList={setCopiedList} />
				))}
			</div>
		</main>
	);
};

export default Page;
