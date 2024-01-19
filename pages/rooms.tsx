import MoleculesMetaHeader from '@/view/common/components/molecules/meta-header';
import {SEO} from '@/view/common/constants/seo';
import {NextPageWithLayout} from '@/view/common/types';
import RoomsDetails from '@/view/home/components/pages/rooms';

const Page: NextPageWithLayout = () => (
	<>
		<MoleculesMetaHeader
			title="Ada Adobe"
			description={SEO.description}
			keywords={SEO.keywords}
			image={SEO.image}
		/>
		<RoomsDetails/>
	</>
);

export default Page;
