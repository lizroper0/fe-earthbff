import React from 'react';
import { Link } from 'react-router-dom';
import ProfileLogo from '../../images/profile-logo.png';
import './nav.scss';

const Nav = () => {
	return (
			<div className='navbar'>
				<Link to='/'>
					<h1>EarthBFF</h1>
				</Link>
				<nav>
					<Link to='/learn'>Learn</Link>
					<Link to='/community'>Community</Link>
					<Link to='/login'>
						<img className='profile-img' src={ProfileLogo} alt='EarthBFFLogo' />
					</Link>
				</nav>
			</div>
	);
};

export default Nav;
