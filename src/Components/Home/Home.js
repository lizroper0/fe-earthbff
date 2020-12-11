import React from 'react';
import EarthBFFLogo from '../../images/woman-and-earth.png';
import './home.scss';

const Home = () => {
	return (
		<div className='container'>
			<div className='home'>
				<div className='tag-line-container'>
					<div className='tag-line'>There is only ONE.</div>
					<div className='tag-line'>Treat it like your BFF.</div>
				</div>
				<div className='home-image'>
					<img src={EarthBFFLogo} alt='EarthBFFLogo' />
				</div>
				<div className='home-button-container'>
					<button className='home-button' href='#learn'>
						Learn More
					</button>
					<button className='home-button' href='#community'>
						Join Our Community
					</button>
				</div>
			</div>

			<div id='learn' className='section-container'>
				<div>Leanrlksjfgsdhgdlkgdsljgkl;sdf</div>
			</div>

			<div id='community' className='section-container'>
				<div>fdksghjlkdfsgsdfjgksldf</div>
			</div>
		</div>
	);
};

export default Home;
