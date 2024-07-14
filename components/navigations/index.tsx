import Link from 'next/link';
import { Button } from '../ui/button';

const Navigations = () => {
	return (
		<div className={'grid gap-2 grid-cols-3 '}>
			<Link href={'/address'}>
				<Button className={'gap-2 w-full'}>Хаяг холбох</Button>
			</Link>
			<Link href={'/calc'}>
				<Button className={'gap-2 w-full'}>Тооцоолуур</Button>
			</Link>
			<Button disabled>Заавар сургалт</Button>
			<Button disabled>Үйлчилгээний нөхцөл</Button>
			<Button disabled>Холбоо барих</Button>
		</div>
	);
};

export default Navigations;
