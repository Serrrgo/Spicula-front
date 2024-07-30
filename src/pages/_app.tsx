import type { Metadata } from 'next';
import { AppProps } from 'next/app';
import '@/components/mainPage/mainPage.sass';
import { SITE_NAME } from '@/constants/seo.constants';
import '../styles/globals.sass';
import '../styles/typogrphy.sass';
import '../styles/vars.sass';
import './layouts/MainLayout/Footer/Footer.sass';
import './layouts/MainLayout/Header/Header.sass';
import Layout from '@/pages/layouts/Layout';

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
