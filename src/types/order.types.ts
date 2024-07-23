import { ICartItem } from './cart.types';
import { IBase } from './root.types';
import { IUserProfile } from './user.types';


enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED',
}

export interface IOrder extends IBase {
	items: ICartItem;
	status: EnumOrderStatus;
	user: IUserProfile;
}