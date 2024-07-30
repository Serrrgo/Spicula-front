'use-client';

import Providers from '../providers/Providers';
import MainLayout from './MainLayout/MainLayout';

//export const metadata: Metadata = {
//	title: {
//		template: `%s | ${SITE_NAME}`,
//		default: `Главная | ${SITE_NAME}`,
//	},
//	description: 'Mагазин инновационной косметики эксперта Ирины Шатовой',
//};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Providers>
			<MainLayout>{children}</MainLayout>
		</Providers>
	);
}
