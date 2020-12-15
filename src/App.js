import './App.scss';

import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Calculator from './Components/Calculator/Calculator';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Resources from './Components/Resources/Resources';

function App() {
	const [carbonFootprint, setCarbonFootprint] = useState(0);
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);

	const [shouldRedirect, setShouldRedirect] = useState(false);
	const history = useHistory()
	const handleLogout = () => {
		localStorage.clear();
		setLoggedIn(false);
		setShouldRedirect(true);
		history.push('/login')
	};


	return (
		<div>
			<Nav
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				handleLogout={handleLogout}
				shouldRedirect={shouldRedirect}
				setShouldRedirect={setShouldRedirect}
			/>
			<main>
				<Route exact path='/' render={() => <Home />} />
				<Route
					exact
					path='/calculator'
					render={() => (
						<Calculator
							carbonFootprint={carbonFootprint}
							setCarbonFootprint={setCarbonFootprint}
							loggedIn={loggedIn}
						/>
					)}
				/>
				<Route
					exact
					path='/login'
					render={() => <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
				/>
				<Route
					exact
					path='/signup'
					render={() => (
						<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
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
