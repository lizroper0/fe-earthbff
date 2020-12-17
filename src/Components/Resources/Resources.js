import React from 'react';
import ReactPlayer from 'react-player';
import './Resources.scss';
import Weather from '../../images/weather.jpg';
import Sixth from '../../images/sixth.jpg';
import Uninhabitable from '../../images/uninhabitable.jpg';

const Resources = () => {
	return (
		<div className='container'>
			<div className='resources'>
				<div className='title-container'>
					<h1>Resources</h1>
				</div>

				<div className='resources-video'>
					<ReactPlayer url='https://www.youtube.com/watch?v=EtW2rrLHs08' />
				</div>
				<h5>
					Watch this great video by National Geographic and Bill Nye for a
					primer on climate change.
				</h5>
			</div>
			<div className='section-container'>
				<h2>Books</h2>
				<div className='book-section-container'>
					<div className='book-image'>
						<img src={Weather} alt='We Are The Weather book cover' />
					</div>
					<div className='book-description'>
						<h3>We Are The Weather: Saving the Planet Begins at Breakfast</h3>
						<h4>By Jonathan Safran Foer</h4>
						<h5>
							In We Are the Weather, Jonathan Safran Foer explores the central
							global dilemma of our time in a surprising, deeply personal, and
							urgent new way.
						</h5>
						<a
							href='https://www.amazon.com/We-Are-Weather-Saving-Breakfast/dp/0374280002'
							target='_blank'
							rel='noreferrer'>
							Click Here to Buy
						</a>
					</div>
				</div>

				<div className='book-section-container'>
					<div className='book-image'>
						<img src={Sixth} alt='The Sixth Extinction book cover' />
					</div>
					<div className='book-description'>
						<h3>The Sixth Extinction: An Unnatural History</h3>
						<h4>By Elizabeth Kolbert</h4>
						<h5>
							In We Are the Weather, Jonathan Safran Foer explores the central
							global dilemma of our time in a surprising, deeply personal, and
							urgent new way.
						</h5>
						<a
							href='https://www.amazon.com/Sixth-Extinction-Unnatural-History-ebook/dp/B00EGJE4G2'
							target='_blank'
							rel='noreferrer'>
							Click Here to Buy
						</a>
					</div>
				</div>

				<div className='book-section-container'>
					<div className='book-image'>
						<img src={Uninhabitable} alt='The Uninhabitable Earth book cover' />
					</div>
					<div className='book-description'>
						<h3>The Uninhabitable Earth: Life After Warming</h3>
						<h4>By David Wallace-Wells</h4>
						<h5>
							It is worse, much worse, than you think. If your anxiety about
							global warming is dominated by fears of sea-level rise, you are
							barely scratching the surface of what terrors are possible—food
							shortages, refugee emergencies, climate wars and economic
							devastation.
						</h5>
						<a
							href='https://www.amazon.com/Uninhabitable-Earth-Life-After-Warming/dp/0525576703'
							target='_blank'
							rel='noreferrer'>
							Click Here to Buy
						</a>
					</div>
				</div>

				<h2>Documentaries</h2>
				<div className='documentary-section'>
					<div className='react-player'>
						<ReactPlayer url='https://www.youtube.com/watch?v=aETNYyrqNYE' />
					</div>

					<div className='react-player'>
						<ReactPlayer url='https://www.youtube.com/watch?v=D9xFFyUOpXo' />
					</div>

					<div className='react-player'>
						<ReactPlayer url='https://www.youtube.com/watch?v=nV04zyfLyN4' />
					</div>
				</div>

				<div className='podcasts-section-container'>
					<h2>Podcasts</h2>

					<div className='podcast-description'>
						<h3>Warm Regards</h3>
						<h5>
							Warm Regards is a podcast about life on a warming planet. The
							conversations are often honest and raw, as we talk with
							newsmakers, researchers, activists, policymakers, artists, and
							others as we push past the graphs and the headlines to get at the
							heart of what it means to live and work in a warming world.
						</h5>
						<a
							href='https://podcasts.apple.com/us/podcast/warm-regards/id1127571287'
							target='_blank'
							rel='noreferrer'>
							Listen Here
						</a>
					</div>
					<div className='podcast-description'>
						<h3>Climate Cast: Minnesota Public Radio</h3>
						<h5>
							MPR News meteorologist Paul Huttner with the latest research on
							our changing climate.
						</h5>
						<a
							href='https://podcasts.apple.com/us/podcast/climate-cast/id628455920'
							target='_blank'
							rel='noreferrer'>
							Listen Here
						</a>
					</div>
					<div className='podcast-description'>
						<h3>How to Save A Planet: Gimlet Media</h3>
						<h5>
							Does climate change freak you out? Want to know what we,
							collectively, can do about it? Us, too. How to Save a Planet is a
							podcast that asks the big questions: What do we need to do to
							solve the climate crisis, and how do we get it done?
						</h5>
						<a
							href='https://podcasts.apple.com/us/podcast/how-to-save-a-planet/id1525955817'
							target='_blank'
							rel='noreferrer'>
							Listen Here
						</a>
					</div>
					<div className='podcast-description'>
						<h3>The Energy Gang: Greentech Media</h3>
						<h5>
							Looking to understand the fast-changing world of energy? This
							isn't your ordinary energy business show. Every week, they debate
							and discuss the latest trends in energy, cleantech, renewables,
							and the environment.
						</h5>
						<a
							href='https://podcasts.apple.com/us/podcast/the-energy-gang/id663379413'
							target='_blank'
							rel='noreferrer'>
							Listen Here
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resources;
