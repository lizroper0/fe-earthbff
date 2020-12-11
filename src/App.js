import './App.scss';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Calculator from './Components/Calculator/Calculator';

function App() {
	const [calculator, setCalculator] = useState([]);
	return (
		<div>
			<Nav />
			<main>
				<Route exact path='/' render={() => <Home />} />
				<Route
					exact
					path='/calculator'
					render={() => (
						<Calculator calculator={calculator} setCalculator={setCalculator} />
					)}
				/>
			</main>
			<footer>
				{/* <p>&copy; 2020 Lucky Lizard Technologies</p> */}
			</footer>
		</div>
	);
}

export default App;
