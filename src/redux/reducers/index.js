import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import todosReducer from './todos';

const rootReducer = combineReducers({
	counter: counterReducer,
	isLogged: isLoggedReducer,
	todos: todosReducer,
});

export default rootReducer;
