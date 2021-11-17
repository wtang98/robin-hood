import './App.scss'
import Header from './components/header/header'
import Newsfeed from './components/newsfeed/newsfeed';
import Stats from './components/stats/stats'
const App = () => {
	return (
		<div className="app">
			<div className="app__header">
				<Header/>
			</div>
			<div className="app__body">
				<div className="app__body-container">
					<Newsfeed/>
					<Stats/>
				</div>
			</div>
		</div>
	);
}

export default App;
