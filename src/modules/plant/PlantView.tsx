import React from 'react'
import { ReduxState } from '../../store/store'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

type OwnProps = {
  plantId: string
}

type Props = OwnProps & ReturnType<typeof mapStateToProps>

const PlantView = ({ plantId, plants }: Props) => {
  const plant = plants.find(plant => plant.id === plantId)
  const classes = styles()
  const content = plant ? plant.content.toString() : 'plant'
  return plant ? (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {plant.name}
      </Typography>
      <Typography component="p">{content}</Typography>
    </Paper>
  ) : (
    <div>No plant?</div>
  )
}
const mapStateToProps = (state: ReduxState) => ({
  plants: state.plantState.plants,
})

export default connect(mapStateToProps)(PlantView)
const styles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(3, 0, 0, 0),
  },
}))
