import { PropsWithChildren, useLayoutEffect } from 'react';
import useAuth from '@/hooks/useAuth';
import { getAccessToken } from '@/services/auth/auth-token.service';

export default function AuthProvider({ children }: PropsWithChildren) {
	const { checkAuth, logout } = useAuth();

	useLayoutEffect(() => {
		const accessToken = getAccessToken();
		if (accessToken) {
			checkAuth();
		} else {
			logout();
		}
	}, []);

	return <>{children}</>;
}
