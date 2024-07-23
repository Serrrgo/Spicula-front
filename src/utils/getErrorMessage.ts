import { AxiosError } from 'axios';
import { errorTypes } from '@/config/serverErrors.config';
import { IAuthError } from '@/store/user/user.interface';

export const getErrorMessage = (errorObj: AxiosError<IAuthError>) => {
	const errorMsg = errorObj.response?.data.message;
	let res = errorTypes.find(el => el.eng === errorMsg);
	return res?.ru;
};
