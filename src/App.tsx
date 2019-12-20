import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeView from './modules/home/HomeView'
import './index.scss'
import { connect } from 'react-redux'
import { fetchPlants } from './store/plant/slice'
import { handleRouteParams } from './utlis/util'
import PlantView from './modules/plant/PlantView'
import TopBar from './modules/navigation/TopBar'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './muiTheme'
import { Container } from '@material-ui/core'
import AddPlantView from "./modules/plant/AddPlantView"

type Props = typeof mapDispatchToProps
const App = ({ fetchPlantsAction }: Props) => {
  fetchPlantsAction()
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <TopBar />
        <Container>
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
            <Route exact path="/addPlant">
              <AddPlantView />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  )
}
const mapDispatchToProps = {
  fetchPlantsAction: fetchPlants,
}

export default connect(null, mapDispatchToProps)(App)
