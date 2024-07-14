import type { CoreLogic } from '@/app/logic';
import type { TrackNumberDataType } from '@/app/types';
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ListTable = ({ logic: l }: { logic: CoreLogic }) => {
	const tabs = ['all', 'registered', 'onWay', 'arrived', 'closed'] as const;
	return (
		<Tabs defaultValue='all'>
			<TabsList>
				{tabs.map((tab) => (
					<TabsTrigger
						onClick={() => l.handleTabChange(tab)}
						key={tab}
						value={tab}
					>
						{tab === 'all' && 'Бүгд'}
						{tab === 'registered' && 'Бүртгэгдсэн'}
						{tab === 'onWay' && 'Замдаа'}
						{tab === 'arrived' && 'Ирсэн'}
						{tab === 'closed' && 'Хаагдсан'}
					</TabsTrigger>
				))}
			</TabsList>
			{tabs.map((tab) => (
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
							{l.trackNumbers.map((track) => (
								<TableRow key={track.trackNumber}>
									<TableCell className='font-medium'>
										{track.trackNumber}
									</TableCell>
									<TableCell>{track.createdDate}</TableCell>
									<TableCell className='text-right'>
										{track.status.text}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell colSpan={3}>Нийт</TableCell>
								<TableCell className='text-right'>
									{l.trackNumbers.length}
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
				</TabsContent>
			))}
		</Tabs>
	);
};

export default ListTable;
