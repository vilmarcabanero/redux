import * as CONST from 'utils/constants/actionTypes';

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case CONST.INCREMENT:
			return state + action.payload;
		case CONST.DECREMENT:
			return state - 1;
		default:
			return state;
	}
};

export default counterReducer;
