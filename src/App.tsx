import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeView from './screens/home/HomeView';
import SideNav from './navigation/SideNav';

const App: React.FC = () => {
    return <Router>
        <div className='body'>
            <div className='content'>
                <SideNav/>
                <Switch>
                    <Route exact path="/">
                        <HomeView/>
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
};


export default App;

