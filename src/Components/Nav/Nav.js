import React from 'react';
import { Link } from 'react-router-dom';
import ProfileLogo from '../../images/profile-logo.png';
import './nav.css';

const Nav = () => {
	return (
		<div>
			<header>
				<Link to='/'>
					<h1>EarthBFF</h1>
				</Link>
				<nav>
					<Link to='/learn'>Learn</Link>
					<Link to='/community'>Community</Link>
					<Link to='/login'>
						<img className='profile-img' src={ProfileLogo} />
					</Link>
				</nav>
			</header>
		</div>
	);
};

export default Nav;
