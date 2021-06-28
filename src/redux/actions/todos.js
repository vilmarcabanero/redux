import axios from 'axios';
import * as CONST from 'utils/constants/actionTypes';

// export const getTodos = () => {
// 	return async dispatch => {
// 		const { data } = await axios.get(
// 			'https://jsonplaceholder.typicode.com/todos'
// 		);
// 		dispatch({ type: CONST.GET_TODOS, payload: data });
// 	};
// };

export const getTodos = () => async dispatch => {
	try {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/todos'
		);
		dispatch({ type: CONST.GET_TODOS, payload: data });
	} catch (err) {
		console.log(err);
	}
};
