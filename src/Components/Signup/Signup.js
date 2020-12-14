import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.scss';

import Axios from 'axios';

const Signup = () => {
	const [user, setUser] = useState({
		email: '',
		username: '',
		password: '',
		re_password: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		Axios({
			method: 'POST',
			url: 'http://localhost:8000/users/',
			data: user,
		});
	}

	const handleChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	return (
		<div className='signup-page'>
			<div className='signup-container'>
				<div className='signup-form-container'>
					<form>
						<label htmlFor='email'>
							<b>Email</b>
						</label>
						<input
							type='email'
							name='email'
							value={user.email}
							onChange={handleChange}
							placeholder='user@example.com'
							></input>
						<label htmlFor='username'>
							<b>Username</b>
						</label>
						<input
							type='text'
							name='username'
							value={user.username}
							onChange={handleChange}
							placeholder='username'></input>
						<label htmlFor='password'>
							<b>Password</b>
						</label>
						<input
							type='password'
							name='password'
							value={user.password}
							onChange={handleChange}
							placeholder='Password'></input>
						<label htmlFor='re_password'>
							<b>Re-Type Password</b>
						</label>
						<input
							type='password'
							name='re_password'
							value={user.re_password}
							onChange={handleChange}
							placeholder='Re-Type Password'></input>

						<button type='submit' onSubmit={handleSubmit}>
							Sign Up
						</button>
					</form>
					<Link to={'/login'}>
						<p> Already have an account? Click to Login.</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
