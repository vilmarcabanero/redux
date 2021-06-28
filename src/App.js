import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from 'redux/actions/counter';

function App() {
	const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  console.log(counter)

	React.useEffect(() => {
		dispatch(increment());
	}, []);

	return <div></div>;
}

export default App;
