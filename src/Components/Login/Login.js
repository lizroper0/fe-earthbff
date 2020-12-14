import React, { useState } from 'react';
import axios from 'axios';
import './login.scss';

import { Link } from 'react-router-dom';

const Login = ({  }) => {
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
		}).then((res)=> {
			console.log(res.data.auth_token)
			localStorage.setItem(res.data.auth_token);
		})
	};

	const handleChange = (event) => {
		event.preventDefault();
		setUser({ ...user, [event.target.name]: event.target.value });
	};

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

						<button type='submit'>Log In</button>
					</form>
					<Link to={'/signup'}>
						<p> New to EarthBFF? Sign Up Here.</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
