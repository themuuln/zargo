'use client';

import useLogic from '@/app/logic';
// ui
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { IoReloadOutline } from 'react-icons/io5';

export default function Home() {
	const logic = useLogic();
	return (
		<main className='flex min-h-screen flex-col items-center '>
			<Carousel className='w-full max-w-xs'>
				<CarouselContent>
					{Array.from({ length: 3 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className='p-1'>
								<Card>
									<CardContent className='flex aspect-square items-center justify-center p-6'>
										<span className='text-4xl font-semibold'>Хаяг {index + 1}</span>
									</CardContent>
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

			<Tabs defaultValue='all' className='w-[400px]'>
				<TabsList>
					<TabsTrigger value='all'>Бүгд</TabsTrigger>
					<TabsTrigger value='registered'>Бүртгэгдсэн</TabsTrigger>
					<TabsTrigger value='onWay'>Замдаа</TabsTrigger>
					<TabsTrigger value='arrived'>Ирсэн</TabsTrigger>
					<TabsTrigger value='closed'>Хаагдсан</TabsTrigger>
				</TabsList>
				<TabsContent value='all'>
					<p>Бүх дугаарууд:</p>
					{logic.trackNumbers.map((track) => (
						<div key={track.number}>
							<p>Number: {track.number}</p>
							<p>Status: {track.status === 0 ? 'Бүртгэгдсэн' : track.status === 1 ? 'Замдаа' : track.status === 2 ? 'Ирсэн' : 'Хаагдсан'}</p>
							<p>Date: {track.date}</p>
						</div>
					))}
				</TabsContent>
				<TabsContent value='registered'>
					<p>Бүртгэгдсэн дугаарууд:</p>
					{logic.trackNumbers
						.filter((t) => t.status === 0)
						.map((track) => (
							<div key={track.number}>
								<p>Number: {track.number}</p>
								<p>Status: {track.status === 0 ? 'Бүртгэгдсэн' : track.status === 1 ? 'Замдаа' : track.status === 2 ? 'Ирсэн' : 'Хаагдсан'}</p>
								<p>Date: {track.date}</p>
							</div>
						))}
				</TabsContent>
				<TabsContent value='onWay'>
					<p>Замдаа дугаарууд:</p>
					{logic.trackNumbers
						.filter((t) => t.status === 1)
						.map((track) => (
							<div key={track.number}>
								<p>Number: {track.number}</p>
								<p>Status: {track.status === 0 ? 'Бүртгэгдсэн' : track.status === 1 ? 'Замдаа' : track.status === 2 ? 'Ирсэн' : 'Хаагдсан'}</p>
								<p>Date: {track.date}</p>
							</div>
						))}
				</TabsContent>
				<TabsContent value='arrived'>
					<p>Замдаа дугаарууд:</p>
					{logic.trackNumbers
						.filter((t) => t.status === 2)
						.map((track) => (
							<div key={track.number}>
								<p>Number: {track.number}</p>
								<p>Status: {track.status === 0 ? 'Бүртгэгдсэн' : track.status === 1 ? 'Замдаа' : track.status === 2 ? 'Ирсэн' : 'Хаагдсан'}</p>
								<p>Date: {track.date}</p>
							</div>
						))}
				</TabsContent>
				<TabsContent value='closed'>
					<p>Замдаа дугаарууд:</p>
					{logic.trackNumbers
						.filter((t) => t.status === 3)
						.map((track) => (
							<div key={track.number}>
								<p>Number: {track.number}</p>
								<p>Status: {track.status === 0 ? 'Бүртгэгдсэн' : track.status === 1 ? 'Замдаа' : track.status === 2 ? 'Ирсэн' : 'Хаагдсан'}</p>
								<p>Date: {track.date}</p>
							</div>
						))}
				</TabsContent>
			</Tabs>
			<div className={'grid gap-2 grid-cols-3 '}>
				<Button onClick={() => logic.handleButtonClick()} className={'gap-2'} disabled>
					<IoReloadOutline className={'animate-spin'} />
					Хаяг холбох
				</Button>
				<Button>Тооцоолуур</Button>
				<Button variant={'outline'}>Заавар сургалт</Button>
				<Button variant={'outline'}>Үйлчилгээний нөхцөл</Button>
				<Button variant={'outline'}>Холбоо барих</Button>
			</div>
		</main>
	);
}
