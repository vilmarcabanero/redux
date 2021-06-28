import * as CONST from 'utils/constants/actionTypes';

const todosReducer = (state = [], action) => {
	switch (action.type) {
		case CONST.GET_TODOS:
			return action.payload;
		default:
			return state;
	}
};

export default todosReducer;
