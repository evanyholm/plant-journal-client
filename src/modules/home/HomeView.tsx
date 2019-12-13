import React from 'react'
import styles from './HomeView.module.scss'
import { Link } from 'react-router-dom'
import { Plant } from '../plant/types'
import { ReduxState } from '../../store/store'
import { connect } from 'react-redux'

type StateProps = {
  plants: Plant[]
}
const HomeView = ({ plants }: StateProps) => {
  return (
    <div className={styles.container}>
      <p>HomeView</p>
      {plants.map((plant: Plant) => (
        <ListItem key={plant.id} plant={plant} />
      ))}
    </div>
  )
}

type ListItemProps = {
  plant: Plant
}

const ListItem = ({ plant }: ListItemProps) => {
  return (
    <div>
      <Link to={`/plant${plant.id}`}>{plant.name} </Link>
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return {
    plants: state.plantState.plants,
  }
}
export default connect(mapStateToProps)(HomeView)
