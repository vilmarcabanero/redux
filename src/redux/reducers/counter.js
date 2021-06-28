import * as CONST from 'utils/constants/actionTypes';

const counter = (state = 0, action) => {
	switch (action.type) {
		case CONST.INCREMENT:
			return state + 1;
		case CONST.DECREMENT:
			return state - 1;
		default:
			return state;
	}
};

export default counter;
