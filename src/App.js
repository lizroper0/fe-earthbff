import './App.css';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';

function App() {
  return (
		<div>
			<Nav />
			<Route exact path='/' render={() => <Home />} />
			<footer>
				<p>&copy; 2020 Lucky Lizard Technologies</p>
			</footer>
		</div>
	);
}

export default App;
