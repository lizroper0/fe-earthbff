import React from 'react';
import './profile.scss';

const profileInfo = {
	email: localStorage.username,
	carbon_output: 12345,
};

const Profile = ({ loggedIn }) => {
	return (
		<div>
			<div
				style={{ display: loggedIn ? 'block' : 'none' }}
				className='profile-container'>
				<h1>Account</h1>
				<h1>Welcome {profileInfo.email}</h1>
				<h1>Carbon Footprint: {profileInfo.carbon_output}</h1>
			</div>
			<div
				style={{ display: !loggedIn ? 'block' : 'none' }}
				className='no-profile-container'>
				<h1>Aww shucks, you aren't logged in. </h1>
				<h1> </h1>
				<button>Click here to Login/Signup</button>
			</div>
		</div>
	);
};

export default Profile;
