import React from 'react';
import './profile.scss';

const profileInfo = {
	email: 'lizcroper@gmail.com',
	carbon_output: 12345,
};

const Profile = ({ loggedIn }) => {
	return (
		<div className='profile-container'>
			<h1>Account</h1>
			<h1>Welcome {profileInfo.email}</h1>
			<h1>Carbon Footprint: {profileInfo.carbon_output}</h1>
		</div>
	);
};

export default Profile;
