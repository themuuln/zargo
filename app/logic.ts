// logic with local storage
import dateFormat, { masks } from 'dateformat';
import { toast } from 'sonner';
import { useEffect, useState, useRef } from 'react';
import { TrackNumberDataType } from '@/app/types';

const useLogic = () => {
	const [trackNumbers, setTrackNumbers] = useState<TrackNumberDataType[]>([]);
	const [inputValue, setInputValue] = useState<string>('');
	const [loadingButton, setLoadingButton] = useState({ id: '', status: false });
	const now = new Date();
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		// const storedTrackNumbers = JSON.parse(localStorage.getItem('trackNumbers') || '[]');
		// setTrackNumbers(storedTrackNumbers);
	}, []);

	const handleAddTrackNumber = () => {
		if (inputValue === '') return;
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
		inputRef.current?.focus();
	};

	const handleButtonClick = () => {};
	return { inputRef, inputValue, setInputValue, handleAddTrackNumber, trackNumbers, loadingButton, setLoadingButton, handleButtonClick };
};

export default useLogic;
