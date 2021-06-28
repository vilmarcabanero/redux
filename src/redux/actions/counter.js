import * as CONST from 'utils/constants/actionTypes';

export const increment = (value = 1) => {
	return {
		type: CONST.INCREMENT,
		payload: value,
	};
};

export const decrement = () => {
	return {
		type: CONST.DECREMENT,
	};
};
