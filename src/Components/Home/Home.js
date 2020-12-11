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
				<div>
					<div>
						<h2>What is EarthBFF?</h2>
						<h5>
							EarthBFF is a a space for learning and community based around the
							idea of treating the Earth like our best friend. The two main
							fixtures of our space is the carbon calculator and the community
							bulletin board. Our mission at EarthBFF is to provide education
							about how your everday actions translate affect carbon emmissions,
							and provide simple actionable steps to help you become a better
							friend to the Earth.
						</h5>
					</div>
					<div>
						<h2>What is a carbon footprint and why should I care about it?</h2>
						<h5>
							Excellent question, I am so glad you asked! the amount of carbon
							dioxide and other carbon compounds emitted due to the consumption
							of fossil fuels. By understnading your personaly carbon footprint
							you can adjust yourr lifestlye in a way that reduces the amout of
							these bad compounds.
						</h5>
					</div>

					<div>
						<h2>Explain Green House Gases (GHG's) Please!</h2>
						<h5>
							GHG's are are gases such as Carbon dioxide, Methane, Nitrous
							oxide, and Flourinated gases that trap heat in the atmosphere ,
							ultimately causing the earth to warm up. An earth that is too warm
							can have many negative consquences. These gases are largely
							created from the production of and burning of fossil fuels like
							coal, natural gas, oil.
						</h5>
					</div>
					<div>
						<h2>How can I be a better friend to the Earth?</h2>
						<h5>Educate yourself! Head to our resources page to learn more.</h5>
						<h5>Join our community and share sustainbility tips or offer support
							to a fellow EarthBFF.
						</h5>
						<h5>
							Make conscious choices about your lifestyle and consumption.
							Believe me, I know it is really hard to hold yourself accountable
							to reducing your carbon footprint since you are just one person
							out of 8 billion. Let me ask you this - what happens when everyone
							operates with this mentality?
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
