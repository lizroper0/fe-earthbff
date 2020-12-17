import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import './calculator.scss';
import axios from 'axios';

const calculatorUrl = 'https://earthbff-backend.herokuapp.com/questions/';

const Calculator = ({ carbonFootprint, setCarbonFootprint, loggedIn }) => {
	const history = useHistory();
	const [calculator, setCalculator] = useState();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showStart, setShowStart] = useState(true);
	const [showQuestions, setShowQuestions] = useState(false);
	const [showResults, setShowResults] = useState(false);

	const userCarbonOuput = {
		carbon_output: carbonFootprint,
		owner: parseInt(localStorage.getItem('id')),
	};

	useEffect(() => {
		fetch(calculatorUrl)
			.then((res) => res.json())
			.then((res) => {
				setCalculator(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!calculator) {
		return <h1 className='lazy-loader'>Loading...</h1>;
	}

	const handleStart = () => {
		setShowStart(false);
		setShowQuestions(true);
		setCarbonFootprint(0);
	};

	const handleSaveScore = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'https://earthbff-backend.herokuapp.com/results/',
			headers: { Authorization: `Token ${localStorage.token}` },
			data: userCarbonOuput,
		}).then((res) => {
			history.push('/profile');
		});
		
	}

	const handleStartOver = () => {
		setShowStart(false);
		setShowQuestions(true);
		setShowResults(false);
		setCarbonFootprint(0);
		setCurrentQuestion(0);
	};

	const handleResponseClick = (carbon_output) => {
		const nextQuestion = currentQuestion + 1;
		const newCarbonFootprint = carbonFootprint + carbon_output;
		setCarbonFootprint(newCarbonFootprint);

		if (nextQuestion < calculator.length) {
			setCurrentQuestion(nextQuestion);
			setCarbonFootprint(newCarbonFootprint);
		} else {
			setShowQuestions(false);
			setShowResults(true);
		}
	};

	return (
		<div className='calculator-page-container'>
			<div
				className='start-container'
				style={{ display: showStart ? 'block' : 'none' }}>
				<h1>Carbon Footprint Calculator</h1>
				<h5>
					The first step to living a more sustainable life and being a better
					friend to the Earth is to understand how your current lifestyle
					choices affect climate change.
				</h5>
				<h5>
					A good way to measure your affect on climate change is your carbon
					footprint.
				</h5>
				<h5>
					A person's carbon footprint is the amount of carbon dioxide and other
					carbon compounds emitted due to the consumption of fossil fuels. By
					understnading your personal carbon footprint you can adjust your
					lifestlye in a way that reduces the amount of these bad compounds that
					you generate.
				</h5>
				<h5>
					Carbon footprints are measured in Carbon Dioxide Equivalents (C02e)
					which is just a way of converting all greenhouse gases to be measured
					in C02.
				</h5>
				<p>
					Note: This calculator uses the guidance and methodology from
					<a
						href='https://www3.epa.gov/carbon-footprint-calculator/'
						target='_blank'
						rel='noreferrer'>
						{' '}
						here{' '}
					</a>
					and
					<a
						href='http://shrinkthatfootprint.com/food-carbon-footprint-diet'
						target='_blank'
						rel='noreferrer'>
						{' '}
						here.
					</a>
				</p>
				<h5>Are you ready to get started?</h5>

				<button className='start-button' onClick={() => handleStart()}>
					Start Calculator
				</button>
			</div>

			<div
				className='calculator-container'
				style={{ display: showQuestions ? 'block' : 'none' }}>
				<h5>
					Carbon Footprint: <br></br>
					<NumberFormat
						value={carbonFootprint}
						displayType={'text'}
						thousandSeparator={true}
					/>{' '}
					lbs CO2e/year
				</h5>
				<div className='calculator-area'>
					<div className='question-text'>
						{calculator[currentQuestion].label}
					</div>
					<div className='question-description'>
						{calculator[currentQuestion].description}
					</div>
					<div className='response-section'>
						{calculator[currentQuestion].responses.map((response) => (
							<button
								className='response-button'
								onClick={() => handleResponseClick(response.carbon_output)}
								key={response.carbon_output}>
								{response.label}
							</button>
						))}
					</div>
				</div>
			</div>

			<div
				className='results-container'
				style={{ display: showResults ? 'block' : 'none' }}>
				<h1>Results</h1>
				<h3>
					Carbon Footprint: <br></br>
					<NumberFormat
						value={carbonFootprint}
						displayType={'text'}
						thousandSeparator={true}
					/>{' '}
					lbs CO2e/year
				</h3>
				<div className='results-details'>
					<h5>
						According to the EPA, the average American has a carbon footprint of
						19,702 lbs CO2e per year. How do you compare?
					</h5>
					<div className='suggestions'>
						<h4>Here are some ways to improve your carbon footprint:</h4>
						<h5>Home</h5>
						<ul>
							<li>
								Do an energy audit of your home. This will show how you use or
								waste energy and help identify ways to be more energy efficient.
							</li>
							<li>
								Switch lights off when you leave the room and unplug your
								electronic devices when they are not in use.
							</li>
							<li>
								Turn your water heater down to 120˚F. This can save about 550
								pounds of CO2 a year.
							</li>
						</ul>
						<h5>Transportation</h5>
						<ul>
							<li>
								Drive less. Walk, take public transportation, carpool, rideshare
								or bike to your destination when possible.
							</li>
							<li>
								If you can’t avoid flying, offset the carbon emissions of your
								travel.
							</li>
						</ul>
						<h5>Waste</h5>
						<ul>
							<li>
								Don’t buy fast fashion. Trendy, cheap items that go out of style
								quickly get dumped in landfills where they produce methane as
								they decompose.
							</li>
							<li>
								Buy less stuff! And buy used or recycled items whenever
								possible.
							</li>
							<li>Compost your food waste if possible.</li>
						</ul>
						<h5>Food</h5>
						<ul>
							<li>
								Eat low on the food chain. This means eating mostly fruits,
								veggies, grains, and beans.
							</li>
							<li>
								Buy foodstuffs in bulk when possible using your own reusable
								container.
							</li>
							<li>
								Choose organic and local foods that are in season. Transporting
								food from far away, whether by truck, ship, rail or plane, uses
								fossil fuels for fuel and for cooling to keep foods in transit
								from spoiling.
							</li>
						</ul>
						Source:{' '}
						<a
							href='https://blogs.ei.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/'
							target='_blank'
							rel='noreferrer'>
							{' '}
							Earth Institue | Columbia University
						</a>
					</div>
				</div>
				<button
					className='results-button'
					style={{ display: loggedIn ? 'block' : 'none' }}
					onClick={handleSaveScore}>
					Save to Profile
				</button>
				<button className='results-button' onClick={handleStartOver}>
					Start Over
				</button>
			</div>
		</div>
	);
};


export default Calculator;
