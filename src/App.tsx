import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './screens/home/HomeView';
import './index.scss';

const App: React.FC = () => {
	return (
		<Router>
			<div className="body">
				<div className="content">
					<Switch>
						<Route exact path="/">
							<HomeView />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
