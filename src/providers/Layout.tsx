'use-client';

import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import AsideLayout from '@/layout/Aside/AsideLayout';
import Footer from '@/layout/Footer/Footer';
import Header from '@/layout/Header/Header';
import Providers from '@/providers/Providers';
import { SITE_NAME } from '@/constants/seo.constants';
import { montserrat } from '@/styles/fonts';

export const metadata: Metadata = {
	title: {
		template: `%s | ${SITE_NAME}`,
		default: `Главная | ${SITE_NAME}`,
	},
	description: 'Mагазин инновационной косметики эксперта Ирины Шатовой',
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Providers>
			<Header />
			<main className={montserrat.className}>
				<AsideLayout />
				{children}
			</main>
			<Footer />
			<Toaster
				theme='light'
				position='bottom-right'
				duration={3000}
				richColors
				toastOptions={{
					style: {
						zIndex: 1000,
					},
				}}
			/>
		</Providers>
	);
}
