import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { ReduxState } from '../../store/store'
import { Plant } from '../plant/types'

type StateProps = {
  plants: Plant[]
}
const HomeView = ({ plants }: StateProps) => {
  return (
    <div>
      <Typography variant="h2">Home</Typography>
      <List component="nav">
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
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return {
    plants: state.plantState.plants,
  }
}

export default connect(mapStateToProps)(HomeView)
