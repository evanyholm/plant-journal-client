import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container, CssBaseline, makeStyles } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import HomeView from './modules/home/HomeView'
import './index.scss'
import { fetchPlants } from './store/plant/actions'
import { handleRouteParams } from './utlis/util'
import PlantView from './modules/plant/PlantView'
import TopBar from './modules/navigation/TopBar'
import theme from './muiTheme'
import AddPlantView from './modules/plant/AddPlantView'
import SideNav from './modules/navigation/SideNav'
import * as plantActions from './store/plant/actions'

type Props = typeof mapDispatchToProps
const App = ({ fetchPlantsAction }: Props) => {
  fetchPlantsAction()
  const classes = useStyles()
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <TopBar />
          <SideNav />
          <Container className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact path="/">
                <HomeView />
              </Route>
              <Route
                path="/plant/:id"
                render={params => (
                  <PlantView plantId={handleRouteParams(params, 'id')} />
                )}
              />
              <Route exact path="/addPlant">
                <AddPlantView />
              </Route>
            </Switch>
          </Container>
        </div>
      </ThemeProvider>
    </Router>
  )
}
const mapDispatchToProps = {
  fetchPlantsAction: fetchPlants,
}

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))
export default connect(null, mapDispatchToProps)(App)
