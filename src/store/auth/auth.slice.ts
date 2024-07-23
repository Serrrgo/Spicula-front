import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	isVisible: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		openModal: (state) => {
			state.isVisible = true;
		},
		closeModal: (state) => {
			state.isVisible = false;
		},
	},
});

export const { openModal, closeModal } = authSlice.actions;