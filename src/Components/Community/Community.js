import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import './community.scss';

const communityPostsUrl = 'http://localhost:8000/posts/';

const Community = ({ loggedIn }) => {
    const [posts, setPosts] = useState();
    const [newPost, setNewPost] = useState({
			title: '',
			body: '',
		});
    const [showModal, setShowModal] = useState(false);
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);


    const showPostForm = () => {
			
        };
        
    const handlePostSubmit= () => {};

    const handleSubmit = (event) => {
			// event.preventDefault();
			// axios({
			// 	method: 'POST',
			// 	url: 'https://earthbff-backend.herokuapp.com/token/login',
			// 	data: user,
			// }).then((res) => {
			// 	localStorage.setItem('username', user.email);
			// 	localStorage.setItem('token', res.data.auth_token);
			// 	setLoggedIn(true);
			// });
        };
        
        const handleChange = (event) => {
					// event.preventDefault();
					// setUser({ ...user, [event.target.name]: event.target.value });
				};


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
				<button
					className='post-button'
					style={{ display: loggedIn ? 'block' : 'none' }}
					onClick={showPostForm}>
					Create a Post
				</button>
				<button
					className='post-button'
					style={{ display: !loggedIn ? 'block' : 'none' }}
					// onClick={handlePost}
				>
					Login / Signup to Create Post
				</button>
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
						<label htmlFor='email'>
							<b>Title</b>
						</label>
						<input
							type='text'
							name='title'
							value={newPost.title}
							onChange={handleChange}
							placeholder='Title'></input>
						<label htmlFor='body'>
							<b>Body</b>
						</label>
						<input
							type='text'
							name='body'
							value={newPost.body}
							onChange={handleChange}
							placeholder='Body'></input>

						<button className='post-button' type='submit'>
							Post
						</button>
						<button className='cance-button' type='submit'>
							Cancel
						</button>
					</form>
				</div>
			</div>
			<div className='posts-area'>
				{posts.map((post) => {
					return (
						<div className='post-container' key={post.id}>
							<h5>{post.title}</h5>
							<h6>{post.body}</h6>
							<h7> {post.timestamp}</h7>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Community;
