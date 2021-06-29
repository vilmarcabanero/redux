import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from 'redux/actions/posts';

const Posts = () => {
	const posts = useSelector(state => state.posts);
	const dispatch = useDispatch();
	console.log(posts);

	React.useEffect(() => {
		dispatch(getPosts());
	}, []);
	return <div>Posts</div>;
};

export default Posts;
