import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import './community.scss';

const communityPostsUrl = 'http://localhost:8000/posts/';

const Community = ({ loggedIn }) => {
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
			</div>
			<div className='posts-area'>
				{posts.map((post) => {
					return (
						<div className='post-container' key={post.id}>
							<h5>{post.title}</h5>
							<h6>{post.body}</h6>
							<h7> {(post.timestamp)}</h7>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Community;
