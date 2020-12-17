import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './community.scss';

const Community = ({ loggedIn }) => {
	const [posts, setPosts] = useState();
	const communityPostsUrl = 'https://earthbff-backend.herokuapp.com/posts/';

	useEffect(() => {
		fetch(communityPostsUrl)
			.then((res) => res.json())
			.then((res) => {
				setPosts(res);
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
			<h1>Community Bulletin Board</h1>
			<div className='community-content-container'>
				<h4>
					Use this space to post postive messages, share climate change facts,
					and engage with the EarthBFF community.
				</h4>
				<h4>
					Posts that go against our{' '}
					<Link to='/communityguidelines'>community guidelines</Link> will be
					removed.
				</h4>

				<button
					className='create-post-button'
					style={{ display: loggedIn ? 'block' : 'none' }}>
					<Link to='/post'>Create a Post</Link>{' '}
				</button>
				<button
					className='login-post-button'
					style={{ display: !loggedIn ? 'block' : 'none' }}>
					<Link to='/login'>Login / Signup to Create Post</Link>
				</button>
			</div>
			<div className='posts-area'>
				{posts.map((post) => {
					return (
						<div className='post-container' key={post.id}>
							<h5>{post.title}</h5>
							<h6>{post.body}</h6>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Community;
