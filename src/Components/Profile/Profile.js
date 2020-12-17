import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import './profile.scss';

const Profile = ({ loggedIn }) => {
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
						value={localStorage.carbonOutput}
						displayType={'text'}
						thousandSeparator={true}
					/>{' '}
					lbs CO2e
				</h3>
			</div>
			<div
				style={{ display: !loggedIn ? 'block' : 'none' }}
				className='no-profile-container'>
				<h1>Aww shucks, you aren't logged in. </h1>
				<h1> </h1>
				<Link to='/login'>
					<button className='profile-button'> Click Here to Login</button>
				</Link>
			</div>
		</div>
	);
};

export default Profile;
