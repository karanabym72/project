import MoleculesMetaHeader from '@/view/common/components/molecules/meta-header';
import {SEO} from '@/view/common/constants/seo';
import {NextPageWithLayout} from '@/view/common/types';
import BanquetPage from '@/view/home/components/pages/banquet';



const Page: NextPageWithLayout = () => (
	<>
		<MoleculesMetaHeader
			title="Ada Adobe"
			description={SEO.description}
			keywords={SEO.keywords}
			image={SEO.image}
		/>
		<BanquetPage/>
		
	</>
);

export default Page;