import { useTypedSelector } from './useTypedSelector';

export const useCart = () =>
	useTypedSelector(state => {
		//console.log(state.user);
		return state.cart;
	});
