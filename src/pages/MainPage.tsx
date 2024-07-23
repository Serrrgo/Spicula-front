import { TypedStaticProps } from '.';
import { FC } from 'react';
import SectionBestsells from '@/components/mainPage/SectionBestsells';
import SectionFAQ from '@/components/mainPage/SectionFAQ';
import SectionHead from '@/components/mainPage/SectionHead';
import SectionPopulars from '@/components/mainPage/SectionPopulars';
import SectionTips from '@/components/mainPage/SectionTips';
import SectionAbout from '@/components/mainPage/sectionAbout';

const MainPage: FC<TypedStaticProps> = ({ populars, bestsells }) => {
	return (
		<>
			<SectionHead />
			<SectionBestsells products={bestsells.products} />
			<SectionTips />
			<SectionPopulars products={populars.products} />
			<SectionAbout />
			<SectionFAQ />
		</>
	);
};

export default MainPage;
