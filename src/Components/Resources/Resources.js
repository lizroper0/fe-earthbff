import React from 'react';
import ReactPlayer from 'react-player';
import './Resources.scss';
import Weather from '../../images/weather.jpg';
import Sixth from '../../images/sixth.jpg'
import Uninhabitable from '../../images/uninhabitable.jpg'

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
			</div>
			<div className='section-container'>
				<div>
					<h2>Books</h2>
					<div className='section-container' id='books'>
						<div>
							<h5>We Are The Weather by Jonathan Safran Foer</h5>
							<img src={Weather} />
						</div>
						<div>
							<h5>
								The Sixth Extinction: An Unnatural History by Elizabeth Kolbert
							</h5>
							<img src={Sixth} />
						</div>
						<div>
							<h5>
								The Uninhabitable Earth: Life After Warming by David
								Wallace-Wells
							</h5>

							<img src={Uninhabitable} />
						</div>
					</div>
					<h2>Documentaries</h2>
					<div className='section-container' id='documentaries'>
						<div>Our Planet</div>
						<div>Before the Flood </div>
						<div>Cowspiracy: The Sustainability Secret</div>
					</div>

					<div className='section-container' id='podcasts'>
						<h2>Podcasts</h2>
						<div>Warm Regards</div>
						<div>How to Save a Planet</div>
						<div>The Sustainability Agenda</div>
						<div>The Energy Gang</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resources;
