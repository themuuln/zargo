// logic with local storage
import dateFormat, { masks } from 'dateformat';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { TrackNumberDataType } from '@/app/types';

const useLogic = () => {
	const [trackNumbers, setTrackNumbers] = useState<TrackNumberDataType[]>([]);
	const [inputValue, setInputValue] = useState<string>('');
	const [loadingButton, setLoadingButton] = useState({ id: '', status: false });
	const now = new Date();

	useEffect(() => {
		// const storedTrackNumbers = JSON.parse(localStorage.getItem('trackNumbers') || '[]');
		// setTrackNumbers(storedTrackNumbers);
	}, []);

	const handleAddTrackNumber = () => {
		const updatedTrackNumbers = [...trackNumbers, { number: inputValue, status: 0, date: dateFormat(now, 'yyyy-mm-dd, h:MM'), picture: [''] }];
		setTrackNumbers(updatedTrackNumbers);

		toast('Илгээмжийн дугаар бүртгэгдлээ', {
			description: dateFormat(now, 'yyyy-mm-dd, h:MM'),
			action: {
				label: 'Цуцлах',
				onClick: () => console.log('Undo'),
			},
		});
		setInputValue('');
	};

	const handleButtonClick = () => {};
	return { inputValue, setInputValue, handleAddTrackNumber, trackNumbers, loadingButton, setLoadingButton, handleButtonClick };
};

export default useLogic;
