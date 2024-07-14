import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';

const WarehouseBanner = () => {
	return (
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
	);
};

export default WarehouseBanner;
