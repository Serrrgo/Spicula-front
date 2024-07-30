import { Toaster } from 'sonner';
import AsideLayout from './Aside/AsideLayout';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { montserrat } from '@/styles/fonts';

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
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
		</>
	);
}
