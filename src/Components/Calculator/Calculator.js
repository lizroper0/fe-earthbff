import React, { useEffect } from 'react';
import './calculator.scss';

const Calculator = ({ calculator, setCalculator }) => {
	useEffect(() => {
		const calculatorUrl = 'http://localhost:8000/questions/';

		fetch(calculatorUrl)
			.then((res) => res.json())
			.then((res) => {
				setCalculator(res[0]);
                console.log(res[0].responses);
                console.log(calculator)
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	// if (!calculator) {
	// 	return null;
	// }

	return (
		<div className='calculator-container'>
			<h1>Carbon Footprint Calculator</h1>
			<div className='calculator'>
                
				{calculator.label}
                
               
				
			</div>
		</div>
	);
};

export default Calculator;
