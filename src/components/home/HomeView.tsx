import React from 'react'
import { observer } from 'mobx-react-lite'
import styles from './HomeView.module.scss'
import { Plant } from '../../types/plant'
import { Link } from 'react-router-dom'
import { useStore } from '../../index'

type OwnProps = {
  plants: Plant[]
}

const HomeView = observer(() => {
  const store = useStore()
  return (
    <div className={styles.container}>
      <p>HomeView</p>
      {store.plants.map((plant: Plant) => (
        <ListItem key={plant.id} plant={plant} />
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
