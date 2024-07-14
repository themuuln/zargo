export type TrackNumberDataType = {
	id: string;
	trackNumber: string;
	recipient: string;
	status: {
		text: string;
		id: number;
		value: 'registered' | 'onWay' | 'arrived' | 'closed';
	};
	createdDate: string;
	picture: string[];
};

export type TrackTypes = 'all' | 'registered' | 'onWay' | 'arrived' | 'closed';
