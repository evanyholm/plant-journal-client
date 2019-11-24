import React from 'react'
import { observer } from 'mobx-react'
import styles from './HomeView.module.scss'
import { Plant } from '../../types/plant'
import { Link } from 'react-router-dom'

type OwnProps = {
  plants: Plant[]
}
const HomeView = observer(({ plants }: OwnProps) => {
  return (
    <div className={styles.container}>
      <p>HomeView</p>
      {plants.map(plant => (
        <ListItem plant={plant} />
      ))}
    </div>
  )
})

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
export default HomeView
