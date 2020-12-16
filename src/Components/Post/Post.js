import React from 'react';

const Post = () => {

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
}, []);

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


    return (
			<div>
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
		);
};

export default Post;