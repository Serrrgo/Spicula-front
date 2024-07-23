import { IUserProfile } from './user.types';
import { IBase } from './root.types';


export interface IReview extends IBase {
	user: IUserProfile;
	text: string;
	rating: string;
}