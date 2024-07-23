import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '@/utils/localStorage';
import { closeModal } from '../auth/auth.slice';
import { IInitialState, IUserState } from './user.interface';

const initialState: IInitialState = {
	user: getLocalStorage('name'),
	isLoading: false,
	error: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IUserState>) {
			state.user = action.payload;
		},
		clearUser(state) {
			state.user = null;
		},
		setLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		setError(state, action: PayloadAction<string | null>) {
			state.error = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			//		.addCase(register.pending, state => {
			//			state.isLoading = true;
			//			state.error = null;
			//		})
			//		.addCase(register.fulfilled, (state, { payload }) => {
			//			console.log(payload.user);
			//			(state.isLoading = false), (state.user = payload.user);
			//		})
			//		.addCase(register.rejected, (state, action) => {
			//			state.isLoading = false;
			//			state.user = null;
			//			state.error = action.payload;
			//		})
			//		.addCase(login.pending, state => {
			//			state.isLoading = true;
			//			state.error = null;
			//		})
			//		.addCase(login.fulfilled, (state, { payload }) => {
			//			(state.isLoading = false), (state.user = payload.user);
			//		})
			//		.addCase(login.rejected, (state, action) => {
			//			state.isLoading = false;
			//			state.user = null;
			//			state.error = action.payload;
			//		})
			//		.addCase(logout.fulfilled, state => {
			//			state.isLoading = false;
			//			state.user = null;
			//		})
			//		.addCase(checkAuth.fulfilled, (state, { payload }) => {
			//			state.user = payload.user;
			//		})
			.addCase(closeModal, state => {
				state.error = null;
			});
	},
});
export const { setUser, clearUser, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
