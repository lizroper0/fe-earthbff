import React, { useState } from 'react';
import './login.scss';

import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {

    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className='login-page'>
			<div className='login-container'>
				<div className='form-container'>
					<Form onSubmit={handleSubmit}>
						<Form.Group size='lg' controlId='email'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								autoFocus
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group size='lg' controlId='password'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
						<Button type='submit' disabled={!validateForm()}>
							Login
						</Button>
					</Form>
					<Link to={'/signup'}>
						<p> New User? Sign Up Here</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
