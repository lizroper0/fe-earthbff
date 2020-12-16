import React from 'react';
import { Link } from 'react-router-dom';
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
					<Link to='/calculator'>
						<button className='home-button'>Carbon Footprint Calculator</button>
					</Link>
					<Link to='/community'>
						<button className='home-button'>Explore Our Community</button>
					</Link>
				</div>
			</div>
			<div className='section-container'>
				<div>
					<div>
						<h3 id='learn'>What is EarthBFF?</h3>
						<h5>
							EarthBFF is a place for learning and community based around the
							idea of treating the Earth like your best friend. The two main
							fixtures of our space is the carbon footprint calculator and the
							community bulletin board. Our mission at EarthBFF is to provide
							education about how our everday actions translate into carbon
							emmissions, and provide simple actionable steps and a caring
							community to help you become a better friend to the Earth.
						</h5>
					</div>
					<div>
						<h3>What is a carbon footprint and why should I care about it?</h3>
						<h5>
							Excellent question, I am so glad you asked! A person's carbon
							footprint is the amount of carbon dioxide and other carbon
							compounds emitted due to the consumption of fossil fuels. By
							understanding your personal carbon footprint you can adjust your
							lifestlye in a way that reduces the amout of these bad compounds
							you are creating, resulting in a healthier Earth.
						</h5>
					</div>

					<div>
						<h3>How is my carbon footprint related to climate change?</h3>
						<h5>
							Simply put, global climate change is an alteration in the Earth's
							average temperature and rainfall. This doesn't sound so scary, but
							climate change is causing the Earth to warm up resulting in
							melting glaciers, rising sea levels, and changes in severity and
							frequency of natural disasters. Climate change is caused by all of
							the carbon emissions and greenhouse gases made mostly by human
							activity.
						</h5>
					</div>
					<div>
						<h3>Explain Green House Gases (GHG's) Please!</h3>
						<h5>
							GHG's are are gases such as carbon dioxide, methane, nitrous
							oxide, and flourinated gases that trap heat in the atmosphere,
							ultimately causing the earth to warm up. An earth that is too warm
							can have many negative consquences. These gases are largely
							created from the production of and burning of fossil fuels like
							coal, natural gas, and oil.
						</h5>
					</div>
					<div>
						<h3>How can I be a better friend to the Earth?</h3>

						<ul>
							<li>
								<h5>
									Educate yourself! Head to our{' '}
									<Link to='/resources'>resources</Link> page to learn more.
								</h5>
							</li>
							<li>
								<h5>
									Make conscious choices about your lifestyle and consumption.
								</h5>
							</li>
							<li>
								<h5>
									Join our community and share sustainbility tips or offer
									support to a fellow EarthBFF.
								</h5>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
