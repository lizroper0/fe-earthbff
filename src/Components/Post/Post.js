import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './post.scss';

const Post = () => {
	const history = useHistory();
	const [newPost, setNewPost] = useState({
		title: '',
		body: '',
		author: localStorage.getItem('id'),
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'https://earthbff-backend.herokuapp.com/posts/',
			headers: { Authorization: `Token ${localStorage.token}` },
			data: newPost,
		})
		history.push('/community');
	};

	const handleChange = (event) => {
		event.preventDefault();
		setNewPost({ ...newPost, [event.target.name]: event.target.value });
	};

	return (
		<div className='post-page'>
			<div className='post-form-container'>
				<form className='post-form' onSubmit={handleSubmit}>
					<label htmlFor='title'>
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
					<button className='post-button' type='submit' onSubmit={handleSubmit}>
						Post
					</button>
					<Link to='/community'>
						<button className='cancel-button'>Cancel</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Post;
