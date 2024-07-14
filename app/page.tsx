'use client';

import useLogic from '@/app/logic';
// ui
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { IoReloadOutline } from 'react-icons/io5';
import WarehouseBanner from '@/components/warehouse';

export default function Home() {
	const logic = useLogic();

	return (
		<main className='flex flex-col items-center min-h-screen gap-4 pt-4 md:pt-8'>
			<div className='flex flex-col items-center max-w-xl min-h-screen gap-4'>
				<WarehouseBanner />
				<div className='flex items-center w-full max-w-sm space-x-2'>
					<Input
						value={logic.inputValue}
						ref={logic.inputRef}
						onChange={(e) => logic.setInputValue(e.target.value)}
						onKeyDown={(e) => e.key === 'Enter' && logic.handleAddTrackNumber()}
						type='email'
						placeholder='Илгээмжийн дугаар (Track Number)'
					/>
					<Button
						size={'sm'}
						onClick={() => logic.handleAddTrackNumber()}
						type='submit'
					>
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
										.filter((t) =>
											tab === 'all'
												? true
												: t.status ===
													['registered', 'onWay', 'arrived', 'closed'].indexOf(
														tab,
													),
										)
										.map((track) => (
											<TableRow key={track.number}>
												<TableCell className='font-medium'>
													{track.number}
												</TableCell>
												<TableCell>{track.date}</TableCell>
												<TableCell className='text-right'>
													{track.status === 0
														? 'Бүртгэгдсэн'
														: track.status === 1
															? 'Замдаа'
															: track.status === 2
																? 'Ирсэн'
																: 'Хаагдсан'}
												</TableCell>
											</TableRow>
										))}
								</TableBody>
								<TableFooter>
									<TableRow>
										<TableCell colSpan={3}>Нийт</TableCell>
										<TableCell className='text-right'>
											{logic.trackNumbers.length}
										</TableCell>
									</TableRow>
								</TableFooter>
							</Table>
						</TabsContent>
					))}
				</Tabs>
				<div className={'grid gap-2 grid-cols-3 '}>
					<Link href={'/address'}>
						<Button
							onClick={() => logic.handleButtonClick()}
							className={'gap-2 w-full'}
						>
							{/* <IoReloadOutline className={'animate-spin'} /> */}
							Хаяг холбох
						</Button>
					</Link>
					<Link href={'/calc'}>
						<Button className={'gap-2 w-full'}>Тооцоолуур</Button>
					</Link>
					<Button>Заавар сургалт</Button>
					<Button>Үйлчилгээний нөхцөл</Button>
					<Button>Холбоо барих</Button>
				</div>
			</div>
		</main>
	);
}
