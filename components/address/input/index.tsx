import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { toast } from 'sonner';

const RenderInput = ({
	item,
	index,
	copiedList,
	setCopiedList,
}: {
	index: number;
	item: { label: string; value: string; icon: ReactNode };
	copiedList: number[];
	setCopiedList: Dispatch<SetStateAction<number[]>>;
}) => {
	const onClickCopy = () => {
		setCopiedList((prev: number[]) =>
			prev.includes(index) ? prev : [...prev, index],
		);
		navigator.clipboard.writeText(item?.value);
		toast('Амжилттай хуулагдлаа');
	};
	return (
		<div className='space-y-2'>
			<Label>{item?.label}</Label>
			<div className='flex items-center space-x-2'>
				<div
					className={`bg-secondary dark:bg-muted ${
						copiedList.includes(index) ? 'ring-2 ring-primary' : ''
					} transition-all duration-200 rounded-full flex justify-center items-center w-12 h-12`}
				>
					{item?.icon}
				</div>
				<Input value={item?.value} />
				<Button onClick={onClickCopy}>Хуулах</Button>
			</div>
		</div>
	);
};

export default RenderInput;
