import React, { useState, useEffect } from 'react';
import './community.scss';

const communityPostsUrl = 'http://localhost:8000/posts/';

const Community = () => {
	const [posts, setPosts] = useState();

	useEffect(() => {
		fetch(communityPostsUrl)
			.then((res) => res.json())
			.then((res) => {
				setPosts(res);
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!posts) {
		return <h1>Loading...</h1>;
	}

	return (
		<div className='community-container'>
			{posts.map((post) => {
				return (
					<div className='post-container' key={post.id}>
						<h3>{post.title}</h3>
						<h3>{post.body}</h3>
					</div>
				);
			})}
		</div>
	);
};

export default Community;
