import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeView from './modules/home/HomeView'
import './index.scss'
import SideNav from './modules/navigation/SideNav'
import { connect } from 'react-redux'
import { fetchPlants } from './modules/plant/slice'
import { handleRouteParams } from './utlis/util'
import PlantView from './modules/plant/PlantView'

type Props = typeof mapDispatchToProps
const App = ({ fetchPlantsAction }: Props) => {
  fetchPlantsAction()
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
const mapDispatchToProps = {
  fetchPlantsAction: fetchPlants,
}

export default connect(null, mapDispatchToProps)(App)
