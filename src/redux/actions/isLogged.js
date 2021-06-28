import * as CONST from 'utils/constants/actionTypes';

export const login = () => {
	return {
		type: CONST.LOG_IN,
	};
};

export const logout = () => {
	return {
		type: CONST.LOG_OUT,
	};
};

