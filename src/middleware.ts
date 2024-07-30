import { NextRequest, NextResponse } from 'next/server';
import { SITE_PAGES } from '@/config/pages-url.config';
import { EnumTokens } from '@/services/auth/auth-token.service';

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request;

	// * получаем доступ к куке
	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
	console.log(refreshToken);
	// * проверка страницы
	const isAuthPage = url.includes('/auth');

	// * если есть токен - отправляем сразу в ЛК
	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(SITE_PAGES.USER, url));
	}
	// * если токена нет и попытка попасть на страницу авторизации - пропускаем
	if (isAuthPage) {
		return NextResponse.next();
	}
	// * если пользователь не авторизаован - редирект на авторизацию
	if (!refreshToken) {
		return NextResponse.redirect(new URL(SITE_PAGES.HOME, url));
	}

	// * поведение по умолчанию - пропуск по страницам
	return NextResponse.next();
}

// ! "защищенные" страницы, недоступные с улицы
export const config = {
	matcher: ['/user', '/auth'],
};
