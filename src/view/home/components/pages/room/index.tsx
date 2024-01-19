import { useRouter } from 'next/router';
import React from 'react';
import RoomBanner from './RoomBanner';
import Contemporary from './Contemporary';

const PagesRoom = () => {
	const router = useRouter();
	return (
		<>
			<RoomBanner />

			<Contemporary/>

		</>
	);
};

export default PagesRoom;
