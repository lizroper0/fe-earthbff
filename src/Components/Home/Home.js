import React from 'react';
import EarthBFFLogo from '../../images/woman-and-earth.png';
import './home.css';

const Home = () => {
	return (
		<section>
			<div className='home'>
				<div className='tag-line-container'>
					<div className='tag-line'> There is only ONE.</div>
					<div className='tag-line'> Treat it like your BFF.</div>
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

				<div id='learn'>

					Leanrlksjfgsdhgdlkgdsljgkl;sdf


				</div>
				<div id='community'>
					fdksghjlkdfsgsdfjgksldf
				</div>
			</div>
		</section>
	);
};

export default Home;
