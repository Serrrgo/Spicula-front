import type { Metadata } from 'next';
import { AppProps } from 'next/app';
import '@/components/mainPage/mainPage.sass';
import Layout from '@/providers/Layout';
import { SITE_NAME } from '@/constants/seo.constants';
import '../layout/Footer/Footer.sass';
import '../layout/Header/Header.sass';
import '../styles/globals.sass';
import '../styles/typogrphy.sass';
import '../styles/vars.sass';

export const metadata: Metadata = {
	title: {
		template: `%s | ${SITE_NAME}`,
		default: `Главная | ${SITE_NAME}`,
	},
	description: 'Mагазин инновационной косметики эксперта Ирины Шатовой',
};

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
