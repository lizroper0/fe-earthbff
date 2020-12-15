import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProfileLogo from '../../images/profile-logo.png';
import './nav.scss';

const Nav = ({
	loggedIn,
	setLoggedIn,
	handleLogout,
	shouldRedirect,
	setShouldRedirect,
}) => {
	return (
		<div className='navbar'>
			<Link to='/'>
				<h1>EarthBFF</h1>
			</Link>
			<nav>
				<Link to='/calculator'>Calculator</Link>
				<Link to='/community'>Community</Link>

				{!loggedIn && <Link to='/login'>Login</Link>}
				{loggedIn && <button onClick={handleLogout}>Logout</button>}
				{/* <Link to='/login' onClick = {(event) => {
					if(loggedIn){
						handleLogout()
					} 
				}}>
					
					{' '}
					{loggedIn ? 'Logout' : 'Login'}
				</Link> */}
				<Link to='/profile'>
					<img className='profile-img' src={ProfileLogo} alt='EarthBFFLogo' />
				</Link>
			</nav>
		</div>
	);
};

export default Nav;
