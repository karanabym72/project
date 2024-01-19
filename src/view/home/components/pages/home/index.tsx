import {useRouter} from 'next/router';
import next from 'next';
import HomeSlider from './homeBanner';
import BookingForm from './bookingForm';
import WelCome from './WelCome';
import SpecialEvents from './SpecialEvents';
import Comfort from './Comfort';
import Gallery from './Gallery';
import Getaway from './Getaway';
import Customers from './Customers';
import Latest from './Latest';

const PagesHome = () => {
	const router = useRouter();
	return (
		<main className="h-full">
			<HomeSlider />
			<BookingForm />
			<WelCome/>
			<SpecialEvents/>
			<Comfort/>
			<Gallery/>
			<Getaway/>
			<Customers/>
			<Latest/>
			
			
			
			
		</main>
	);
};

export default PagesHome;
