import React from 'react'
import { Link } from 'react-router-dom'
import {
  createStyles,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core'
import { Plant } from '../plant/types'
import { ReduxState } from '../../store/store'
import { connect } from 'react-redux'

type Props = ReturnType<typeof mapStateToProps>
const drawerWidth = 240

const drawer = (plants: Plant[]) => {
  return (
    <List component={'nav'}>
      {plants.map((plant: Plant) => (
        <ListItem
          key={plant.id}
          button
          component={Link}
          to={`/plant/${plant.id}`}
        >
          <ListItemText primary={plant.name} />
        </ListItem>
      ))}
    </List>
  )
}
const SideNav = ({ plants }: Props) => {
  const classes = useStyles()
  const theme = useTheme()
  console.log(classes.drawer)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  return (
    <nav>
      <Hidden xsDown implementation="css">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          {drawer(plants)}
        </Drawer>
      </Hidden>
    </nav>
  )
}
const mapStateToProps = (state: ReduxState) => {
  return {
    plants: state.plantState.plants,
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: 700,
      flexShrink: 1,
    },
    drawerPaper: {
      width: drawerWidth,
    },

    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)
export default connect(mapStateToProps)(SideNav)
