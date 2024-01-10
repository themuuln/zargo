// 'use client';
//
// import useLogic from '@/app/logic';
// // ui
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
//
// const TrackNumberTabs = () => {
// 	const logic = useLogic();
//
// 	return (
// 		<Tabs defaultValue='all' className='w-[400px]'>
// 			<TabsList>
// 				<TabsTrigger value='all'>Бүгд</TabsTrigger>
// 				<TabsTrigger value='registered'>Бүртгэгдсэн</TabsTrigger>
// 				<TabsTrigger value='onWay'>Замдаа</TabsTrigger>
// 				<TabsTrigger value='arrived'>Ирсэн</TabsTrigger>
// 				<TabsTrigger value='closed'>Хаагдсан</TabsTrigger>
// 			</TabsList>
//
// 			<TabsContent value='all'>
// 				<TrackNumberList trackNumbers={logic.trackNumbers} />
// 			</TabsContent>
// 			<TabsContent value='registered'>
// 				<TrackNumberList trackNumbers={logic.getFilteredTrackNumbers(0)} />
// 			</TabsContent>
// 			<TabsContent value='onWay'>
// 				<TrackNumberList trackNumbers={logic.getFilteredTrackNumbers(1)} />
// 			</TabsContent>
// 			<TabsContent value='arrived'>
// 				<TrackNumberList trackNumbers={logic.getFilteredTrackNumbers(2)} />
// 			</TabsContent>
// 			<TabsContent value='closed'>
// 				<TrackNumberList trackNumbers={logic.getFilteredTrackNumbers(3)} />
// 			</TabsContent>
// 		</Tabs>
// 	);
// };
//
// const TrackNumberList = ({ trackNumbers }) => (
// 	<div>
// 		<p>{getStatusText(trackNumbers)}</p>
// 		{trackNumbers.map((track) => (
// 			<div key={track.number}>
// 				<p>Number: {track.number}</p>
// 				<p>Status: {getStatusText(track.status)}</p>
// 				<p>Date: {track.date}</p>
// 			</div>
// 		))}
// 	</div>
// );
//
// const getStatusText = (status) => {
// 	switch (status) {
// 		case 0:
// 			return 'Бүртгэгдсэн';
// 		case 1:
// 			return 'Замдаа';
// 		case 2:
// 			return 'Ирсэн';
// 		case 3:
// 			return 'Хаагдсан';
// 		default:
// 			return '';
// 	}
// };
//
// export default TrackNumberTabs;
