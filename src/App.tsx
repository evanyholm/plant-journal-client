import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeView from './components/home/HomeView'
import PlantView from './components/plant/PlantView'
import './index.scss'
import SideNav from './components/navigation/SideNav'
import { handleRouteParams } from './utlis/util'
import { useStore } from './index'
import { initPlants } from './actions/plant'

const App: React.FC = () => {
  initPlants(useStore())
  return (
    <Router>
      <div className="body">
        <div className="content">
          <SideNav />
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route
              path="/plant:id"
              render={params => (
                <PlantView plantId={handleRouteParams(params, 'id')} />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
