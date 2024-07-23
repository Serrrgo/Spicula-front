import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../cart/cart.slice';

export const useCartActions = () => {
	const dispatch = useDispatch();
	return useMemo(
		() => bindActionCreators(cartSlice.actions, dispatch),
		[dispatch],
	);
};
