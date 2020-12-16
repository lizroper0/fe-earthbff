import React, { useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import './community.scss';

const communityPostsUrl = 'https://earthbff-backend.herokuapp.com/posts/';

const Community = ({ loggedIn }) => {
	const [posts, setPosts] = useState();
	const [showCreateButton, setShowCreateButton] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [postsDisplay, setPostsDisplay] = useState(true);
	const [newPost, setNewPost] = useState({
		title: '',
		body: '',
		author: localStorage.getItem('id'),
	});

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
	}, [postsDisplay]);

	const handleClose = () => {
		setShowModal(false);
		setPostsDisplay(true);
	};

	const handleShowPostForm = () => {
		setShowModal(true);
		setPostsDisplay(false);
		setShowCreateButton(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'https://earthbff-backend.herokuapp.com/posts/',
			headers: { Authorization: `Token ${localStorage.token}` },
			data: newPost,
		}).then((res) => {
			setShowModal(false);
			setShowCreateButton(true);
			setPostsDisplay(true);
		});
	};

	const handleChange = (event) => {
		event.preventDefault();
		setNewPost({ ...newPost, [event.target.name]: event.target.value });
	};

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
					style={{ display: loggedIn && showCreateButton ? 'block' : 'none' }}
					onClick={handleShowPostForm}>
					Create a Post
				</button>
				<button
					className='login-post-button'
					style={{ display: !loggedIn ? 'block' : 'none' }}>
					<Link to='/login'>Login / Signup to Create Post</Link>
				</button>
				<div
					className='post-form-container'
					style={{ display: showModal ? 'block' : 'none' }}>
					<form className='post-form' onSubmit={handleSubmit}>
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
						<button
							className='cancel-button'
							onClick={handleClose}
							type='submit'>
							Cancel
						</button>
					</form>
				</div>
			</div>
			<div
				className='posts-area'
				style={{ display: postsDisplay ? 'flex' : 'none' }}>
				{posts.map((post) => {
					return (
						<div className='post-container' key={post.id}>
							<h5>{post.title}</h5>
							<h6>{post.body}</h6>
							<p> {post.timestamp}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Community;
