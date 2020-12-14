import './App.scss';

import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Calculator from './Components/Calculator/Calculator';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Resources from './Components/Resources/Resources';

function App() {
	const [calculator, setCalculator] = useState();
	const [token, setToken] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

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
				<Route
					exact
					path='/login'
					render={() => (
						<Login
							token={token}
							setToken={setToken}
							loggedIn={loggedIn}
							setLoggedIn={setLoggedIn}
						/>
					)}
				/>
				<Route
					exact
					path='/signup'
					render={() => (
						<Signup
							token={token}
							setToken={setToken}
							loggedIn={loggedIn}
							setLoggedIn={setLoggedIn}
						/>
					)}
				/>
				<Route exact path='/resources' render={() => <Resources />} />
			</main>
			<footer>
				<p>&copy; 2020 Lucky Lizard Technologies</p>
			</footer>
		</div>
	);
}

export default App;
