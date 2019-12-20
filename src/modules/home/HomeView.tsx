import React from 'react'
import { Link } from 'react-router-dom'
import { Plant } from '../plant/types'
import { ReduxState } from '../../store/store'
import { connect } from 'react-redux'
import {
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"

type StateProps = {
  plants: Plant[]
}
const HomeView = ({ plants }: StateProps) => {
    const styles = useStyles()
  return (
    <div className={styles.root}>
      <Typography variant={'h2'}>Home</Typography>
      <List component={'nav'}>
        {plants.map((plant: Plant) => (
          <ListItem button component={Link} to={`/plant${plant.id}`}>
            <ListItemText primary={plant.name}/>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return {
    plants: state.plantState.plants,
  }
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
        margin: theme.spacing(3, 0, 0, 0),
    },
}))
export default connect(mapStateToProps)(HomeView)
