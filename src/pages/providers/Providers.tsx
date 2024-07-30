import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/store/store';
import AuthProvider from './authProvider';

export default function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		}),
	);

	return (
		<QueryClientProvider client={client}>
			<Provider store={store}>
				<PersistGate
					loading={null}
					persistor={persistor}
				>
					<AuthProvider>{children}</AuthProvider>
					<ReactQueryDevtools initialIsOpen={false} />
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	);
}
