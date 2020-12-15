import React from 'react';
import ReactPlayer from 'react-player';
import './Resources.scss';

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
				<div className='resource-button-container'>
					<a href='#books'>
						<button className='resource-button'>Books</button>
					</a>
					<a href='#documentaries'>
						<button className='resource-button'>Documentaries</button>
					</a>
					<a href='#podcasts'>
						<button className='resource-button'>Podcasts</button>
					</a>
				</div>
			</div>
			<div className='section-container'>
				<div>
					<h2>Books</h2>
					<div className='section-container' id='books'>
						<div>We Are The Weather by Jonathan Safran Foer</div>
						<div>
							The Sixth Extinction: An Unnatural History by Elizabeth Kolbert
						</div>
						<div>
							The Uninhabitable Earth: Life After Warming by David Wallace-Wells
						</div>
					</div>
					<h2>Documentaries</h2>
					<div className='section-container' id='documentaries'>
						<div>Our Planet</div>
						<div>Before the Flood </div>
						<div>Cowspiracy: The Sustainability Secret</div>
					</div>
					<h2>Podcasts</h2>
					<div>Warm Regards</div>
					<div>How to Save a Planet</div>
					<div>Our Planet</div>
					<div className='section-container' id='podcasts'></div>
				</div>
			</div>
		</div>
	);
};

export default Resources;
