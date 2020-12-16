import React, { useState } from 'react';

import axios from 'axios';
import './login.scss';

import { Link, Redirect } from 'react-router-dom';

const Login = ({ loggedIn, setLoggedIn }) => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:8000/token/login',
			data: user,
		}).then((res) => {
			localStorage.setItem('username', user.email);
			localStorage.setItem('token', res.data.auth_token);
			setLoggedIn(true);
		});
	};

	const getPrimaryKey = () => {
		const username = { username: localStorage.getItem('username') };
		axios({
			method: 'GET',
			url: 'http://localhost:8000/users/me',
			headers: { Authorization: `Token ${localStorage.token}` },
			data: username,
		}).then((res) => {
			console.log(res.data.id);
			localStorage.setItem('id', res.data.id);
		});
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	if (loggedIn) {
		getPrimaryKey();
		return <Redirect to='/calculator' />;
	}

	return (
		<div className='login-page'>
			<div className='login-container'>
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
						<label htmlFor='email'>
							<b>Email</b>
						</label>
						<input
							type='email'
							name='email'
							value={user.email}
							onChange={handleChange}
							placeholder='user@example.com'></input>
						<label htmlFor='password'>
							<b>Password</b>
						</label>
						<input
							type='password'
							name='password'
							value={user.password}
							onChange={handleChange}
							placeholder='Password'></input>

						<button className='login-button' type='submit'>
							Log In
						</button>
					</form>

					<p>
						{' '}
						New to EarthBFF? Sign Up {' '}
						<Link to='/signup'>Here.</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
