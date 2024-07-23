import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

const montserrat = Montserrat({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--base-font',
	style: ['normal'],
});

const titleFont = localFont({ src: './fonts/title-font.woff2' });

export { montserrat, titleFont };
