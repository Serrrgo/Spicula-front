import { SITE_PAGES } from '@/config/pages-url.config';

export interface IGlobalLink {
	title: string;
	href: string;
}

export const NAV_LINKS: IGlobalLink[] = [
	{
		title: 'Главная',
		href: SITE_PAGES.HOME,
	},
	{
		title: 'Каталог',
		href: SITE_PAGES.CATALOG,
	},
	{
		title: 'О нас',
		href: SITE_PAGES.ABOUT,
	},
	{
		title: 'Контакты',
		href: SITE_PAGES.ABOUT,
	},
];
