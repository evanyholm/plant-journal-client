import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeView from './components/home/HomeView'
import PlantView from './components/plant/PlantView'
import './index.scss'
import SideNav from './components/navigation/SideNav'
import { plants } from './mockdata'

const App: React.FC = () => {
  return (
    <Router>
      <div className="body">
        <div className="content">
          <SideNav />
          <Switch>
            <Route exact path="/">
              <HomeView plants={plants} />
            </Route>
            <Route path="/plant:id" children={<PlantView />} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
