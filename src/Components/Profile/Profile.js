import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import './profile.scss';

const Profile = ({ loggedIn }) => {
	const [carbonFootprint, setCarbonFootprint] = useState();
	const [footprintTimestamp, setfootprintTimestamp] = useState();
	const owner = {
		owner: localStorage.id,
	};

	useEffect(() => {
		axios({
			method: 'GET',
			url: 'https://earthbff-backend.herokuapp.com/results/',
			headers: { Authorization: `Token ${localStorage.token}` },
			data: owner,
		}).then((res) => {
			console.log(res.data[0]);
			setCarbonFootprint(res.data[0].carbon_output);
			setfootprintTimestamp(res.data[0].timestamp);
			
		});
	}, []);

	if (!carbonFootprint) {
		<h1>Loading...</h1>;
	}

	return (
		<div className='profile-page'>
			<h1>Account Details</h1>
			<div
				style={{ display: loggedIn ? 'block' : 'none' }}
				className='profile-container'>
				<h3>Email Address: {localStorage.username}</h3>
				<h3>
					Carbon Footprint:{' '}
					<NumberFormat
						value={carbonFootprint}
						displayType={'text'}
						thousandSeparator={true}
					/>{' '}
					lbs CO2e
				</h3>
				<h3>Last Carbon Footprint Calculation: {footprintTimestamp}</h3>
			</div>
			<div
				style={{ display: !loggedIn ? 'block' : 'none' }}
				className='no-profile-container'>
				<h1>Aww shucks, you aren't logged in. </h1>
				<h1> </h1>
				<button className='profile-button'>
					{' '}
					<Link to='/login'>Click Here to Login</Link>
				</button>
			</div>
		</div>
	);
};

export default Profile;
