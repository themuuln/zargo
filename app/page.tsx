'use client';

import useLogic from '@/app/logic';
// ui
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { IoReloadOutline } from 'react-icons/io5';
import Link from 'next/link';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useEffect } from 'react';

export default function Home() {
	const logic = useLogic();

	return (
		<main className='flex min-h-screen gap-4 flex-col items-center '>
			<div className='max-w-xl flex min-h-screen  items-center gap-4 flex-col'>
				<Carousel className='w-full max-w-xs'>
					<CarouselContent>
						{Array.from({ length: 3 }).map((_, index) => (
							<CarouselItem key={index}>
								<div className='p-1'>
									<Card>
										<AspectRatio ratio={16 / 9} className={'flex items-center justify-center'}>
											<CardContent className='flex items-center justify-center p-6'>
												<span className='text-4xl font-semibold'>Хаяг {index + 1}</span>
											</CardContent>
										</AspectRatio>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
				<div className='flex w-full max-w-sm items-center space-x-2'>
					<Input
						value={logic.inputValue}
						onChange={(e) => logic.setInputValue(e.target.value)}
						type='email'
						placeholder='Илгээмжийн дугаар (Track Number)'
					/>
					<Button onClick={() => logic.handleAddTrackNumber()} type='submit'>
						Бүртгүүлэх
					</Button>
				</div>

				<Tabs defaultValue='all'>
					<TabsList>
						{['all', 'registered', 'onWay', 'arrived', 'closed'].map((tab) => (
							<TabsTrigger key={tab} value={tab}>
								{tab === 'all' && 'Бүгд'}
								{tab === 'registered' && 'Бүртгэгдсэн'}
								{tab === 'onWay' && 'Замдаа'}
								{tab === 'arrived' && 'Ирсэн'}
								{tab === 'closed' && 'Хаагдсан'}
							</TabsTrigger>
						))}
					</TabsList>
					{['all', 'registered', 'onWay', 'arrived', 'closed'].map((tab) => (
						<TabsContent key={tab} value={tab}>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Дугаар</TableHead>
										<TableHead>Өдөр</TableHead>
										<TableHead>Төлөв</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{logic.trackNumbers
										.filter((t) => (tab === 'all' ? true : t.status === ['registered', 'onWay', 'arrived', 'closed'].indexOf(tab)))
										.map((track) => (
											<TableRow key={track.number}>
												<TableCell className='font-medium'>{track.number}</TableCell>
												<TableCell>{track.date}</TableCell>
												<TableCell className='text-right'>
													{track.status === 0 ? 'Бүртгэгдсэн' : track.status === 1 ? 'Замдаа' : track.status === 2 ? 'Ирсэн' : 'Хаагдсан'}
												</TableCell>
											</TableRow>
										))}
								</TableBody>
								<TableFooter>
									<TableRow>
										<TableCell colSpan={3}>Нийт</TableCell>
										<TableCell className='text-right'>{logic.trackNumbers.length}</TableCell>
									</TableRow>
								</TableFooter>
							</Table>
						</TabsContent>
					))}
				</Tabs>
				<div className={'grid gap-2 grid-cols-3 '}>
					<Link href={'/address'}>
						<Button onClick={() => logic.handleButtonClick()} className={'gap-2 w-full'} disabled>
							<IoReloadOutline className={'animate-spin'} />
							Хаяг холбох
						</Button>
					</Link>
					<Button loading={true}>Тооцоолуур</Button>
					<Button variant={'outline'}>Заавар сургалт</Button>
					<Button variant={'outline'}>Үйлчилгээний нөхцөл</Button>
					<Button variant={'outline'}>Холбоо барих</Button>
				</div>
			</div>
		</main>
	);
}
