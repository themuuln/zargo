import { TrackNumberDataType, type TrackTypes } from '@/app/types';
import useAuth from '@/hooks/useAuth';
import { supabase } from '@/lib/initSupabase';
import dateFormat from 'dateformat';
import {
	useEffect,
	useRef,
	useState,
	type Dispatch,
	type MutableRefObject,
	type SetStateAction,
} from 'react';
import { toast } from 'sonner';

export type CoreLogic = {
	inputRef: MutableRefObject<HTMLInputElement | null>;
	inputValue: string;
	setInputValue: Dispatch<SetStateAction<string>>;
	handleAddTrackNumber: () => void;
	trackNumbers: TrackNumberDataType[];
	loadingButton: { id: string; status: boolean };
	setLoadingButton: Dispatch<SetStateAction<{ id: string; status: boolean }>>;
	handleTabChange: (tab: TrackTypes) => void;
};

const useLogic = (): CoreLogic => {
	const [trackNumbers, setTrackNumbers] = useState<TrackNumberDataType[]>([]);
	const [inputValue, setInputValue] = useState<string>('');
	const [loadingButton, setLoadingButton] = useState({ id: '', status: false });
	const now = new Date();
	const inputRef = useRef<HTMLInputElement>(null);
	const { user } = useAuth();
	const [hasFetched, setHasFetched] = useState<boolean>(false);
	const [selectedTab, setSelectedTab] = useState<TrackTypes>(
		'all' as TrackTypes,
	);
	const [added, setAdded] = useState<number>(0);

	useEffect(() => {
		const fetchData = async () => {
			if (user?.id && selectedTab && !hasFetched) {
				const { data, error } = await supabase
					.from('trackNumbers')
					.select('status, recipient, trackNumber, createdDate')
					.eq('recipient', user.id);

				if (error) {
					console.log('error', error);
				} else {
					// @ts-ignore
					setTrackNumbers(data);
					setHasFetched(true);
				}
			}
		};

		fetchData();
	}, [selectedTab, user, hasFetched]);

	const handleTabChange = (tab: TrackTypes) => {
		setSelectedTab(tab);
	};

	const handleAddTrackNumber = async () => {
		if (inputValue === '') return;

		if (user?.role !== 'authenticated') {
			toast.error('Та нэвтэрнэ үү');
			return;
		}

		const { error } = await supabase.from('trackNumbers').insert({
			trackNumber: inputValue,
			status: {
				text: 'Бүртгэгдсэн',
				id: 0,
			},
			recipient: user.id,
			createdDate: dateFormat(now, 'yyyy-mm-dd, h:MM'),
		});

		if (error) {
			console.log('error', error);
			return;
		}

		toast('Илгээмжийн дугаар бүртгэгдлээ', {
			description: dateFormat(now, 'yyyy-mm-dd, h:MM'),
			action: {
				label: 'Цуцлах',
				onClick: () => {
					toast('Цуцлах үед алдаа гарлаа');
				},
			},
		});

		setAdded((prev) => prev + 1);
		setInputValue('');
		inputRef.current?.focus();
	};

	return {
		inputRef,
		inputValue,
		setInputValue,
		handleAddTrackNumber,
		trackNumbers,
		loadingButton,
		setLoadingButton,
		handleTabChange,
	};
};

export default useLogic;
