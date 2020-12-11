import './App.scss';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';

function App() {
  return (
		<div>
			<Nav />
			<main>
			<Route exact path='/' render={() => <Home />} />

			</main>
			<footer>
				<p>&copy; 2020 Lucky Lizard Technologies</p>
			</footer>
		</div>
	);
}

export default App;
