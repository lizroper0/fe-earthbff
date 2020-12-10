import React from 'react';
import EarthBFFLogo from '../../images/woman-and-earth.png'

const Home = () => {
    return (
			<div>
				<h1> We've only got one Earth, so let's treat it like our BFF.</h1>
				<img className='home-image' src={EarthBFFLogo} alt='' />
				<h3>
					Our mission at EarthBFF is to provide education about how your everday
					actions translate affect carbon emmissions, and provide simple
					actionable steps to help you become a better friend to the Earth.
				</h3>
			</div>
		);
};

export default Home;