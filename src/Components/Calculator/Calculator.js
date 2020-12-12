import React, { useState } from 'react';
import './calculator.scss';

const quiz = [
	{
		label: 'Approximately how many miles do you drive per week?',
		description:
			'The average mileage per vehicle in the US is 219 miles/week. When answering this question, consider how much you use your car.  Do you use your car to commute to work, go shopping, run errands? Or do you walk, bike or take advantage of public transportation?',
		responses: [
			{
				label: 'Below Average',
				carbon_output: 5242,
			},
			{
				label: 'Average',
				carbon_output: 10484,
			},
			{
				label: 'Above Average',
				carbon_output: 15726,
			},
		],
	},

	{
		label: 'How much natural gas do you consume per month?',
		description:
			'Natural gas is used in many things in the home like heating homes and water, to fuel cooking appliances and to dry clothes.  When answering this question, think about things like how long your showers usually last or whether you live in a place that has cold winters.',
		responses: [
			{
				label: 'Below Average',
				carbon_output: 1536,
			},
			{
				label: 'Average',
				carbon_output: 3071,
			},
			{
				label: 'Above Average',
				carbon_output: 4607,
			},
		],
	},
	{
		label: 'How much electricity do you consume per month?',
		description:
			'For a benchmark, the person spends about $45 a month on electricity.  Consider the cost of your monthly bill and what your personal share is if you live with other people.',
		responses: [
			{
				label: 'Below Average',
				carbon_output: 2728,
			},
			{
				label: 'Average',
				carbon_output: 5455,
			},
			{
				label: 'Above Average',
				carbon_output: 8183,
			},
		],
	},
	{
		label: 'How much waste do you generate per month?',
		description:
			'A few things to consider here. Are you taking any action to reduce waste like compost? Hoe much  of your food goes to waste each time you go grocery shopping?  Do you buy things that come with lots of packaging?',

		responses: [
			{
				label: 'Below Average',
				carbon_output: 346,
			},
			{
				label: 'Average',
				carbon_output: 692,
			},
			{
				id: 12,
				question: 4,
				label: 'Above Average',
				carbon_output: 1038,
			},
		],
	},
	{
		label: 'Do you recycle aluminum and steel cans?',
		description: 'Think soda cans and cans of food like beans.',

		responses: [
			{
				label: 'Yes',
				carbon_output: -89,
			},
			{
				question: 5,
				label: 'No',
				carbon_output: 0,
			},
		],
	},
	{
		label: 'Do you recycle plastic?',
		description:
			"Seems like everything's wrapped in plastic today, doesn't it?",

		responses: [
			{
				label: 'Yes',
				carbon_output: -36,
			},
			{
				label: 'No',
				carbon_output: 0,
			},
		],
	},
	{
		label: 'Do you recycle glass?',
		description:
			'Kombucha bottles, wine bottles, even jelly jars! Make sure to clean them out before recycling.',
		responses: [
			{
				label: 'Yes',
				carbon_output: -25,
			},
			{
				label: 'No',
				carbon_output: 0,
			},
		],
	},
	{
		label: 'Do you recycle newspaper and magazines?',
		description:
			"If you are in the younger generations, maybe you don't even get this things delivered to your house.",
		responses: [
			{
				label: 'Yes',
				carbon_output: -141,
			},
			{
				label: 'No',
				carbon_output: 0,
			},
		],
	},
	{
		label:
			'What most closely describes your diet in relation to consumption of animal products?',
		description:
			'Do you prefer your big juicy burger of the beef variety or something like the Impossible Burger?',
		responses: [
			{
				label: 'Meat Lover',
				carbon_output: 7275,
			},
			{
				label: 'Average Meat Eater',
				carbon_output: 5512,
			},
			{
				label: 'No Beef',
				carbon_output: 4189,
			},
			{
				label: 'Vegetarian',
				carbon_output: 3748,
			},
			{
				label: 'Vegan',
				carbon_output: 3307,
			},
		],
	},
];

const Calculator = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	//const [carbonFootprint, setCarbonFootprint] = useState(0);

	// useEffect(() => {
	// 	fetch(quiz)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setCurrentQuestion(res[0]);
	// 			console.log(res);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	// if (!currentQuestion) {
	// 	return null;
	// }
	const handleResponseClick = (response) => {
		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
	};

	return (
		<div className='calculator-container'>
			<h1>Carbon Footprint Calculator</h1>
			<div className='question-text'>{quiz[currentQuestion].label}</div>
			<div className='question-description'>
				{quiz[currentQuestion].description}
			</div>
			<div className='answer-section'>
				{quiz[currentQuestion].responses.map((response) => (
					<button
						onClick={() => handleResponseClick()}
						key={response.carbon_output}>
						{response.label}
					</button>
				))}
			</div>
		</div>
	);
};

export default Calculator;
