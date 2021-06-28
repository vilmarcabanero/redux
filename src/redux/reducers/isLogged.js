import * as CONST from 'utils/constants/actionTypes';

const isLoggedReducer = (state = false, action) => {
	switch (action.type) {
		case CONST.LOG_IN:
			return true;
		case CONST.LOG_OUT:
			return false;
		default:
			return state;
	}
};

export default isLoggedReducer;
