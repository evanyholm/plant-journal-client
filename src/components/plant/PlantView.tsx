import React from 'react'
import { observer } from 'mobx-react'
import styles from './PlantView.module.scss'
import { plants } from '../../mockdata'

type OwnProps = {
  plantId: string
}
const PlantView = observer(({ plantId }: OwnProps) => {
  const plant = plants.find(plant => plant.id === plantId)
  return <div className={styles.container}>{plant && <p>{plant.name}</p>}</div>
})

export default PlantView
