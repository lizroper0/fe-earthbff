import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
	return (
		<div>
			<header>
				<Link to='/'>
					<h1>EarthBFF</h1>
				</Link>
				<nav>
					<Link to='/calculator'>Carbon Footprint Calculator</Link>
					<Link to='/resources'>Resources</Link>
					<Link to='/about'>About</Link>
				</nav>
			</header>
		</div>
	);
};

export default Nav;
