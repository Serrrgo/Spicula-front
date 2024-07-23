import { IOrder } from './order.types';
import { IReview } from './review.types';
import { IBase } from './root.types';

export interface IUserProfile extends IBase {
	id: string;
	email: string;
	password: string;
	firstName: string;
	phone?: string;
	secondName?: string;
	surname?: string;
	sex?: EnumSex;
	birthDate?: string;
	isVerified: boolean;
	orders: IOrder[];
	reviews: IReview[];
	addresses: string[];
	favorites: IFavorites[];
}

export interface IFavorites {
	userId: string;
	productId: string;
}

enum EnumSex {
	MALE = 'male',
	FEMALE = 'female',
}
