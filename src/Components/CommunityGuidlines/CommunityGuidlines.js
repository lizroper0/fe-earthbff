import React from 'react';
import './communityGuidelines.scss'
import EarthBFFLogo from '../../images/woman-and-earth.png';


const CommunityGuidlines = () => {
	return (
		<div className='community-guidelines'>
			<h1>Community Guidelines</h1>
			<div>
				<h4>
					EarthBFF strives to provide a safe space to have a science-based
					discourse about climate change and the environment. Help us foster a
					community of inclusion and positivity.
				</h4>
				<h4>
					We created the Community Guidelines so you can help us foster and
					protect this amazing community. By using EarthBFF, you agree to these
					guidelines. We’re committed to these guidelines and we hope you are
					too. Overstepping these boundaries may result in deleted content,
					disabled accounts, or other restrictions. Foster meaningful and
					genuine interactions.
				</h4>
				<h4>
					Respect everyone on EarthBFF, don’t spam the community bulletin board,
					posting inappropriate language, misleading facts, or falsities.
				</h4>
			</div>
			<div className='community-guidelines-image'>
				<img src={EarthBFFLogo} alt='EarthBFFLogo' />
			</div>
		</div>
	);
};

export default CommunityGuidlines;
