import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import './calculator.scss';
import axios from 'axios';

const calculatorUrl = 'https://earthbff-backend.herokuapp.com/questions/';

const Calculator = ({ carbonFootprint, setCarbonFootprint, loggedIn }) => {
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
		return <h1>Loading...</h1>;
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
			console.log(res);
		});
	};

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
		<div>
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
				<div className='question-text'>{calculator[currentQuestion].label}</div>
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

			<div
				className='results-container'
				style={{ display: showResults ? 'block' : 'none' }}>
				<h1>Results</h1>
				<h5>
					Carbon Footprint: <br></br>
					<NumberFormat
						value={carbonFootprint}
						displayType={'text'}
						thousandSeparator={true}
					/>{' '}
					lbs CO2e/year
				</h5>
				<h5>
					The average person has this carbon footprint, that his is what you
					have...
				</h5>
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
