import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/auth.slice';
//import { createPersistStorage } from '@/utils/storage';
//import { carouselSlice } from './carousel/carousel.slice';
import { cartSlice } from './cart/cart.slice';
import { userSlice } from './user/user.slice';

// ? Конфигурация сохраняемых данных в ls
const persistStoreConfig = {
	key: 'spicula',
	storage,
	//storage: createPersistStorage(),
	whitelist: ['cart'],
};

// ? Объединение редьюсеров
const rootReducer = combineReducers({
	user: userSlice.reducer,
	auth: authSlice.reducer,
	cart: cartSlice.reducer,
	//carousel: carouselSlice.reducer,
});

const persistedReducer = persistReducer(persistStoreConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
			},
		}),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
