'use client';

import useLogic from '@/app/logic';
import ListTable from '@/components/list-table';
import Navigations from '@/components/navigations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

				<ListTable logic={logic} />
				<Navigations />
			</div>
		</main>
	);
}
